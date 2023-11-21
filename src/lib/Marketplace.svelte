<script lang="ts">
	import NFTTile from '$lib/NFTTile.svelte';

	const sampleData = [
		{
			name: 'NFT #1',
			description: 'Earthmover',
			website: 'http://axieinfinity.io',
			image: 'https://f4.bcbits.com/img/a3785639980_5.jpg',
			price: '0.03ETH',
			currentlySelling: 'True',
			address: '0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13'
		},
		{
			name: 'NFT #2',
			description: 'Titanic Rising',
			website: 'http://axieinfinity.io',
			image:
				'https://media.pitchfork.com/photos/5c7eafd9b8753a13dd400085/master/pass/WeyesBlood_TitanicRising.jpg',
			price: '0.03ETH',
			currentlySelling: 'True',
			address: '0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13'
		},
		{
			name: 'NFT #3',
			description: 'Loveless',
			website: 'http://axieinfinity.io',
			image: 'https://d1rgjmn2wmqeif.cloudfront.net/r/b/223063-1.jpg',
			price: '0.03ETH',
			currentlySelling: 'True',
			address: '0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13'
		},
		{
			name: 'NFT #4',
			description: 'Unknown Pleasures',
			website: 'http://axieinfinity.io',
			image: 'https://m.media-amazon.com/images/I/812FS2R2v6L._UF1000,1000_QL80_.jpg',
			price: '0.03ETH',
			currentlySelling: 'True',
			address: '0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13'
		},
		{
			name: 'NFT #5',
			description: 'Sountracks for the Blind',
			website: 'http://axieinfinity.io',
			image:
				'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/11/19/f6/1119f602-b7dc-024d-1d7d-22c60e19fe2b/658457000120_cover.jpg/1200x1200bf-60.jpg',
			price: '0.03ETH',
			currentlySelling: 'True',
			address: '0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13'
		},
		{
			name: 'NFT #6',
			description: "Since I've Left You",
			website: 'http://axieinfinity.io',
			image: 'https://pickybastards.files.wordpress.com/2019/12/silu.jpg',
			price: '0.03ETH',
			currentlySelling: 'True',
			address: '0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13'
		}
	];

	let data: any = sampleData;
</script>

<div class="flex flex-col place-items-center mt-20">
	<div class="text-xl font-bold text-tertiary-900">Top NFTs</div>
	<div class="flex mt-5 justify-between flex-wrap max-w-screen-xl text-center">
		{#each data as item}
			<NFTTile data={item} />
		{/each}
	</div>
</div>
