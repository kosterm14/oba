<script>
	import { Toggle } from '$lib/index.js';
	import { onMount } from 'svelte';
</script>

<input type="checkbox" id="check" />
<label for="check">
	<span class="" id="btn"
		><svg
			width="30px"
			height="30px"
			viewBox="-2.4 -2.4 28.80 28.80"
			xmlns="http://www.w3.org/2000/svg"
			fill="#000000"
			stroke="#000000"
			><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			></g><g id="SVGRepo_iconCarrier">
				<title></title>
				<g id="Complete">
					<g id="arrow-right">
						<g>
							<polyline
								data-name="Right"
								fill="none"
								id="Right-2"
								points="16.4 7 21.5 12 16.4 17"
								stroke="#ffffff"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							></polyline>
							<line
								fill="none"
								stroke="#ffffff"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								x1="2.5"
								x2="19.2"
								y1="12"
								y2="12"
							></line>
						</g>
					</g>
				</g>
			</g></svg
		></span
	>
	<span class="" id="cancel"
		><svg
			width="30px"
			height="30px"
			viewBox="-2.4 -2.4 28.80 28.80"
			xmlns="http://www.w3.org/2000/svg"
			fill="#000000"
			><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			></g><g id="SVGRepo_iconCarrier">
				<title></title>
				<g id="Complete">
					<g id="arrow-left">
						<g>
							<polyline
								data-name="Right"
								fill="none"
								id="Right-2"
								points="7.6 7 2.5 12 7.6 17"
								stroke="#ffffff"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							></polyline>
							<line
								fill="none"
								stroke="#ffffff"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								x1="21.5"
								x2="4.8"
								y1="12"
								y2="12"
							></line>
						</g>
					</g>
				</g>
			</g></svg
		></span
	>
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
						<svg
							width="30px"
							height="30px"
							viewBox="-6.4 -6.4 76.80 76.80"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							stroke="#ffffff"
							stroke-width="3.2"
							><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
								id="SVGRepo_tracerCarrier"
								stroke-linecap="round"
								stroke-linejoin="round"
							></g><g id="SVGRepo_iconCarrier"
								><polygon points="8 24 8 56 56 56 56 24 32 8 8 24"></polygon><polyline
									points="40 56 40 36 24 36 24 56"
								></polyline></g
							></svg
						>
						<span>Home</span>
					</a>
				</li>
				<li>
					<a href="/leeslijst">
						<svg
							width="30px"
							height="30px"
							viewBox="-6.4 -6.4 76.80 76.80"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							stroke="#ffffff"
							stroke-width="3.2"
							><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
								id="SVGRepo_tracerCarrier"
								stroke-linecap="round"
								stroke-linejoin="round"
							></g><g id="SVGRepo_iconCarrier"
								><line x1="20" y1="16" x2="56" y2="16"></line><line x1="20" y1="32" x2="56" y2="32"
								></line><line x1="20" y1="48" x2="56" y2="48"></line><line
									x1="8"
									y1="16"
									x2="12"
									y2="16"
								></line><line x1="8" y1="32" x2="12" y2="32"></line><line
									x1="8"
									y1="48"
									x2="12"
									y2="48"
								></line></g
							></svg
						>
						<span>Leeslijst</span>
					</a>
				</li>
				<li>
					<a href="/uitleningen">
						<svg
							width="30px"
							height="30px"
							viewBox="-6.4 -6.4 76.80 76.80"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							stroke="#ffffff"
							stroke-width="3.2"
							><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
								id="SVGRepo_tracerCarrier"
								stroke-linecap="round"
								stroke-linejoin="round"
							></g><g id="SVGRepo_iconCarrier"
								><polyline
									points="32 24 40 24 40 16 56 28 40 40 40 32 24 32 24 24 8 36 24 48 24 40 32 40"
								></polyline></g
							></svg
						>
						<span>Uitleningen</span>
					</a>
				</li>
				<li>
					<a href="/reserveringen">
						<svg
							width="30px"
							height="30px"
							viewBox="-6.4 -6.4 76.80 76.80"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							stroke="#ffffff"
							stroke-width="3.2"
							><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
								id="SVGRepo_tracerCarrier"
								stroke-linecap="round"
								stroke-linejoin="round"
							></g><g id="SVGRepo_iconCarrier"
								><rect x="8" y="8" width="48" height="36"></rect><line
									x1="12"
									y1="56"
									x2="52"
									y2="56"
								></line><line x1="40" y1="44" x2="40" y2="56"></line><line
									x1="24"
									y1="44"
									x2="24"
									y2="56"
								></line><polyline points="46 16 26 36 18 28"></polyline></g
							></svg
						>
						<span>Reserveringen</span>
					</a>
				</li>
				<li>
					<a href="/betalingen">
						<svg
							width="30px"
							height="30px"
							viewBox="-6.4 -6.4 76.80 76.80"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							stroke="#ffffff"
							stroke-width="3.2"
							><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
								id="SVGRepo_tracerCarrier"
								stroke-linecap="round"
								stroke-linejoin="round"
							></g><g id="SVGRepo_iconCarrier"
								><circle cx="32" cy="32" r="24"></circle><polyline points="40 44 32 32 32 16"
								></polyline></g
							></svg
						>
						<span>Betalingen</span>
					</a>
				</li>
			</ul>
		</div>

		<div class="bottom-content">
			<ul>
				<li>
					<a href="/login">
						<svg
							width="30px"
							height="30px"
							viewBox="-6.4 -6.4 76.80 76.80"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							stroke="#ffffff"
							stroke-width="3.2"
							><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
								id="SVGRepo_tracerCarrier"
								stroke-linecap="round"
								stroke-linejoin="round"
							></g><g id="SVGRepo_iconCarrier"
								><polyline points="16 20 16 8 48 8 48 56 16 56 16 44"></polyline><polyline
									points="28 40 36 32 28 24"
								></polyline><line x1="8" y1="32" x2="36" y2="32"></line></g
							></svg
						>
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

<section id="search-field">
	<input type="checkbox" id="search" />
	<label for="search">
		<span class="search-hamburg-closed" id="search-closed"
			><svg
				fill="#ffffff"
				width="30px"
				height="30px"
				viewBox="-3.2 -3.2 38.40 38.40"
				xmlns="http://www.w3.org/2000/svg"
				stroke="#ffffff"
				><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				></g><g id="SVGRepo_iconCarrier">
					<path
						d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"
					></path>
				</g></svg
			></span
		>
		<span class="search-hamburg-open" id="search-open">
			<svg style="width:24px;height:24px" viewBox="0 0 24 24"
				><path
					fill="#ffffff"
					d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
				/>
			</svg></span
		>
	</label>

	<div class="search-bar">
		<form>
			<div class="searchBar">
				<input
					id="searchQueryInput"
					type="text"
					name="searchQueryInput"
					placeholder="Waar ben je naar opzoek?"
					value=""
				/>
				<button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
					<svg style="width:24px;height:24px" viewBox="0 0 24 24"
						><path
							fill="#666666"
							d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
						/>
					</svg>
				</button>
			</div>
		</form>
	</div>
</section>

<style>
	/* HAMBURG SEARCH-BAR*/
	label #search-closed,
	label #search-open {
		position: absolute;
		left: 50px;
		cursor: pointer;
		color: white;
		border-radius: 0 0 0 5px;
		margin: 0 30px 30px 50px;
		font-size: 29px;
		background-color: var(--primary-transparent-color-2);
		height: 50px;
		width: 50px;
		text-align: center;
		line-height: 45px;
		transition: all 0.5s ease;
		display: grid;
		align-items: center;
		justify-content: center;
	}

	#search {
		display: none;
	}

	label #search-closed {
		opacity: 0;
		visibility: hidden;
	}
	#search:checked ~ label #search-open {
		opacity: 0;
		visibility: hidden;
	}
	#search:checked ~ label #search-closed {
		opacity: 1;
		visibility: visible;
	}
	/* END HAMBURG */

	/* SEARCHBAR */
	.search-bar {
		position: absolute;
		width: 21.25rem;
		left: 150px;
	}

	form {
		width: 100%;
	}

	.label {
		font-size: 0.625rem;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: +1.3px;
		margin-bottom: 1rem;
	}

	.searchBar {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	#searchQueryInput {
		width: 100%;
		height: 50px;
		background: white;
		outline: none;
		border: none;
		border-radius: 0 0 5px 0;
		padding: 0 3.5rem 0 1.5rem;
		font-size: 1rem;
	}

	#searchQuerySubmit {
		width: 3.5rem;
		height: 2.8rem;
		margin-left: -3.5rem;
		background: none;
		border: none;
		outline: none;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#searchQuerySubmit:hover {
		cursor: pointer;
	}

	#check:checked ~ #search-field {
		margin-left: 220px;
	}

	#search-field {
		position: relative;
		transition: all 0.5s ease;
	}
	/* END SEARCHBAR */

	/* NAVIGATION MENU */
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
		background: var(--primary-transparent-color-2);
		transition: all 0.5s ease;
		z-index: 99;
	}

	/* Header */
	header {
		display: flex;
		align-items: center;
	}
	header .profile-img {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 40px;
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
		padding-left: 20px;
		box-sizing: border-box;
		border-left: 5px solid transparent;
		font-family: 'Oswald', sans-serif;
		transition: all 0.5s ease;
		text-decoration: none;
		align-items: center;
	}
	.menu-bar svg {
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
		border-radius: 0 0 5px 5px;
		margin-left: 30px;
		font-size: 29px;
		background-color: var(--primary-transparent-color-2);
		height: 50px;
		width: 50px;
		text-align: center;
		line-height: 45px;
		transition: all 0.5s ease;
		display: grid;
		align-items: center;
		justify-content: center;
	}
	label #cancel {
		opacity: 0;
		visibility: hidden;
	}
	#check:checked ~ .sidebar {
		left: 0;
	}
	#check:checked ~ label #btn {
		margin-left: 250px;
		opacity: 0;
		visibility: hidden;
	}
	#check:checked ~ label #cancel {
		margin-left: 250px;
		opacity: 1;
		visibility: visible;
		border-radius: 0 0 5px 0;
	}
	/* EIND NAVIGATION MENU */
</style>
