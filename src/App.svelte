<script>
  export let name;
</script>

<main class="flex items-center justify-center p-4 max-w-xs h-screen sm:max-w-none mx-auto my-0 bg">
    <div class="text-center">
        <h1 class="text-6xl uppercase font-hairline mb-10 text-svelte">Hello {name}</h1>
        <p>Visit the <a class="text-svelte font-semibold" href="https://svelte.dev/tutorial">Svelte tutorial</a> to
            learn how to build Svelte apps.</p>
        <p>Check <a class="text-tailwind font-semibold" href="https://tailwindcss.com">TailwindCSS documentation</a>
            to learn more about TailwindCSS.</p>
    </div>
</main>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
