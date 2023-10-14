<script lang="ts">
  const FEATURES = [
    {
      title: "Message gardening",
      text: "What starts as an ephemeral chat message might evolve into an intricate thread with multiple incoming/outgoing connections. Commune facilitates this progression by making chat-view and board-view two different view modes of the one same channel.",
      imageUrl: "http://via.placeholder.com/400x400",
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
<main class="dark:bg-[#0A0A0A]">
  <!-- Section 1 / Hero-->
  <section class="dark:bg-gradient-to-b from-[#0A0A0A] from-70% to-[#5A1939]">
    <div class="flex justify-around mx-auto md:w-64">
      <h4 class="text-2xl">MAKE</h4>
      <span>*</span>
      <h4 class="text-2xl">SPACE</h4>
    </div>
    <h2 class="text-4xl md:text-9xl uppercase text-center md:mb-[-50px]">
      ignite union
    </h2>
    <figure class="flex justify-center">
      <img src="/hero.png" class="md:w-8/12 w-12/12" />
    </figure>
    <div class="text-center pb-16">
      <p class="md:w-96 m-auto p-8 text-xl">
        <strong>A tool for community builders,</strong>
        a network: Every Commune space is part of the Matrix federation.
      </p>
      <a
        class="text-zinc-50 bg-[#E74F3B] dark:bg-gradient-to-r from-[#357474] to-[#FF2350] p-4 dark:rounded-full inline-block"
        href="https://app.commune.sh"
        target="_blank"
      >
        Try the pre-alpha at app.commune.sh
      </a>
    </div>
  </section>

  <!-- Section 2 / Protocol-centric-->
  <section class="bg-[#E6E6E6] dark:bg-gradient-to-b from-[#5A1939] from-30% to-[#0A0A0A] md:pt-16 py-8">
    <div class="w-11/12 mx-auto dark:rounded-3xl dark:bg-zinc-950/40">
      <h3 class="text-2xl m-0 pt-10 text-center md:pl-24 md:text-left">
        Protocol-centric software
      </h3>
      <figure class="flex justify-center">
        <img class="w-11/12" src="http://via.placeholder.com/900x400" alt="" />
      </figure>
      <div class="flex flex-col md:flex-row md:justify-around">
        <p class="md:w-1/3 px-4 text-xl">
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
  <section class="w-9/12 m-auto">
    <h3 class="text-2xl m-0 pt-10 text-center  md:text-left">Back to the <br> future of web 1. ½</h3>
    <div class="text-xl w-11/12">
      <p>
        In the glory days of web 1.0, social websites would prominently link out
        to their digital neighbors via lists known as webrings! Fellow communities
        they could vouch for.
      </p>

      <p>
        It was a time of greater connectivity between communal web spaces, each
        serving as an entryway into a tightly knit but infinitely expansive
        hinterland of digital villages.
      </p>

      <p>
        We are bringing back the good vibes of the old web neighborhoods. Not by
        regressing to a bygone era, but by
        <a class="" href="https://blog.erlend.sh/web-of-the-people">
          building the web 1.½ that should have been;
        </a>
      </p>
    </div>
  </section>

  <!--Section 4 / Key Features-->
  <section class="flex flex-col md:flex-row w-11/12 m-auto ">
    <div class="md:w-1/2 ">
      <h3>Key Features</h3>
      <div class="flex flex-wrap m-auto  dark: border-0 border-b dark:border-b-zinc-50 border-solid">
        {#each FEATURES as ft, idx}
          <button
            class="w-5/12 h-10 p-auto m-2 overflow-hidden dark:text-zinc-50 bg-transparent border-solid border dark:rounded-full"
            class:active={activeFeaturePreview === idx}
            on:click={() => setActive(idx)}
          >
            {ft.title}
          </button>
        {/each}
      </div>
      <h1>{FEATURES[activeFeaturePreview].title}</h1>
      <p class="w-full">{FEATURES[activeFeaturePreview].text}</p>
    </div>
    <figure  class="w-1/2">
      <img
        src={FEATURES[activeFeaturePreview].imageUrl}
        alt={FEATURES[activeFeaturePreview].title}
        width="300"
      />
    </figure>
  </section>
</main>

<style lang="postcss">
  .active {
    @apply bg-[#E74F3B];
  }

  html.dark .active {
    @apply bg-gradient-to-r from-[#357474] to-[#FF2350];
  }
</style>
