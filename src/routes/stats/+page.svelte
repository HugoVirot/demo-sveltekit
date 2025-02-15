<script lang="ts">
	import { Container } from '@sveltestrap/sveltestrap';
	import { onMount } from 'svelte';
	import { Chart } from 'chart.js/auto';
	import { fade } from 'svelte/transition';

	let chartCanvas: HTMLCanvasElement;
	let chartCanvas2: HTMLCanvasElement;
	let chartCanvas3: HTMLCanvasElement;

	onMount(async () => {
		new Chart(chartCanvas, {
			data: {
				labels: ['Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
				datasets: [
					{
						type: 'bar', // Type de graphique : barres
						label: 'Ventes 2024',
						data: [40000, 28000, 52000, 84000, 53000, 67000],
						backgroundColor: [
							'rgba(255, 99, 132, 0.3)',
							'rgba(255, 159, 64, 0.3)',
							'rgba(255, 205, 86, 0.3)',
							'rgba(75, 192, 192, 0.3)',
							'rgba(54, 162, 235, 0.3)',
							'rgba(153, 102, 255, 0.3)',
							'rgba(201, 203, 207, 0.3)'
						],
						borderWidth: 1,
						borderColor: '#ff3d01'
					},
					{
						type: 'line',
						label: 'Ventes 2023',
						data: [24000, 30000, 40000, 35000, 29000, 57000],
						backgroundColor: 'pink',
						borderColor: 'red'
					}
				]
			},
			options: {
				responsive: true,
				plugins: {
					tooltip: {
						boxWidth: 20, // Set the width of the color box
						boxHeight: 20, // Set the height of the color box
						padding: 10
					},
					title: {
						display: true,
						text: 'Ventes de la société : second semestre 2024 (€)',
						font: {
							size: 24
						}
					}
				},
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});

		new Chart(chartCanvas2, {
			type: 'polarArea', // Type de graphique
			data: {
				labels: [
					'Emily JOHNSON',
					'Michael WILLIAMS',
					'Sophia BROWN',
					'James DAVIS',
					'Emma MILLER',
					'Olivia	WILSON'
				],
				datasets: [
					{
						label: 'ventes pour cet employé (€)',
						data: [15000, 12500, 14000, 13400, 12900, 16000],
						backgroundColor: [
							'rgba(200, 200, 250, 0.3)',
							'rgba(0, 250, 200, 0.3)',
							'rgba(150, 105, 200, 0.3)',
							'rgba(155, 205, 255, 0.3)',
							'rgba(255, 135, 97, 0.3)',
							'rgba(255, 205, 86, 0.3)',
						]
					}
				]
			},
			options: {
				responsive: true,
				plugins: {
					legend: {
						position: 'top'
					},
					title: {
						display: true,
						text: 'Meilleurs ventes 2024 par employé (€)',
						font: {
							size: 24
						}
					}
				}
			}
		});

		new Chart(chartCanvas3, {
			type: 'doughnut', // Type de graphique
			data: {
				labels: ['logiciel 1', 'logiciel 2', 'logiciel 3'],
				datasets: [
					{
						label: 'ventes en %',
						data: [50, 30, 20],
						backgroundColor: [
							'rgba(255, 99, 132, 0.3)',
							'rgba(54, 162, 235, 0.3)',
							'rgba(255, 205, 86, 0.3)'
						],
						hoverOffset: 4
					}
				]
			},
			options: {
				responsive: true,
				plugins: {
					legend: {
						position: 'top'
					},
					title: {
						display: true,
						text: 'Répartition des ventes 2024 par logiciel (en pourcentage)',
						font: {
							size: 24
						}
					}
				}
			}
		});
	});
</script>

<Container class="text-center">
	<h1 in:fade={{ delay: 100, duration: 900 }} class="my-5">Statistiques</h1>
	<canvas class="canvas1 mx-auto" in:fade={{ delay: 250, duration: 900 }} bind:this={chartCanvas}
	></canvas>

	<canvas
		class="canvas2 mx-auto mt-5"
		in:fade={{ delay: 250, duration: 900 }}
		bind:this={chartCanvas2}
	></canvas>

	<canvas
		class="canvas3 mx-auto mt-5"
		in:fade={{ delay: 250, duration: 900 }}
		bind:this={chartCanvas3}
	></canvas>
</Container>

<style>
	h1 {
		color: #ff3d01;
	}

	.canvas1, .canvas2, .canvas3 {
		width: 100%;
		max-width: 100%;
	}

	@media (max-width: 600px) {
        .canvas1 {
            width: 90%;
        }

		.canvas2, .canvas3 {
			width: 75%;
		}
    }

    @media (min-width: 1200px) {
        .canvas1 {
            width: 75%;
        }

		.canvas2 {
			width: 60%;
		}

		.canvas3 {
			width: 50%;
		}
    }
</style>
