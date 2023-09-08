<script lang="ts">
  export let title: string;
  export let description: string;
</script>

<article class="p-6 rounded-lg" style="border: 1px solid gray;">
  <div class="text-lg font-bold">
    {title}
  </div>

  <p class="opacity-80">
    {description}
  </p>
</article>
