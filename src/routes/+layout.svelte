<script lang="ts">
	let { children } = $props();

	import { onMount } from 'svelte';

	// import {
	// 	Collapse,
	// 	NavbarToggler,
	// 	NavbarBrand,
	// 	Nav,
	// 	Navbar,
	// 	NavItem,
	// 	NavLink
	// } from '@sveltestrap/sveltestrap';

	// let isOpen = false;

	// function handleUpdate(event: any) {
	// 	isOpen = event.detail.isOpen;
	// }
	const logo: string = '/Svelte_Logo.svg';

	// Show mobile icon and display menu
	let showMobileMenu = $state(false);

	// List of navigation items
	const navItems = [
		{ label: 'accueil', href: '/' },
		{ label: 'statistiques', href: '/stats' },
		{ label: 'employés', href: '/employees' }
	];

	// Mobile menu click event handler
	const handleMobileIconClick = () => {
		if (window.innerWidth < 767) {
			showMobileMenu = !showMobileMenu;
		}
	}

	// Media match query handler
	const mediaQueryHandler = (e: any) => {
		// Reset mobile state
		if (!e.matches) {
			showMobileMenu = false;
		}
	};

	// Attach media query listener on mount hook
	onMount(() => {
		const mediaListener = window.matchMedia('(max-width: 767px)');

		mediaListener.addListener(mediaQueryHandler);
	});
</script>

<nav>
	<div class="inner">
		<div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
			<div class="middle-line"></div>
		</div>
		<ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
			{#each navItems as item}
				<li>
					<a on:click={handleMobileIconClick} href={item.href}>{item.label}</a>
				</li>
			{/each}
		</ul>
		<div class="mx-auto" id="logotitle">
			<a href="/">
				<img src={logo} alt="logo" class="me-2" />
				<span class="text-white">Démo Svelte</span>
			</a>
		</div>
	</div>
</nav>

{@render children()}

<style>
	img {
		height: 35px;
	}

	a {
		text-decoration: none;
	}

	nav {
		background-color: #5d5f60;
		font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
		height: 45px;
	}

	.inner {
		max-width: 980px;
		padding-left: 20px;
		padding-right: 20px;
		margin: auto;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		height: 100%;
	}

	.mobile-icon {
		width: 25px;
		height: 14px;
		position: relative;
		cursor: pointer;
	}

	.mobile-icon:after,
	.mobile-icon:before,
	.middle-line {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: #fff;
		transition: all 0.4s;
		transform-origin: center;
	}

	.mobile-icon:before,
	.middle-line {
		top: 0;
	}

	.mobile-icon:after,
	.middle-line {
		bottom: 0;
	}

	.mobile-icon:before {
		width: 66%;
	}

	.mobile-icon:after {
		width: 33%;
	}

	.middle-line {
		margin: auto;
	}

	.mobile-icon:hover:before,
	.mobile-icon:hover:after,
	.mobile-icon.active:before,
	.mobile-icon.active:after,
	.mobile-icon.active .middle-line {
		width: 100%;
	}

	.mobile-icon.active:before,
	.mobile-icon.active:after {
		top: 50%;
		transform: rotate(-45deg);
	}

	.mobile-icon.active .middle-line {
		transform: rotate(45deg);
	}

	.navbar-list {
		display: none;
		width: 100%;
		justify-content: space-between;
		margin: 0;
		padding: 0 40px;
	}

	.navbar-list.mobile {
		background-color: rgba(0, 0, 0, 0.8);
		position: fixed;
		display: block;
		height: calc(100% - 45px);
		bottom: 0;
		left: 0;
	}

	.navbar-list li {
		list-style-type: none;
		position: relative;
	}

	.navbar-list li:before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: #424245;
	}

	.navbar-list a {
		color: #fff;
		text-decoration: none;
		display: flex;
		height: 45px;
		align-items: center;
		padding: 0 10px;
		font-size: 13px;
	}

	@media only screen and (min-width: 767px) {
		.mobile-icon {
			display: none;
		}

		.navbar-list {
			display: flex;
			width: 30%;
			padding: 0;
			margin: auto;
		}

		.navbar-list a {
			display: inline-flex;
		}

		#logotitle {
			order: -1;
		}
	}
</style>
