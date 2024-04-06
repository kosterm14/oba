<script>
	import { onMount } from 'svelte';

	onMount(() => {
		// Thema switch
		const body = document.querySelector('body'),
			toggle = document.querySelector('.toggle');

		let getMode = localStorage.getItem('mode');
		if (getMode && getMode === 'dark') {
			body?.classList.add('dark');
			toggle?.classList.add('active');
		}

		toggle.addEventListener('click', () => {
			body.classList.toggle('dark');

			localStorage.setItem('mode', 'dark');
			if (!body.classList.contains('dark')) {
				return localStorage.setItem('mode', 'light');
			}
		});

		toggle.addEventListener('click', () => toggle.classList.toggle('active'));

		// PE Zet iets uit wanner Javascript niet werkt
		const icon = document.querySelector('.disable-js');
		icon?.classList.toggle('disable-js');
	});
</script>

<div class="theme-switch disable-js">
	<svg width="30px" height="30px" viewBox="-6.4 -6.4 76.80 76.80" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" stroke-width="3.2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polygon points="20 56 56 20 44 8 8 44 8 56 20 56"></polygon><line x1="12" y1="40" x2="24" y2="52"></line><line x1="36" y1="16" x2="48" y2="28"></line></g></svg>
	<div class="theme-title">Thema</div>
	<div class="button toggle" id="button-3">
		<input type="checkbox" class="theme-toggle" />
		<div class="knobs"></div>
		<div class="layer"></div>
	</div>
</div>

<style>
	.theme-title {
		display: grid;
		align-items: center;
		margin: 0;
		font: 'Oswald', sans-serif;
		font-weight: 500;
		line-height: 65px;
		text-transform: uppercase;
		text-decoration: uppercase;
		-webkit-transition: all 0.3s ease;
		transition: all 0.3s ease;
		color: var(--primary-light-color);
	}

	.theme-switch {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		width: 100%;
		padding: 0px 0 2.5rem 0;
		margin-left: -5px;
		box-sizing: border-box;
	}

	svg {
		margin-right: 10px;
	}

	.knobs,
	.layer {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	.button {
		position: relative;
		width: 3.5rem;
		height: 1.7rem;
		margin-left: 20px;
		overflow: hidden;
	}

	.button,
	.button .layer {
		border-radius: 6.25rem;
	}

	.theme-toggle {
		position: relative;
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		opacity: 0;
		cursor: pointer;
		z-index: 3;
	}

	.knobs {
		z-index: 2;
	}

	.disable-js {
		display: none;
	}

	.layer {
		width: 100%;
		background-color: #ebf7fc;
		transition: 0.3s ease all;
		z-index: 1;
	}

	/* Button 3 */
	#button-3 .knobs:before {
		content: '';
		position: absolute;
		top: 2px;
		left: 4px;
		width: 15px;
		height: 5px;
		color: #fff;
		font-size: 12px;
		font-weight: bold;
		text-align: center;
		line-height: 2.7;
		padding: 9px 4px;
		background-color: var(--primary-accent-color);
		border-radius: 50%;
		transition:
			0.3s ease all,
			left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
	}

	#button-3 .theme-toggle:active + .knobs:before {
		width: 1.9rem;
		border-radius: 6.25rem;
	}

	#button-3 .theme-toggle:checked:active + .knobs:before {
		margin-left: -13px;
	}

	#button-3 .theme-toggle:checked + .knobs:before {
		content: '';
		left: 1.7rem;
		background-color: var(--primary-accent-color);
	}
	#button-3 .theme-toggle:checked ~ .layer {
		background-color: #fcebeb;
	}
</style>
