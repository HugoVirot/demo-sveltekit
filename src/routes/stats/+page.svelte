<script lang="ts">
	import { Container } from '@sveltestrap/sveltestrap';
	import { onMount } from 'svelte';
	import { Chart } from 'chart.js/auto';
	import { fade } from 'svelte/transition';

	let chartCanvas: HTMLCanvasElement;

	onMount(async () => {
		new Chart(chartCanvas, {
			data: {
				labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'],
				datasets: [
					{
                        type: 'bar', // Type de graphique : barres
						label: 'Ventes 2024',
						data: [40, 28, 52, 84, 53, 67],
						backgroundColor: 'rgba(75, 192, 192, 0.2)',
						borderColor: 'rgba(75, 192, 192, 1)',
						borderWidth: 1
					},
					{
						type: 'line',
						label: 'Ventes 2023',
						data: [24, 30, 40, 35, 29, 57],
                        backgroundColor: 'pink',
						borderColor: 'red',
					}
				]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
	});
</script>

<Container md class="text-center">
	<h1 in:fade={{ delay: 250, duration: 1100 }} class="my-5">Statistiques</h1>
</Container>

<Container md class="text-center">
	<canvas in:fade={{ delay: 250, duration: 1100 }} bind:this={chartCanvas}></canvas>
</Container>

<style>
	h1 {
		color: #ff3d01;
	}
</style>