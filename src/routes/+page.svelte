<script>
  import Card from "$lib/components/card.svelte";
  import FeatureCard from "$lib/components/feature-card.svelte";
  const features = [
    {
      title: "Message gardening",
      description:
        "What starts as an ephemeral chat message might evolve into an intricate thread with multiple incoming/outgoing connections. Commune facilitates this progression by making chat-view and board-view two different view modes of the one same channel.",
    },
    {
      title: "Web-public chat",
      description:
        "Make your digital village gate-less, so new visitors may freely look around before making themselves known. Grant informative threads a proper place on the indexable web.",
    },
    {
      title: "Webrings & common channels (soon)",
      description:
        "Your friends are just a click away, discoverable through Related Space lists. Better yet, closely aligned communities can carry common channels together, e.g. syndicating a single #offtopic channel across multiple spaces.",
    },
    {
      title: "Fediverse integration (soon)",
      description:
        "While the Matrix network is its own federated system, Commune also connects with the larger fediverse, i.e. Mastodon, Lemmy et.al. Log in with your fediverse account, verify links and more.",
    },
    {
      title: "Discord sync (soon)",
      description:
        "Already got a community on Discord? No worries, we'll sync it up for you, and suddenly your Discord server will be fully backed up and web-readable via its Commune bridge",
    },
    {
      title: "Incremental Encryption (soon)",
      description:
        "Avoid the complexities of encryption in the nascent stages of community. Opt-in to the advanced security features of Matrix when the time is right.",
    },
  ];
</script>

<section class="dark:bg-gradient-to-b from-[#0A0A0A] from-70% to-[#5A1939] ">
  <div class="flex  justify-around mx-auto  md:w-64">
    <h4 class="text-2xl">MAKE</h4>
    <span>*</span>
    <h4 class="text-2xl">SPACE</h4>
  </div>
  <h2 class="text-4xl md:text-9xl uppercase text-center md:mb-[-50px]">ignite union</h2>
  <figure class="flex justify-center">
    <img src="/hero.png" class="md:w-8/12 w-12/12">
  </figure>
  <div class="text-center">
    <p class="md:w-96 m-auto p-8 text-xl">
      <strong>A tool for community builders,</strong>
      a network: Every Commune space is 
      part of the Matrix federation.
    </p>
    <a class="bg-[#E74F3B] dark:bg-gradient-to-r from-[#357474] to-[#FF2350] p-4 dark:rounded-full inline-block" href="https://app.commune.sh" target="_blank">
      Try the pre-alpha at app.commune.sh
    </a>
  </div>
</section>

<!--Section 2 / Protocol-centric-->
<section class="dark:bg-gradient-to-b from-[#5A1939] from-30% to-[#0A0A0A]">
  <h3 class="text-2xl m-0 pt-10 text-center md:pl-24 md:text-left">Protocol-centric software</h3>
  <figure class="flex justify-center">
    <img class="w-11/12" src="http://via.placeholder.com/900x400" alt="">
  </figure>
  <div class="flex flex-col md:flex-row md:justify-around">
    <p class="md:w-1/3 px-4 text-xl">We’re building Commune on top of the federated and secure [Matrix protocol], extending it with public-first community features.</p>
    <p class="md:w-1/3 px-4 text-xl">Being grounded in a protocol of chat interoperability means a maximalist approach to user autonomy and [credible exit].</p>
  </div>
</section>

<!--Section 3 / Back to the future-->
<section class="bg-[#0A0A0A] m-0">
    <h3>
      Back to the future of web 1. ½
    </h3>
    <div class="text-xl w-11/12">
      <p>
        In the glory days of web 1.0, social websites would prominently link out 
        to their digital neighbors via lists known as webrings! Fellow communities 
        they could vouch for.
      </p>

      <p>
        It was a time of greater connectivity between communal web spaces, each 
        serving as an entryway into a tightly knit but infinitely expansive hinterland 
        of digital villages.
      </p>

      <p>
        We are bringing back the good vibes of the old web neighborhoods. Not by 
        regressing to a bygone era, but by 
        <a class="" href="https://blog.erlend.sh/web-of-the-people">
          building the web 1.½ that should have been;
        </a
        >
      </p>
    </div>
</section>

<!--Section 4 / Key Features-->
<section>
      <h3>Key Features</h3>
      <div>
        {#each features as feature}
          <FeatureCard {...feature} />
        {/each}
      </div>
      <div>
        <figure>
  
        </figure>
      </div>
</section>

<!--Section 5 / The Story-->
<section>

</section>

