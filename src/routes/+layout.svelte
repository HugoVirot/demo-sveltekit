<script lang="ts">
	let { children } = $props();

	import {
		Collapse,
		NavbarToggler,
		NavbarBrand,
		Nav,
		Navbar,
		NavItem,
		NavLink,
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem
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
				<NavLink href="/">accueil</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/stats">statistiques</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/employees">employés</NavLink>
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
