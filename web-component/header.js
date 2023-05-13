customElements.whenDefined('vallek-header').then(() => {
	const body = document.querySelector('body');
	const vallekHeader = document.querySelector('vallek-header');
	const vallekHeaderDOM = vallekHeader.shadowRoot;
	const header = vallekHeaderDOM.querySelector('header');
	const menuButton = header.querySelector('.popup-menu__button');
	const menuLink = header.querySelectorAll('.popup-menu__link');
	const firstLink = header.querySelector('.header__item:first-child');
	
	function scrollHeader() {
		// Get header height with and without px (used to shift for animation)
		const headerHeightStr = getComputedStyle(header).getPropertyValue('height');
		const headerHeight = parseInt(headerHeightStr, 10);
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
	}
	window.addEventListener('scroll', scrollHeader);
	window.addEventListener('resize', scrollHeader);
	// Timeout to wait for header height to compute
	setTimeout(() => {	
		scrollHeader();
	}, 100);
// Timeout after anchor link click to get full header height
	firstLink.addEventListener('click', () => {
		setTimeout(scrollHeader, 100);
	});

	function closeMenu() {
		menuButton.click();
	}
	menuLink.forEach((el) => {el.addEventListener('click', closeMenu);});

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