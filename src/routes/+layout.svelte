<!-- Leave this. Or you can add more content for your custom layout -->
<script>
  import "@fontsource/inter";

  import { browser } from "$app/environment";

  if (browser) {
    localStorage.setItem("theme", "dark");
    localStorage.setItem("SVELTEPRESS_DARK_MODE", "on");
  }
</script>

<slot />
