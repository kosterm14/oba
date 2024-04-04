<script>
	import { Toggle } from '$lib/index.js';
	import { onMount } from 'svelte';

	onMount(() => {
		// PE Zet iets uit wanner Javascript niet werkt
		const lastChild = document.querySelector('.last-child');
		lastChild?.classList.toggle('last-child');
	});
</script>

<input type="checkbox" id="check" />
<label for="check">
	<i class="fas fa-bars" id="btn"></i>
	<i class="fas fa-times" id="cancel"></i>
</label>
<nav class="sidebar">
	<header>Mark Vos</header>
	<div class="menu-bar">
		<div class="top-content">
			<ul>
				<li>
					<a href="/">
						<i class="fas fa-qrcode"></i>
						<span>Home</span>
					</a>
				</li>
				<li>
					<a href="/leeslijst">
						<i class="fas fa-qrcode"></i>
						<span>Leeslijst</span>
					</a>
				</li>
				<li>
					<a href="/uitleningen">
						<i class="fas fa-qrcode"></i>
						<span>Uitleningen</span>
					</a>
				</li>
				<li>
					<a href="/reserveringen">
						<i class="fas fa-qrcode"></i>
						<span>Reserveringen</span>
					</a>
				</li>
				<li>
					<a href="/betalingen">
						<i class="fas fa-qrcode"></i>
						<span>Betalingen</span>
					</a>
				</li>
			</ul>
		</div>

		<div class="bottom-content">
			<ul>
				<li>
					<a href="/login">
						<i class="far fa-envelope"></i>
						<span>Log uit</span>
					</a>
				</li>
			</ul>
			<Toggle />
		</div>
	</div>
</nav>

<style>
	.menu-bar{
		display: flex;
		height: calc(100% - 50px);
		flex-direction: column;
		justify-content: space-between;
		font: 'Oswald', sans-serif;;
	}
	.sidebar {
		position: fixed;
		width: 240px;
		left: -240px;
		height: 100%;
		background: var(--primary-accent-color);
		box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
		transition: all 0.5s ease;
		z-index: 99;
	}
	.sidebar header {
		font-size: 28px;
		color: white;
		line-height: 70px;
		text-align: center;
		background: var(--primary-accent-color);
		user-select: none;
	}
	.bottom-content{
		border-top: 1px solid white;
	}
	.sidebar a {
		display: block;
		height: 65px;
		width: 100%;
		color: white;
		font-weight: 500;
		line-height: 65px;
		padding-left: 30px;
		box-sizing: border-box;
		border-left: 5px solid transparent;
		font-family: 'Oswald', sans-serif;
		transition: all 0.5s ease;
		text-decoration: none;
	}
	a:focus,
	a:hover {
		border-left: 5px solid white;
	}
	.sidebar a i {
		font-size: 23px;
		margin-right: 16px;
	}
	.sidebar a span {
		letter-spacing: 1px;
		text-transform: uppercase;
	}
	#check {
		display: none;
	}
	label #btn,
	label #cancel {
		position: absolute;
		cursor: pointer;
		color: white;
		border-radius: 5px;
		margin: 30px;
		font-size: 29px;
		background-color: var(--primary-accent-color);
		height: 45px;
		width: 45px;
		text-align: center;
		line-height: 45px;
		transition: all 0.5s ease;
	}
	label #cancel {
		opacity: 0;
		visibility: hidden;
	}
	#check:checked ~ .sidebar {
		left: 0;
	}
	#check:checked ~ label #btn {
		margin-left: 245px;
		opacity: 0;
		visibility: hidden;
	}
	#check:checked ~ label #cancel {
		margin-left: 265px;
		opacity: 1;
		visibility: visible;
	}
	/* @media (max-width: 860px) {
		.sidebar {
			height: auto;
			width: 70px;
			left: 0;
			margin: 100px 0;
		}
		header,
		#btn,
		#cancel {
			display: none;
		}
		span {
			position: absolute;
			margin-left: 23px;
			opacity: 0;
			visibility: hidden;
		}
		.sidebar a {
			height: 60px;
		}
		.sidebar a i {
			margin-left: -10px;
		}
		a:hover {
			width: 200px;
			background: inherit;
		}
		.sidebar a:hover span {
			opacity: 1;
			visibility: visible;
		}
	} */
</style>
