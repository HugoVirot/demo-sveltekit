/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const res = await fetch('https://dummyjson.com/users'); // appel api
    const data = await res.json(); // récupération des données et stockage dans data

    return data;
}
