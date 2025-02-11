<script lang="ts">
	const logo: string = '/Svelte_Logo.svg';
	import { Container } from '@sveltestrap/sveltestrap';
</script>

<Container md class="text-center py-5">
	<h1>Démo Svelte</h1>
	<img src={logo} alt="logo" class="w-25" />
</Container>
