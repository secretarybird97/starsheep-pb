<script lang="ts">
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { currentUser, pb } from '$lib/pocketbase';
	import { invalidateAll } from '$app/navigation';
	import SellNft from '$lib/SellNFT.svelte';
	import Header from '$lib/Header.svelte';
	import Profile from '$lib/Profile.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	function signOut() {
		pb.authStore.clear();
		invalidateAll();
	}

	let currentTile = 0;
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-primary-500 w-44 rounded max-h-full">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<Header />
	</svelte:fragment>
	<!-- Page Route Content -->
	<Profile />
</AppShell>
