<script lang="ts">
	const logo: string = '/Svelte_Logo.svg';
	import { Col, Container, Row } from '@sveltestrap/sveltestrap';
	import { Button } from '@sveltestrap/sveltestrap';
	import { fade, fly } from 'svelte/transition';
</script>

<Container md class="text-center py-5">
	<h1 in:fade={{ delay: 250, duration: 1100 }}>Démo Svelte</h1>
	<img in:fly={{ y: 200, duration: 1500 }} src={logo} alt="logo" class="mt-3" />
</Container>

<Container md class="text-center w-50">
	<Row>
		<Col class="text-center">
			<a href="/stats">
				<Button color="secondary" outline size="lg">statistiques</Button>
			</a>
		</Col>
		<Col>
			<a href="/employees">
				<Button color="secondary" outline size="lg">employés</Button>
			</a>
		</Col>
	</Row>
</Container>

<style>
	h1 {
		font-size: 90px;
	}

	img {
		width: 250px;
	}
</style>
