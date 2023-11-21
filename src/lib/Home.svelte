<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import { goto } from '$app/navigation';
	import { error, redirect } from '@sveltejs/kit';
	import Logo from '$lib/assets/uabc-logo.png';
	let username: string;
	let password: string;

	async function login() {
		try {
			await pb.collection('users').authWithPassword(username, password);
		} catch (e) {
			console.log('Error: ', e);
			throw error(500, 'Something went wrong logging in');
		}
		console.log('Logged in');
		goto('/');
	}

	async function signUp() {
		try {
			const data = {
				username,
				password,
				passwordConfirm: password,
				name: 'John Doe'
			};
			const createdUser = await pb.collection('users').create(data);
			await login();
		} catch (e) {
			console.error(e);
		}
	}

	function signOut() {
		pb.authStore.clear();
	}
	// throw redirect(302, '/login');
</script>

<div class="container h-full mx-auto flex justify-center items-center my-10">
	<div class="space-y-6 text-center flex flex-col items-center">
		<img class="w-40" src={Logo} alt="Logo de la UABC" />
		<h2 class="h2 text-primary-500 font-bold">Universidad Autónoma de Baja California</h2>
		<h3 class="text-2xl text-secondary-500">Starsheep - NFT Marketplace</h3>
		<div>
			<div class="container flex mx-auto space-y-20">
				<form class="space-y-2" on:submit|preventDefault>
					<label class="label" for="username">
						<span>Nombre de suuario</span>
						<input
							class="input"
							placeholder="Inserte su usuario"
							type="text"
							bind:value={username}
						/>
					</label>
					<label class="label" for="password"
						><span>Contraseña</span><input
							class="input"
							placeholder="Inserte su contraseña"
							type="password"
							bind:value={password}
						/>
					</label>
					<br />
					<div class="space-y-5">
						<button on:click={login} class="btn bg-primary-500 text-white">Iniciar sesión</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
