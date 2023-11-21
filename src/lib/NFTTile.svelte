<script lang="ts">
	export let data: any;
</script>

<a href={data.image}>
	<div
		class="border-2 ml-12 mt-5 mb-12 flex flex-col items-center rounded-lg w-48 md:w-72 shadow-2xl"
	>
		<img src={data.image} alt="" class="w-72 h-48 rounded-lg object-cover" />
		<div class="w-full p-2 bg-gradient-to-t from-[#454545] to-transparent rounded-lg pt-5 -mt-20">
			<strong class="text-xl text-opacity-75 text-white">{data.name}</strong>
			<p class="text-opacity-75 text-white">{data.description}</p>
		</div>
	</div></a
>
