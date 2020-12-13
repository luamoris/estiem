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