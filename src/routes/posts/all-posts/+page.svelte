<script>
  import Post from "$lib/components/post.svelte";

  export let data;
</script>

<h1>Posts</h1>

<div class="grid grid-cols-1 gap-6">
  {#each data.posts as post}
    <Post {...post} />
  {/each}
</div>
