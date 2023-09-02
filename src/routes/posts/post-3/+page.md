## Introduction

In recent days may be you listen about resumable web app. In this blog post we will explore resumability by building Qwikhub (Qwikcity + Github rest api ) web app.

## Qwik 
Qwik is an open source frontend framework reimaginated for the edge. Todays almost frameworks work on the concept of hydration (may be partial or island based architecture) to make web app interactive on the client but qwik is the first framework  build on top of resumability and some framework also implementing  resumability like marko.

Real world app is not so simple having only some data fetching or some mutations there we deal with lots of third party scripts like google analytics and lots of javascript (added by third party library + own code)
to make site more interactive. Many frameworks is working to solve and even solved the issues to send minimum or zero javascript to client like you may be come up with Fresh (Deno + Preact) , Sveltekit (Svelte meta framework) , Solidstart (Solid meta framework).

The things that make Qwik standout from the crowd is that Qwik app make site interactive using resumability without any expensive overhead of hydrating or rerun the same things twice on both server and client. 

## Qwikcity
Qwikcity is a meta framework build on top of Qwik. It provides file based routing, nested layouts etc.. to build complete web app.

Lets init new qwikcity project 

```
pnpm create qwik@latest
```

follow your terminal instructions to configure and install dependencies.

After all setup start dev server

```
pnpm start
```
It will open your qwikcity app on `http://localhost:5173/`

Install tailwindcss 

```
pnpm run qwik add tailwind
```

After that add tailwind directives inside `src/global.css` and restart you dev server.

Create `src/components/appbar/index.tsx` where we will add code for nav bar

```tsx
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { GithubIcon } from "~/icons/github";
import { QwikIcon } from "~/icons/qwik";

export const Appbar = component$(() => {
  return (
    <header class="bg-white border-b border-gray-300 shadow">
      <nav class="max-w-7xl px-4 mx-auto h-16 w-full flex items-center justify-between">
        <Link href="/" class="flex items-center space-x-3">
          <QwikIcon size={36} />
          <h1 class="text-2xl ">Qwikhub</h1>
        </Link>

        <ul>
          <li>
            <a href="https://github.com/harshmangalam/qwikhub" target="_blank">
              <GithubIcon />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
});


```

Here the magic is `component$` `$` signal qwik optimizer to extract code for lazy loading and delay the execution of code as long as possible.For performance reason qwik optimizer is writter in rust.

The beauty of qwik code is that you can pick the html code from dev tools and paste is another tab your app will be interactive because all required data to make a site interactive available in html.

`<QwikIcon> and <GithubIcon />` are icons available in `src/icons` folder.

`Link` is a framework specific component for navigating from one page to another.


Lets add our navbar in layout so that it will be availabe even we will navigate to another page.

`src/routes/layout.tsx`

```tsx

import { component$, Slot } from "@builder.io/qwik";
import { Appbar } from "~/components/appbar";

export default component$(() => {
  return (
    <div>
      <Appbar />
      <main class="max-w-7xl w-full mx-auto px-4 py-6">
        <Slot />
      </main>
    </div>
  );
});


```
 `<Slot>` component is a placeholder to render route data.
You can put those data in layout that you want to show on all page.


Lets create home page that will render a form to take username value from input.

`src/routes/index.tsx`

```tsx
import { component$, Resource } from "@builder.io/qwik";
import { DocumentHead, RequestHandler, useEndpoint } from "@builder.io/qwik-city";
import { fetchUser } from "~/services/api";

export default component$(() => {
  const endpointData = useEndpoint<ReturnType<typeof onPost>>();
  return (
    <Resource
      value={endpointData}
      onPending={() => <div>Loading...</div>}
      onRejected={() => <div>Error</div>}
      onResolved={(data: any) => (
        <section class=" max-w-md mx-auto">
          <form method="POST" class="flex flex-col space-y-4">
            <div class="flex flex-col space-y-2">
              <label
                class={`text-gray-600 ${
                  data?.error?.username ? "text-red-500 " : ""
                }`}
                for="username"
              >
                Github username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="harshmangalam"
                class={`${data?.error?.username ? "border-red-500" : ""}`}
              />
              {data?.error && (
                <p class="text-red-500 text-sm ">{data.error.username}</p>
              )}
            </div>

            <button
              type="submit"
              class="bg-blue-500 text-white font-medium py-3 px-4"
            >
              Continue
            </button>
          </form>
          {data?.error?.message && (
            <div class="mt-6 border border-red-300 text-red-500 p-4">
              <p>{data.error.message}</p>
              {data.error.documentation_url && (
                <a
                  href={data.error.documentation_url}
                  target="_blank"
                  class="text-blue-500 mt-2 block"
                >
                  View details
                </a>
              )}
            </div>
          )}
        </section>
      )}
    />
  );
});

export const onPost: RequestHandler = async ({ request, response }) => {
  const formData = await request.formData();
  const username = formData.get("username");

  if (!username || username.toString().trim().length === 0) {
    return {
      error: {
        username: "Username is required!",
      },
    };
  }

  const [ok, data] = await fetchUser(username.toString());

  if (!ok) {
    return {
      error: data,
    };
  }

  throw response.redirect(`/${username}`);
};


export const head: DocumentHead = {
  title: 'Home | Qwikhub',
  meta: [
    {
      name: 'description',
      content: 'Web app build with github rest api and qwikcity',
    },
  ],
};

```

If you want to server render your data you can utilize `onGet` for data fetching and `onPost`, `onPut` etc.. for data mutation. 

When form data will be sumitted from client side it will available in your `onPost` request handler and then you can easily get it as a `FormData`

When you will return any data from `onPost` it will available in your client side using `useEndpoint()`. 
`<Resource>` component help you to track resource and you can render  data according to status.

After validating  username redirected to username dynamic  page using  `response.redirect()`

You can return `head` object from page to render data in `<head></head>`.


`fetchUser` function is utilizing web fetch() to fetch data from github rest api.

Lets create a dynamic page that will show username data

`src/routes/[username]/index.tsx`

```tsx

import { component$, Resource } from "@builder.io/qwik";
import {
  DocumentHead,
  Link,
  RequestHandler,
  useEndpoint,
} from "@builder.io/qwik-city";
import { InfoItem } from "~/components/info-item";
import { CompanyIcon } from "~/icons/company";
import { LinkIcon } from "~/icons/link";
import { LocationIcon } from "~/icons/location";
import { TwitterIcon } from "~/icons/twitter";
import { UsersIcon } from "~/icons/users";
import { fetchUser } from "~/services/api";

export default component$(() => {
  const endpointData = useEndpoint();
  const links = [
    {
      name: "Repository",
      href: "repos",
    },
  ];

  return (
    <Resource
      value={endpointData}
      onPending={() => <div>Loading...</div>}
      onRejected={() => <div>Error</div>}
      onResolved={(data: any) => (
        <div class="mt-6 max-w-md mx-auto">
          <div>
            <img
              src={data.avatar_url}
              alt={data.name}
              class={`w-64 h-64  rounded-full`}
            />

            <div class={`mt-4`}>
              <h2 class={`text-2xl font-bold`}>{data.name}</h2>
              <h2 class={`text-xl text-gray-500`}>{data.login}</h2>
            </div>
            <p class={`mt-4 text-gray-700 max-w-md`}>{data.bio}</p>

            <div class={`mt-4 flex items-center space-x-2`}>
              <Link
                href={`/${data.login}/followers`}
                class={`flex items-center space-x-1 group`}
              >
                <UsersIcon />
                <p class={`font-medium group-hover:text-blue-500`}>
                  {data.followers}
                </p>
                <p class={`text-gray-600 text-sm group-hover:text-blue-500`}>
                  {data.followers > 1 ? "followers" : "follower"}
                </p>
              </Link>
              <span>&bull;</span>
              <Link
                href={`/${data.login}/followings`}
                class={`flex items-center space-x-1 hover:text-blue-500 group`}
              >
                <p class={`font-medium group-hover:text-blue-500`}>
                  {data.following}
                </p>
                <p class={`text-gray-600 text-sm group-hover:text-blue-500`}>
                  {data.following > 1 ? "followings" : "following"}
                </p>
              </Link>
            </div>

            {/*  */}
            <div class={`mt-4 flex flex-col space-y-2`}>
              {data.company && (
                <InfoItem text={data.company} icon={<CompanyIcon />} />
              )}
              {data.location && (
                <InfoItem text={data.location} icon={<LocationIcon />} />
              )}
              {data.blog && (
                <InfoItem
                  link={data.blog}
                  text={data.blog}
                  icon={<LinkIcon />}
                />
              )}
              {data.twitter_username && (
                <InfoItem
                  link={`https://twitter.com/${data.twitter_username}`}
                  text={`@${data.twitter_username}`}
                  icon={<TwitterIcon />}
                />
              )}
            </div>
          </div>
          <ul class="mt-6">
            {links.map((link) => (
              <li>
                <Link
                  href={`/${data.login}/${link.href}`}
                  class=" hover:bg-gray-200 bg-gray-100  px-4 py-2 rounded-full"
                >
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    />
  );
});

export const onGet: RequestHandler = async ({ response, params }) => {
  const username = params.username;
  if (!username || username.toString().trim().length === 0) {
    throw response.redirect("/");
  }

  const [ok, data] = await fetchUser(username.toString());

  if (!ok) {
    throw response.redirect("/");
  }

  return data;
};

export const head: DocumentHead = {
  title: "User | Qwikhub",
};


```

here we are fetching user data on server using `onGet` request handler and redirecting to home page in case invalid username otherwise we return the user data.

Lets deploy this site on netlify. Add netlify adopter using qwik add

```
pnpm run qwik add netlify-edge

```

And now you can deploy it on netlify.

## Links

[LIVE URL](https://qwikhub.netlify.app/)
<br/>
[Github Repo](https://github.com/harshmangalam/qwikhub)