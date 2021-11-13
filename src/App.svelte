<script>
	import logo from './assets/svelte.png'
	import Counter from './components/Counter.svelte'
</script>

<section class="text-gray-600 body-font">
	<div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
		<img
			class="lg:w-1/6 md:w-3/6 w-5/6 mb-24 object-cover object-center rounded"
			alt="hero"
			src={logo}
		/>
		<div class="text-center lg:w-2/3 w-full">
			<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
				Svelte + Vite + TailwindCSS = 🌸🌸🌸
			</h1>
			<h3 class="title-font sm:text-lg text-3xl mt-8 mb-4 font-medium text-gray-900">
				https://github.com/patoi/svelte-vite-tailwind-template
			</h3>
			<p class="mb-8 leading-relaxed">
				Mauris at elit molestie, viverra nisi id, egestas lorem. In at suscipit elit. In hac
				habitasse platea dictumst. Sed maximus lectus pharetra risus pharetra, lacinia consectetur
				dui mollis. Mauris ut condimentum enim, eget pulvinar eros. Nunc facilisis metus mauris,
				gravida viverra libero pulvinar eu. Proin tempus suscipit erat, ac hendrerit odio vestibulum
				id. Fusce sit amet gravida mauris, a congue velit.
			</p>
			<div class="mb-8">
				<Counter />
			</div>
			<div class="flex justify-center">
				<button
					class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
					>Button</button
				>
				<button
					class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
					>Button</button
				>
			</div>
		</div>
	</div>
</section>
