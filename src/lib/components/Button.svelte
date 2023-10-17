<script>
	import uiStore, { ColorScheme } from '$lib/stores/ui';

	
</script>

{#if $uiStore.colorScheme === ColorScheme.Dark}
	<a
		class="cursor-pointer text-zinc-50 dark:bg-gradient-to-r from-[#357474] to-[#FF2350] p-4 dark:rounded-full dark:inline-block hidden text-center md:w-4/12 w-8/12"
		href="https://app.commune.sh"
		target="_blank"
	>
		<slot />
	</a>
{:else}
	<a
		href="https://app.commune.sh"
		type="button"
		target="_blank"
		class="cursor-pointer btn cube w-10/12 md:w-1/4"
	>
		<div class="bg-top">
			<div class="bg-inner" />
		</div>
		<div class="bg-right">
			<div class="bg-inner" />
		</div>
		<div class="bg">
			<div class="bg-inner" />
		</div>
		<div class="text md:p-0 py-3 text-center"><slot /></div>
	</a>
{/if}

<style>
	.btn {
		padding: 8px;
		background: transparent;
		border: 0;
		color: #fff;
		letter-spacing: 0.1em;
	}

	.cube {
		position: relative;
		transition: all 0.5s;
	}

	.cube .bg-top {
		position: absolute;
		height: 10px;
		background: #fff;
		bottom: 100%;
		left: 5px;
		right: -5px;
		transform: skew(-45deg, 0);
		margin: 0;
		transition: all 0.4s;
	}

	.cube .bg-top .bg-inner {
		bottom: 0;
	}

	.cube .bg {
		position: absolute;
		left: 0;
		bottom: 0;
		top: 0;
		right: 0;
		background: #fff;
		transition: all 0.4s;
	}

	.cube .bg-right {
		position: absolute;
		background: #fff;
		top: -5px;
		z-index: 0;
		bottom: 5px;
		width: 10px;
		left: 100%;
		transform: skew(0, -45deg);
		transition: all 0.4s;
	}

	.cube .bg-right .bg-inner {
		left: 0;
	}

	.cube .bg-inner {
		background: #e74f3b;
		position: absolute;
		left: 2px;
		right: 2px;
		top: 2px;
		bottom: 2px;
	}

	.cube .text {
		position: relative;
		transition: all 0.4s;
	}
</style>
