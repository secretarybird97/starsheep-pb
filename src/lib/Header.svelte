<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import Logo from '$lib/assets/uabc-logo.png';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { currentUser, pb } from '$lib/pocketbase';
	import { goto, invalidateAll } from '$app/navigation';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	function signOut() {
		pb.authStore.clear();
		invalidateAll();
	}
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a href="/"
			><div class="container h-full mx-auto flex justify-start items-center w-f">
				<img class="w-20 mx-5" src={Logo} alt="Logo de la UABC" />
				<div class="space-y-0 text-center flex flex-col items-start">
					<h2 class="h3 text-primary-500 font-bold">Universidad Autónoma de Baja California</h2>
					<h3 class="text-lg text-secondary-500">Starsheep - NFT Marketplace</h3>
					<div class="space-y-2"></div>
				</div>
			</div></a
		>
	</svelte:fragment>
	<div class="container h-full mx-auto flex justify-end items-center space-x-5">
		<a href="/about" class="btn btn-sm bg-red-400 border-red-800 text-white variant-ghost-surface">
			About us
		</a>
		<a
			href="/sellNFT"
			class="btn btn-sm bg-red-400 border-red-800 text-white variant-ghost-surface"
		>
			Sell NFT
		</a>
		<a href="/wallet" class="btn btn-sm bg-red-400 border-red-800 text-white variant-ghost-surface">
			Cartera
		</a>
		{#if !$currentUser}
			<!-- On click go to login-->
			<a
				href="/login"
				class="btn btn-sm bg-red-400 border-red-800 text-white variant-ghost-surface"
			>
				Login
			</a>
		{:else}
			<!-- On click go to login-->
			<button
				class="btn btn-sm bg-red-400 border-red-800 text-white variant-ghost-surface"
				on:click={signOut}
			>
				Logout
			</button>
		{/if}
	</div>
	<svelte:fragment slot="trail">
		<div class="space-y-0 text-center flex flex-col items-end">
			<h2 class="text-2xl text-tertiary-900 font-semibold">USUARIO</h2>
			<h3 class="text-lg text-tertiary-900">{$currentUser?.username}</h3>
			<div class="space-y-2"></div>
		</div>
	</svelte:fragment>
</AppBar>
