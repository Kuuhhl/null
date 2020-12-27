var switcher = document.getElementById('chb_theme')

switcher.onclick = function () {
	if (switcher.checked) {
		darkTheme()
	} else {
		lightTheme()
	}
}

if (localStorage.getItem('switch') == 'on') {
	darkTheme()
}

function darkTheme() {
	switcher.checked = true
	localStorage.setItem('switch', 'on')
	document.body.setAttribute('theme', 'dark')
}

function lightTheme() {
	switcher.checked = false
	localStorage.setItem('switch', 'off')
	document.body.removeAttribute('theme')
}
