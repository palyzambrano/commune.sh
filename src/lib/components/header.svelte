<script lang="ts">
	import { onMount } from 'svelte';

	import Moon from '$lib/components/icons/Moon.svelte';
	import Sun from '$lib/components/icons/Sun.svelte';
	import { page } from '$app/stores';
	import uiStore, { ColorScheme } from '$lib/stores/ui';

	let useDarkMode = false;

	function toggleColorScheme() {
		if ($uiStore.colorScheme === ColorScheme.Dark) {
			uiStore.setLightColorScheme();
		} else {
			uiStore.setDarkColorScheme();
		}
	}
</script>

<header
	class="w-full px-8 flex justify-center h-[70px] bg-light-background dark:bg-[#0A0A0A] dark:text-zinc-50"
>
	<div class="w-11/12 flex items-center justify-between">
		<a class="flex row items-center w-1/3" href="/">
			<img class="w-10 pr-2" src="/hero.png" alt="" />
			<h1 class="uppercase">Commune</h1>
		</a>

		<nav class="flex items-center justify-end w-1/3">
			<ul class="flex pr-4">
				<li class="p-4"><a href="#">Docs </a></li>
				<li class="p-4"><a href="#">Blog </a></li>
			</ul>
			<div class="flex justify-center items-center space-x-4">
				<button class="h-5 w-5" on:click={toggleColorScheme}>
					{#if $uiStore.colorScheme === ColorScheme.Dark}
						<span>
							<Sun class="h-5 w-5 dark:text-zinc-50" />
						</span>
					{:else}
						<span>
							<Moon class="h-5 w-5" />
						</span>
					{/if}
				</button>
			</div>
		</nav>
	</div>
</header>
