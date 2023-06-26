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
	links.forEach((el) => {
		el.addEventListener('click', scrollHeader);
		console.log('top');
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