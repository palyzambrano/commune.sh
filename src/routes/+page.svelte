<script lang="ts">
  import Sparkles from '$lib/components/Sparkles.svelte';
	import Button from '$lib/components/Button.svelte';
	import CardPost from '$lib/components/CardPost.svelte';


    const FEATURES = [
      {
        title: "Message gardening",
        text: "What starts as an ephemeral chat message might evolve into an intricate thread with multiple incoming/outgoing connections. Commune facilitates this progression by making chat-view and board-view two different view modes of the one same channel.",
        imageUrl: "http://via.placeholder.com/900x900",
      },
      {
        title: "Web-public chat",
        text: "Make your digital village gate-less, so new visitors may freely look around before making themselves known. Grant informative threads a proper place on the indexable web.",
        imageUrl: "http://via.placeholder.com/400x400",
      },
      {
        title: "Webrings & common channels",
        text: "Your friends are just a click away, discoverable through Related Space lists. Better yet, closely aligned communities can carry common channels together, e.g. syndicating a single #offtopic channel across multiple spaces.",
        imageUrl: "http://via.placeholder.com/400x400",
      },
      {
        title: "Fediverse integration",
        text: "While the Matrix network is its own federated system, Commune also connects with the larger fediverse, i.e. Mastodon, Lemmy et.al. Log in with your fediverse account, verify links and more.",
        imageUrl: "http://via.placeholder.com/400x400",
      },
      {
        title: "Discord sync",
        text: "Already got a community on Discord? No worries, we'll sync it up for you, and suddenly your Discord server will be fully backed up and web-readable via its Commune bridge",
        imageUrl: "http://via.placeholder.com/400x400",
      },
      {
        title: "Incremental Encryption",
        text: "Avoid the complexities of encryption in the nascent stages of community. Opt-in to the advanced security features of Matrix when the time is right.",
        imageUrl: "http://via.placeholder.com/400x400",
      },
    ];
  
    let activeFeaturePreview = 0;
  
    const setActive = (val) => {
      activeFeaturePreview = val;
    };
  </script>
  <main class="dark:bg-[#0A0A0A] dark:text-zinc-50 pt-10">
    <!-- Section 1 / Hero-->
    <section class="dark:bg-gradient-to-b from-[#0A0A0A] from-70% to-[#5A1939] md:pt-16">
      <div class="flex justify-around mx-auto md:w-64 w-3/5 down-title">
        <h4 class="text-2xl font-bold">MAKE</h4>
        <img width="25" src="/svg/space.svg" alt="*">
        <h4 class="text-2xl font-bold">SPACE</h4>
      </div>
      <h2 class="absolute z-20 text-[55px] md:text-9xl uppercase text-center  font-title md:pt-4 w-full ttl-opacity">
        ignite union
      </h2>
      <Sparkles></Sparkles>
      <figure class="flex justify-center z-10">
        <img src="/hero.png" class="md:w-8/12 w-12/12 -mt-16  top-[100px] dark:md:-mt-[188px] dark:-mt-[165px] uphero"/>
      </figure>
      <div class="text-center py-16">
        <p class="md:w-[430px] m-auto p-4 pb-8 text-lg">
          <strong>A tool for community builders,</strong>
          a network: Every Commune space is part of the Matrix federation.
        </p>
        <Button>
          Try the pre-alpha at app.commune.sh
        </Button>
      </div>
    </section>
  
    <!-- Section 2 / Protocol-centric-->
    <section class="bg-[#E6E6E6] border-y  border border-y-zinc-950 dark:border-none dark:bg-gradient-to-b from-[#5A1939] from-70% to-[#0A0A0A] md:pt-8 py-8">
      <div class="w-11/12 mx-auto dark:rounded-3xl dark:bg-zinc-950/40 pb-10">
        <h3 class="md:ml-48 m-0 text-2xl pt-10 pb-4 text-center md:text-left font-title">
          Protocol-centric software
        </h3>
        <figure class="m-auto flex justify-center">
          <img class="w-9/12" src="http://via.placeholder.com/900x400" alt="" />
        </figure>
        <div class="flex flex-col md:flex-row md:justify-around mt-10 w-11/12 m-auto text-center md:text-left">
          <p class="md:w-1/3 px-4 text-xl pb-4">
            We’re building Commune on top of the federated and secure [Matrix
            protocol], extending it with public-first community features.
          </p>
          <p class="md:w-1/3 px-4 text-xl">
            Being grounded in a protocol of chat interoperability means a maximalist
            approach to user autonomy and [credible exit].
          </p>
        </div>
      </div>
    </section>
  
    <!--Section 3 / Back to the future-->
    <section class="md:w-8/12 w-11/12 m-auto md:py-10 py-4">
      <h3 class="text-2xl m-0 pt-10 text-left font-title">Back to the <br> future of web 1. ½</h3>
      <div class="text-xl m-auto">
        <p class="py-4 md:pb-8 ">
          In the glory days of web 1.0, social websites would prominently link out
          to their digital neighbors via lists known as webrings! Fellow communities
          they could vouch for.
        </p>
  
        <p class="pb-8">
          It was a time of greater connectivity between communal web spaces, each
          serving as an entryway into a tightly knit but infinitely expansive
          hinterland of digital villages.
        </p>
  
        <p class="pb-8">
          We are bringing back the good vibes of the old web neighborhoods. Not by
          regressing to a bygone era, but by
          <a class="font-bold" href="https://blog.erlend.sh/web-of-the-people">
            building the web 1.½ that should have been;
          </a>
        </p>
      </div>
    </section>
  
    <!--Section 4 / Key Features--> 
    <section class="py-20 border-y  border-y-zinc-950">
        <div class="flex flex-col md:flex-row md:w-10/12  w-11/12 m-auto border rounded-3xl md:p-10 p-4 border-zinc-950 bg-[#E6E6E6] bg-features">
            <div class="md:w-2/5  md:mr-8">
              <h3 class="text-2xl pb-8 font-title">Key Features</h3>
              <div class="flex flex-wrap m-auto justify-around">
                {#each FEATURES as ft, idx}
                  <button
                    class="text-sm w-[48%] h-16 mb-2 dark:text-zinc-50 bg-transparent border-solid border border-zinc-950 dark:border-zinc-50 dark:rounded-full"
                    class:active={activeFeaturePreview === idx}
                    on:click={() => setActive(idx)}
                  >
                    {ft.title}
                  </button>
                {/each}
              </div>
              <h1 class="pt-4 mt-4 dark:border-0 border-t border-zinc-950  dark:border-t-zinc-50 border-solid">{FEATURES[activeFeaturePreview].title}</h1>
              <p class=" pt-4">{FEATURES[activeFeaturePreview].text}</p>
            </div>
            <figure  class="md:w-3/5 pt-8">
              <img
              class="objet-cover md:h-[500px] h-300 w-full"
                src={FEATURES[activeFeaturePreview].imageUrl}
                alt={FEATURES[activeFeaturePreview].title}
              />
            </figure>
        </div>
    </section>

    <section class="mt-10 pb-10 ">
        <span class="text-left pl-4 md:pl-32 text-xl">The story of our product </span>

        <div class="md:w-10/12 11/12 mx-auto flex flex-wrap justify-between ">
          <CardPost></CardPost>
          <CardPost></CardPost>

        </div>
    </section>
  </main>
  
  <style lang="postcss">
    .active {
      @apply bg-[#E74F3B] text-zinc-50;
    }
  
    :global(html.dark) .active {
      @apply bg-gradient-to-r from-[#357474] to-[#FF2350];
    }

    :global(html.dark) .bg-features {
        background: rgb(90,25,57);
        background: radial-gradient(circle, rgba(90,25,57,1) 0%, #160910 48%);
    }

    .uphero { 
      position: relative;
      animation: pop-hero;
      animation-duration: 2s;
    }
    .down-title { 
      position: relative;
      animation: down-title;
      animation-duration: 1s;
    }

    .ttl-opacity {
      animation: title-opacity;
      animation-duration: 1s;
    }


    @keyframes pop-hero {
      from {top: 130px;}
      to {top: 100px;}
    }
    @keyframes down-title {
      from {top: -30px;}
      to {top: 0px;}
    }

    @keyframes title-opacity {
      from {opacity: 0.0;}
      to{opacity: 1;}
    }

  </style>