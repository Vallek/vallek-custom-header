let template = document.createElement("template");
const html = String.raw;
template.innerHTML = html` 
<style>
.header {
	--accent-color-darker: rgba(247, 158, 14, 1);
	--main-color: #fff;
	--back-color: rgba(41, 65, 153, 1);
	--black: rgba(11, 19, 42, 1);
	--vert-padding: 2em;
	--side-padding: 1.7em;
	--ava-size: 35px;
	--logo-size: 30px;
	box-sizing: border-box;
	position: relative;
	transform: translateY(-100%);
	display: flex;
	justify-content: space-between;
	align-items: center;
	align-self: center; /*In case body is flexbox and you want to remove margin auto*/
	gap: 1em;
	width: 100%;
	max-width: 1250px;
	margin: 0 auto;
	padding: var(--vert-padding, 3em) var(--side-padding, 1.7em);
	background-color: var(--back-color);
}

.avatar {
	color: var(--main-color);
	display: block;
	border-radius: 50%;
}	

.avatar:focus {
	outline: 2px dashed;
	outline-offset: 2px;
}	

.avatar__image {
	display: block;
	width: var(--ava-size);
	height: var(--ava-size);
	object-fit: cover;
	border-radius: 50%;
}

.header__nav {
	display: flex;
	align-items: center;
}

.header__menu {
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 2em;
}

.header__link {
	color: var(--main-color);
	font-family: sans-serif;
	font-weight: 600;
	font-size: 1em;
	text-transform: uppercase;
	text-decoration: none;
}

.header__link:focus {
	outline: 2px dashed;
	outline-offset: 2px;
}

.header__link:hover {
	color: var(--accent-color-darker);
}

.header__social-links {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 0.5em;
}

.header__social-link {
	color: var(--main-color);
}

.header__social-link:focus {
	outline: 2px dashed;
	outline-offset: 2px;
}

.header__social-logo {
	display: block;
	width: var(--logo-size);
	height: var(--logo-size);
}

/* Popup menu */
.header__popup-menu {
	margin-left: calc(var(--logo-size) * 1); /* Shift left to center, times = amount of social logos */
	display: none;
}

@media screen and (max-width: 1000px) {
	.header__nav {
		display: none;
	}
	.header__popup-menu {
		display: block;
	}
}

.popup-menu__input {
	display: none;
}

.popup-menu__nav {
	display: flex;
	flex-direction: column;
	align-items: end;
}

.popup-menu__button {
	user-select: none;
	cursor: pointer;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px solid var(--main-color);
	width: 50px;
	height: 50px;
}

.popup-menu__open,
.popup-menu__close {
	color: var(--main-color);
	font-size: 30px;
}

.popup-menu__list {
	position: absolute;
	left: 0;
	bottom: 0;
	z-index: 2;
	transform: translate(0%, 100%);
	width: 100vw;
	margin: 0;
	padding: 0;
	list-style: none;
	text-align: center;
	color: var(--main-color);
	background-color: var(--accent-color-darker);
}

.popup-menu__list > li {
	display: flex;
	justify-content: center;
}

.popup-menu__link {
	color: var(--back-color);
	width: 100%;
	font-family: sans-serif;
	font-size: 1.6em;
	line-height: 2;
	padding: 0 3em;
	text-decoration: none;
}

.popup-menu__link:hover,
.popup-menu__link:focus {
	color: var(--main-color);
	background-color: var(--back-color);
}

.popup-menu__list,
.popup-menu__close {
	display: none;
}

:is(.popup-menu__input:checked, .popup-menu__input:target) ~ .popup-menu__nav :is(.popup-menu__list, .popup-menu__close)  {
	display: block;
}

:is(.popup-menu__input:checked, .popup-menu__input:target) ~ .popup-menu__nav .popup-menu__open {
	display: none;
}

.visually-hidden {
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	left: 0;
}

.header__menu_anim {
	--vert-padding: 0.6em;
	--side-padding: 3vw;
	position: fixed;
	left: 0;
	transform: translateY(0%);
	width: 100%;
	max-width: 100%;
	min-height: initial;
	background-color: var(--back-color);
	transition: transform 0.4s ease-out;
	z-index: 3;
}
</style>
</head>
<body>
<!-- Don't forget to fill out alts and aria-label's -->
<header class="header">
<a class="avatar" href="" aria-label="" title="">
		<img class="avatar__image" src="https://placehold.co/120x120/f79e0e/FFFFFF/png" alt="" width="40" height="40">
</a>
<nav class="header__nav">
	<ul class="header__menu">
		<li class="header__item visually-hidden">
			<a class="header__link" href="#">В начало</a>
		</li>
		<li class="header__item">
			<a class="header__link" href="#">О нас</a>
		</li>
		<li class="header__item">
			<a class="header__link" href="#">Услуги</a>
		</li>
		<li class="header__item">
			<a class="header__link" href="#">Преимущества</a>
		</li>
		<li class="header__item">
			<a class="header__link" href="#">Портфолио</a>
		</li>
		<li class="header__item">
			<a class="header__link" href="#">Контакты</a>
		</li>
	</ul>
</nav>
<div class="header__popup-menu popup-menu">
	<input class="popup-menu__input" aria-hidden="true" type="checkbox" id="menustate">
	<nav class="popup-menu__nav">
		<a class="popup-menu__open" role="button" href="#menustate">
			<span class="visually-hidden ">Открыть меню</span>
		</a>
		<a class="popup-menu__close" role="button" href="#">
			<span class="visually-hidden ">Закрыть меню</span>
		</a>
		<label class="popup-menu__button" for="menustate" aria-hidden="true">
			<span class="popup-menu__open">≡</span>
			<span class="popup-menu__close">≡</span>
		</label>
		<ul class="popup-menu__list">
			<li class="popup-menu__item">
				<a class="popup-menu__link" href="#">В начало</a>
			</li>
			<li class="popup-menu__item">
				<a class="popup-menu__link" href="#">О&nbsp;нас</a>
			</li>
			<li class="popup-menu__item">
				<a class="popup-menu__link" href="#">Услуги</a>
			</li>
			<li class="popup-menu__item">
				<a class="popup-menu__link" href="#">Преимущества</a>
			</li>
			<li class="popup-menu__item">
				<a class="popup-menu__link" href="#">Портфолио</a>
			</li>
			<li class="popup-menu__item">
				<a class="popup-menu__link" href="#">Контакты</a>
			</li>
		</ul>
	</nav>
</div>
<section class="header__social-links">
	<a class="header__social-link" href="" title="" aria-label="">
			<img class="header__social-logo" width="25" height="25" src="https://placehold.co/100x100/4fb773/FFFFFF.svg" alt="">
	</a>
	<a class="header__social-link" href="" title="" aria-label="">
			<img class="header__social-logo" width="25" height="25" src="https://placehold.co/100x100/4a99df/FFFFFF.svg" alt="">
	</a>
</section>
</header>
`;

class vallekHeader extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });	
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}

	connectedCallback() {
		let script = document.createElement('script');
		const js = String.raw;
		script.textContent = js` 
		customElements.whenDefined('vallek-header').then(() => {
			const body = document.querySelector('body');
			const vallekHeader = document.querySelector('vallek-header');
			const vallekHeaderDOM = vallekHeader.shadowRoot;
			const header = vallekHeaderDOM.querySelector('header');
			const menuButton = header.querySelector('.popup-menu__button');
			const menuLink = header.querySelectorAll('.popup-menu__link');
			const firstLink = header.querySelector('.header__item:first-child');
			const links = header.querySelectorAll('.popup-menu__link');
			
			function scrollHeader() {
				// Timeout to wait for right header height value
				setTimeout(() => {	
					let headerHeightStr = getComputedStyle(header).height;
					let headerHeight = parseInt(headerHeightStr, 10);
					// Get header height with and without px (used to shift for animation)
					let pageTop = body.getBoundingClientRect().top;
					if (pageTop <= -headerHeight) {
						header.style.top = '0px';
						header.classList.add('header__menu_anim');
						firstLink.classList.remove('visually-hidden');
					}
					else {
						header.style.top = headerHeightStr;
						header.classList.remove('header__menu_anim');
						firstLink.classList.add('visually-hidden');
					}
				}, 50);
			}
			scrollHeader();
			window.addEventListener('scroll', scrollHeader);
			window.addEventListener('resize', scrollHeader);
			firstLink.addEventListener('click', scrollHeader);
			links.forEach((el) => {
				el.addEventListener('click', scrollHeader);
			});

			function closeMenu() {
				menuButton.click();
			}
			menuLink.forEach((el) => {el.addEventListener('click', closeMenu);});
			
			// Close when click outside
			let input = header.querySelector('.popup-menu__input');
			document.addEventListener('click', (el) => {
				let target = el.target;
				// Can't access shadow dom so just check if outside custom element
				if (target != vallekHeader) {
					input.checked = false;
				}
			});
		
			// Accessibility
			const menuState = document.querySelector('#menustate');
			header.querySelector('.popup-menu__open').addEventListener('click', (e) => {
				e.preventDefault();
				menuState.checked = true;
			});
			header.querySelector('.popup-menu__close').addEventListener('click', (e) => {
				e.preventDefault();
				menuState.checked = false;
			});
		} );
	 `;
		this.shadowRoot.appendChild(script);
	}

}

customElements.define('vallek-header', vallekHeader);