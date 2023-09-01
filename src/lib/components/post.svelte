<script lang="ts">
  export let title: string;
  export let description: string;
  export let slug: string;
</script>

<article>
  <div class="text-lg font-medium">{title}</div>

  <p class="opacity-70">
    {description}
  </p>
  <a href={`/posts/${slug}/`} class="text-blue-500 dark:text-blue-300"
    >Read more</a
  >
</article>
