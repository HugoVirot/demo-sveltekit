<script lang="ts">
	/** @type {import('./$types').PageProps} */
	export let data: any; // Recevoir les utilisateurs passés en prop

	console.log(data);

	import { Container, Table } from '@sveltestrap/sveltestrap';
	import dayjs from 'dayjs';
</script>

<Container md class="text-center">
	<h1 class="my-5">Profil de {data.firstName} {data.lastName}</h1>

	<Table striped responsive bordered class="mt-2 w-50 mx-auto">
		<tbody>
			<tr>
				<th scope="row">nom d'utilisateur</th>
				<td>{data.username}</td>
			</tr>
			<tr>
				<th scope="row">âge</th>
				<td>{data.age}</td>
			</tr>
			<tr>
				<th scope="row">genre</th>
				<td>{data.gender == 'male' ? 'homme' : 'femme'}</td>
			</tr>
			<tr>
				<th scope="row">email</th>
				<td>{data.email}</td>
			</tr>
			<tr>
				<th scope="row">date de naissance</th>
				<td> {dayjs(data.birthDate).format('DD/MM/YYYY')}</td>
			</tr>
			<tr>
				<th scope="row">service</th>
				<td>{data.company.department}</td>
			</tr>
			<tr>
				<th scope="row">téléphone</th>
				<td>0{Math.floor(Math.random() * 900000000) + 100000000}</td>
			</tr>
			<tr>
				<th scope="row">adresse</th>
				<td>{data.address.address}</td>
			</tr>
			<tr>
				<th scope="row">code postal </th>
				<td>{data.address.postalCode}</td>
			</tr>
			<tr>
				<th scope="row">ville </th>
				<td>{data.address.city}</td>
			</tr>
			<tr>
				<th scope="row">université fréquentée</th>
				<td>{data.university}</td>
			</tr>
			<tr>
				<th scope="row">adresse ip</th>
				<td>{data.ip}</td>
			</tr>
		</tbody>
	</Table>
</Container>

<style>
	h1 {
		color: #ff3d01;
	}
</style>
