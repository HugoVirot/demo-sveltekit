/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const res = await fetch(`https://dummyjson.com/users/${params.id}`);
	const data = await res.json();

	return { data };
}