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
	<header>
		<div class="profile-img">
			<img
				src="https://i2.wp.com/curatedceramics.com/wp-content/uploads/2017/10/blank-profile-picture-610x819.jpg"
				alt="Profiel foto"
			/>
		</div>
		<div class="profile-text">
			<span class="profile-name"> Mark Vos </span>
			<span class="profile-role"> Admin </span>
		</div>
	</header>
	<div class="menu-bar">
		<div class="top-content">
			<ul>
				<li>
					<a href="/">
						<svg width="30px" height="30px" viewBox="-6.4 -6.4 76.80 76.80" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" stroke-width="3.2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polygon points="8 24 8 56 56 56 56 24 32 8 8 24"></polygon><polyline points="40 56 40 36 24 36 24 56"></polyline></g></svg>
						<span>Home</span>
					</a>
				</li>
				<li>
					<a href="/leeslijst">
						<svg width="30px" height="30px" viewBox="-6.4 -6.4 76.80 76.80" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" stroke-width="3.2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><line x1="20" y1="16" x2="56" y2="16"></line><line x1="20" y1="32" x2="56" y2="32"></line><line x1="20" y1="48" x2="56" y2="48"></line><line x1="8" y1="16" x2="12" y2="16"></line><line x1="8" y1="32" x2="12" y2="32"></line><line x1="8" y1="48" x2="12" y2="48"></line></g></svg>
						<span>Leeslijst</span>
					</a>
				</li>
				<li>
					<a href="/uitleningen">
						<svg width="30px" height="30px" viewBox="-6.4 -6.4 76.80 76.80" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" stroke-width="3.2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="32 24 40 24 40 16 56 28 40 40 40 32 24 32 24 24 8 36 24 48 24 40 32 40"></polyline></g></svg>
						<span>Uitleningen</span>
					</a>
				</li>
				<li>
					<a href="/reserveringen">
						<svg width="30px" height="30px" viewBox="-6.4 -6.4 76.80 76.80" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" stroke-width="3.2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect x="8" y="8" width="48" height="36"></rect><line x1="12" y1="56" x2="52" y2="56"></line><line x1="40" y1="44" x2="40" y2="56"></line><line x1="24" y1="44" x2="24" y2="56"></line><polyline points="46 16 26 36 18 28"></polyline></g></svg>
						<span>Reserveringen</span>
					</a>
				</li>
				<li>
					<a href="/betalingen">
						<svg width="30px" height="30px" viewBox="-6.4 -6.4 76.80 76.80" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" stroke-width="3.2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="32" cy="32" r="24"></circle><polyline points="40 44 32 32 32 16"></polyline></g></svg>
						<span>Betalingen</span>
					</a>
				</li>
			</ul>
		</div>

		<div class="bottom-content">
			<ul>
				<li>
					<a href="/login">
						<svg width="30px" height="30px" viewBox="-6.4 -6.4 76.80 76.80" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" stroke-width="3.2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="16 20 16 8 48 8 48 56 16 56 16 44"></polyline><polyline points="28 40 36 32 28 24"></polyline><line x1="8" y1="32" x2="36" y2="32"></line></g></svg>
						<span>Log uit</span>
					</a>
				</li>
				<li>
					
					<Toggle />
				</li>
			</ul>
		</div>
	</div>
</nav>

<style>
	.menu-bar {
		display: flex;
		height: calc(100% - 60px);
		flex-direction: column;
		justify-content: space-between;
		font: 'Oswald', sans-serif;
	}
	.sidebar {
		position: fixed;
		width: 250px;
		left: -250px;
		height: 100%;
		background: var(--primary-accent-color);
		box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
		transition: all 0.5s ease;
		z-index: 99;
	}

	/* Header */
	header {
		display: flex;
		align-items: center;
		margin-left: 40px;
	}
	header .profile-img {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	header .profile-img img {
		width: 2.7rem;
		height: 2.7rem;
		margin-right: 15px;
		border-radius: 70%;
	}
	header .profile-text {
		display: flex;
		flex-direction: column;
		color: white;
	}
	header .profile-text .profile-name {
		margin-top: 2px;
		font-size: 18px;
		font-weight: 600;
	}
	header .profile-text .profile-role {
		font-size: 16px;
		margin-top: -2px;
		display: block;
	}
	/* End Header */

	.bottom-content {
		border-top: 1px solid white;
	}
	.sidebar a {
		display: flex;
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
		align-items: center;
	}
	.menu-bar svg{
		margin-right: 10px;
	}
	a:focus,
	a:hover {
		border-left: 5px solid white;
	}
	.sidebar a i {
		font-size: 23px;
		margin-right: 16px;
	}
	.menu-bar a span {
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
