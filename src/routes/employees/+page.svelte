<script lang="ts">
	/** @type {import('./$types').PageProps} */
	export let data:any ; // Recevoir les utilisateurs passés en prop
	console.log('Users received:', data);

  import { Container } from '@sveltestrap/sveltestrap';
  import { Table } from '@sveltestrap/sveltestrap';

  import dayjs from 'dayjs';
</script>


{#if data.users && data.users.length > 0}

<Container md class="text-center">

  <h1 class="mt-5">Liste des employés</h1>

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
				</tr>
			{/each}
		</tbody>
	</Table>
</Container>

{:else}
	<p>Aucun utilisateur trouvé.</p>
{/if}
