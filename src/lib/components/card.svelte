<script lang="ts">
  export let title: string;
</script>

<article class="card">
  <h3 class="text-2xl font-bold text-center">{title}</h3>
  <slot />
</article>

<style>
    .card {
        --at-apply: shadow rounded-xl bg-gray-200 dark:bg-gray-800 p-6;
    }
</style>
