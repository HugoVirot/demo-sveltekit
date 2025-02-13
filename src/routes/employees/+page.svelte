<script lang="ts">
	/** @type {import('./$types').PageProps} */
	export let data: any; // Recevoir les utilisateurs passés en prop
	console.log('Users received:', data);

	import { Container, Table } from '@sveltestrap/sveltestrap';
	import Search from './Search.svelte';
	import dayjs from 'dayjs';

	const originalUsers = data.users;

	const deleteUser = (user: any) => {
		let itemIdx = data.users.findIndex((x: any) => x == user);
		data.users.splice(itemIdx, 1);
		data.users = data.users;
	};

	const filterUsers = (searchTerm: string) => {
		if (searchTerm) {
			data.users = data.users.filter((user) => {
				return (
					user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
					user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
					user.address.city.toLowerCase().includes(searchTerm.toLowerCase())
				);
			});
			// si aucun utilisateur ne correspond à la recherche
			if (data.users.length == 0) {
				setTimeout(() => {
					data.users = originalUsers;
				}, 3000);
			}
			// si rien dans la recherche => 
		} else { 
			data.users = originalUsers;
		}
	};
</script>

<Container md class="text-center">
	<h1 class="my-5">Liste des employés</h1>

	<Search onSearch={filterUsers} />

	{#if data.users && data.users.length > 0}
		<Table striped responsive bordered class="mt-5">
			<thead>
				<tr>
					<th scope="col">id</th>
					<th scope="col">prénom</th>
					<th scope="col">nom</th>
					<th scope="col">âge</th>
					<th scope="col">genre</th>
					<th scope="col">email</th>
					<th scope="col">date de naissance</th>
					<th scope="col">service</th>
					<th scope="col">téléphone</th>
					<th scope="col">ville</th>
					<th scope="col">supprimer</th>
				</tr>
			</thead>
			<tbody>
				{#each data.users as user}
					<tr>
						<th scope="row">{user.id}</th>
						<td>{user.firstName}</td>
						<td>{user.lastName.toUpperCase()}</td>
						<td>{user.age}</td>
						<td>{user.gender == 'male' ? 'homme' : 'femme'}</td>
						<td>{user.email}</td>
						<td>{dayjs(user.birthDate).format('DD/MM/YYYY')}</td>
						<td>{user.company.department}</td>
						<td>0{Math.floor(Math.random() * 900000000) + 100000000}</td>
						<td>{user.address.city}</td>
						<td class="text-right">
							<button class="btn btn-sm btn-secondary" on:click={() => deleteUser(user)}>
								<i class="fa fa-trash" aria-hidden="true"></i>
							</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</Table>
	{:else}
		<i class="fa-solid fa-user-slash fa-5x mt-5"></i>
		<p class="fs-2 my-5">Aucun utilisateur trouvé.</p>
	{/if}
</Container>
