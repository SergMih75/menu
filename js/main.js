let menuSubitem = document.querySelectorAll('.menu-subitem')
let menuItem = document.querySelectorAll('.menu-item')

menuSubitem.forEach(menuSubitem => {
	menuSubitem.addEventListener('click', e => {
		e.stopPropagation()
		menuSubitem.style.display = 'none'
	})
})

menuItem.forEach(menuItem => {
	menuItem.addEventListener('click', () => {
		menuSubitem.forEach(menuSubitem => {
			menuSubitem.style.display = 'none'
		})
		menuItem.childNodes[2].style.display = 'block'
	})
})

document.addEventListener('click', e => {
	if (
		e.target.parentElement === null ||
		!e.target.parentElement.classList.contains('menu-item')
	) {
		menuSubitem.forEach(menuSubitem => {
			menuSubitem.style.display = 'none'
		})
	}
})
