/*========================================================================
SCRIPT
==========================================================================*/

const menuCenterList = document.querySelector('.menu-center__list');
const listUl = menuCenterList.querySelector('ul');

const menuItems = document.getElementsByClassName('menu-center__item');
for(const item of menuItems) {
	item.onclick = () => {
		const element = item.querySelector('div');
		if (listUl.classList[0]) { listUl.classList.remove(listUl.classList[0]); }
		listUl.classList.add(`${element.classList[0]}-active`);
	};
}

// Buttons 

const search = document.querySelector('.search');
const searchInput = search.querySelector('.search__input');
const searchCancel = search.querySelector('.search__cancel');

searchInput.oninput = () => {
	if (searchInput.value.length > 0) {
		searchCancel.classList.remove('none');
		searchCancel.classList.add('active');
	} else {
		searchCancel.classList.remove('active');
		searchCancel.classList.add('none');
	}
}

searchCancel.onclick = () => {
	searchInput.value = '';
	searchCancel.classList.remove('active');
	searchCancel.classList.add('none');
}