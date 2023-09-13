import { redirect } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').HandleServerError} */
export async function handleError({ error, event }) {
  if (error instanceof Error) {
    if (error.message.includes("Not found")) {
       redirect(308, `https://app.commune.sh${event.url.pathname}`);
    }
  }
}
