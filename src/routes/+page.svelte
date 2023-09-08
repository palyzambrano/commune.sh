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

<div class="max-w-[70vw] mx-auto">
  <div class="flex items-center justify-center gap-4 text-3xl font-bold">
    <span>make</span>
    <span>·</span>
    <span>space</span>
  </div>

  <div class="flex flex-col md:flex-row flex-col-reverse gap-0 items-center">
    <h2 class="text-3xl font-bold text-center md:text-start">
      a cozy community platform built for world-wide web togetherness.
    </h2>

    <img src="/hero.png" alt="Hero " class="w-full max-h-md" />
  </div>

  <div class="flex justify-center">
    <a
      class="max-w-[400px] bg-gray-200 py-3 px-6 text-center dark:bg-gray-700 font-bold rounded-lg"
      href="https://app.commune.sh"
      target="_blank"
    >
      Try the pre-alpha at app.commune.sh
    </a>
  </div>

  <div class="mt-16">
    <h2 class="text-center font-bold text-3xl">
      Back to the future of web 1. ½
    </h2>
    <div class="mt-8">
      <p>
        In the glory days of web 1.0, social websites would prominently link out
        to other places via lists known as 'forum affiliates', 'blogrolls' or
        'webrings'. Communities we could vouch for.
      </p>

      <p>
        It was a time of greater connectivity between communal web spaces, each
        serving as a portal to a tightly knit but infinitely expansive
        hinterland of digital villages.
      </p>

      <p>
        We wanna bring back the good vibes of the old web neighborhoods. Not by
        regressing to a bygone era, but by <a
          class="text-blue-5 dark:text-blue-3"
          href="https://blog.erlend.sh/web-of-the-people"
          >building the web 1.½ that should have been</a
        >.
      </p>
    </div>
  </div>

  <div class="mt-16">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card title="Commune is..">
        <p>
          a tool for community builders: Download the alpha-release on GitHub.
        </p>
        <p>
          a place for fellow creators and creatives to congregate: join
          app.commune.sh today.
        </p>
        <p>a network: Every Commune space is part of the Matrix federation.</p>
      </Card>
      <Card title="Commune is..">
        <p>
          We're building Commune on top of the Matrix protocol, extending it
          with community features
        </p>
        <p>Whereas Matrix is private-first, Commune is public-first.</p>
        <p>
          Commune is a full-stack app, but as a client it can (soon!) interact
          with any Matrix server.
        </p>
        <p>
          Commune instances can in turn be viewed by any Matrix client; it's all
          federated. Some features however can only be accessed via the Commune
          client.
        </p>
      </Card>
    </div>
  </div>

  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-16 gap-4"
  >
    {#each features as feature}
      <FeatureCard {...feature} />
    {/each}
  </div>
</div>
