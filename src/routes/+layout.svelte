<script lang="ts">
	let { children } = $props();

	import {
		Collapse,
		NavbarToggler,
		NavbarBrand,
		Nav,
		Navbar,
		NavItem,
		NavLink
	} from '@sveltestrap/sveltestrap';

	let isOpen = false;

	function handleUpdate(event: any) {
		isOpen = event.detail.isOpen;
	}
	const logo: string = '/Svelte_Logo.svg';
</script>

<Navbar color="light" light expand="md" container="md">
	<img src={logo} alt="logo" class="me-2" />
	<NavbarBrand href="/">Démo Svelte</NavbarBrand>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />
	<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
		<Nav class="ms-auto" navbar>
			<NavItem>
				<NavLink href="/">Accueil</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/stats">Statistiques</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/employees">Employés</NavLink>
			</NavItem>
		</Nav>
	</Collapse>
</Navbar>

{@render children()}

<style>
	img {
		height: 35px;
	}
</style>
