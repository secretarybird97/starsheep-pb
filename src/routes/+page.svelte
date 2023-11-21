<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { currentUser, pb } from '$lib/pocketbase';
	import { goto, invalidateAll } from '$app/navigation';
	import { browser } from '$app/environment';
	import Marketplace from '$lib/Marketplace.svelte';
	import Header from '$lib/Header.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// if user is not logged in, redirect to login Page
	if (!$currentUser) {
		if (browser) {
			goto('/');
		}
	}

	let currentTile = 0;
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-primary-500 w-44 rounded">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<Header />
	</svelte:fragment>
	<!-- Page Route Content -->
	<Marketplace />
</AppShell>
