let buttonHeader = document.getElementById('chb_header');
let header = document.querySelector('.header');
let headerWeather = document.querySelector('.header__weather');
let headerGreeting = document.querySelector('.header__greeting');
let icons = document.querySelectorAll('.main a');

localStorage.getItem('header') === 'shown' || localStorage.getItem('header') === null ? showHeader() : hideHeader();

buttonHeader.onclick = () => buttonHeader.checked ? showHeader() : hideHeader();

function showHeader() {
	buttonHeader.checked = true;
	localStorage.setItem('header', 'shown');

	for (let e of icons) {
		e.classList.remove('big-icons');
	}

	header.style.opacity = '.75';
	header.style.zIndex = '1';
	headerWeather.classList.remove('hide-header-elements');
	headerGreeting.classList.remove('hide-header-elements');
}

function hideHeader() {
	buttonHeader.checked = false;
	localStorage.setItem('header', 'hidden');

	for (let e of icons) {
		e.classList.add('big-icons');
	}

	header.style.opacity = '0';
	header.style.zIndex = '-1';
}

