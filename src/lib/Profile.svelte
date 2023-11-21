<script lang="ts">
	import NftTile from './NFTTile.svelte';
	import { currentUser } from '$lib/pocketbase';

	function randomIntFromInterval(min: number, max: number) {
		// min and max included
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	let no_nfts = 0;
	let data: Array<any> = [];
	let address = $currentUser?.eth_wallet;
	let totalPrice: string = '0';

	if ($currentUser?.username != undefined) {
		no_nfts = randomIntFromInterval(2, 8);
		totalPrice = randomIntFromInterval(10, 20).toString();
	}
</script>

<div class="min-h-screen">
	<div class="flex text-center flex-col mt-11 text-2xl">
		<div class="mb-5">
			<h2 class="font-bold">Dirección de cartera</h2>
			{address}
		</div>
	</div>
	<div class="flex flex-row text-center justify-center mt-10 text-2xl">
		<div class="font-bold">
			<h2>No. de NFTs</h2>
			{no_nfts}
		</div>
		<div class="ml-20">
			<h2 class="font-bold">Precio Total</h2>
			{totalPrice} ETH
		</div>
	</div>
	<div class="flex flex-col text-center items-center mt-11">
		<h2 class="font-bold">Tus NFTs</h2>
		<div class="flex justify-center flex-wrap max-w-screen-xl">blank</div>
		<div class="mt-10 text-xl">
			{#if data.length == 0 && $currentUser?.username == undefined}
				Oops! Parece que no tienes NFTs, ¿está conectada tu cartera?
			{/if}
		</div>
	</div>
</div>
