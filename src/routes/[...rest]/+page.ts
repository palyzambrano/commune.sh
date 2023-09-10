import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export function load(event) {
  throw redirect(308, `https://app.commune.sh${event.url.pathname}`);
}
