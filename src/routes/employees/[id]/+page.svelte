<script>
	/** @type {import('./$types').PageProps} */
	let { data } = $props();

    console.log(data);
</script>

<h1>page employé</h1>
<p>{data.firstName}</p>
