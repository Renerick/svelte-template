<script>
	export let name;
</script>

<main class="text-center p-4 max-w-xs sm:max-w-none mx-auto my-0">
	<h1 class="text-6xl uppercase font-hairline my-10 text-svelte">Hello {name}!</h1>
	<p>Visit the <a class="text-blue-600 hover:underline" href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<p>Check <a class="text-blue-600 hover:underline" href="https://tailwindcss.com">TailwindCSS documentation</a> to learn more about TailwindCSS.</p>
</main>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
