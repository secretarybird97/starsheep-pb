<script lang="ts">
	let formParams = { name: '', description: '', price: '' };
	let message = '';

	async function OnChangeFile(e) {
		//upload the file to IPFS
		disableButton();
		message = 'Subiendo NFT... por favor no haga click en nada!';
	}

	async function disableButton() {
		const listButton = document.getElementById('list-button');
		listButton.disabled = true;
		listButton.style.backgroundColor = 'grey';
		listButton.style.opacity = 0.3;
	}

	async function enableButton() {
		const listButton = document.getElementById('list-button');
		listButton.disabled = false;
		listButton.style.backgroundColor = '#A500FF';
		listButton.style.opacity = 1;
	}

	async function listNFT(e) {
		e.preventDefault();
		disableButton();
		message = 'Subiendo NFT (tarda 5 min)... por favor no haga click en nada!';

		alert('NFT subido exitosamente!');
		enableButton();
		message = '';
		formParams = { name: '', description: '', price: '' };
		window.location.replace('/');
	}
</script>

<div>
	<div class="flex flex-col place-items-center mt-10" id="nftForm">
		<form class="bg-white shadow-md rounded px-8 pt-4 pb-8 mb-4">
			<h3 class="text-center font-bold mb-8">Sube tu NFT al Marketplace</h3>
			<div class="mb-4">
				<label class="block text-sm font-bold mb-2" for="name">Nombre del NFT</label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="name"
					type="text"
					placeholder="Axie #4563"
					bind:value={formParams.name}
				/>
			</div>
			<div class="mb-6">
				<label class="block text-sm font-bold mb-2" for="description">Descripcion del NFT</label>
				<textarea
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="description"
					placeholder="Axie Infinity Collection"
					bind:value={formParams.description}
				/>
			</div>
			<div>
				<label class="block text-sm font-bold mb-2" for="price">Precio (en ETH)</label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					type="number"
					placeholder="Min 0.01 ETH"
					step="0.01"
					bind:value={formParams.price}
				/>
			</div>
			<div>
				<label class="block text-sm font-bold mb-2" for="image">Subir imagen (&lt;500 KB)</label>
				<input type="file" on:change={OnChangeFile} />
			</div>
			<br />
			<div class="text-center">{message}</div>
			<button class="btn font-bold p-2 shadow-lg" id="list-button" on:click={listNFT}
				>Subir NFT</button
			>
		</form>
	</div>
</div>
