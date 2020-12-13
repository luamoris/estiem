/*========================================================================
SCRIPT
==========================================================================*/

const menuCenter = document.querySelector('.menu-center');

const menuItems = document.getElementsByClassName('menu-center__item');
for(const item of menuItems) {
	item.onclick = () => {
		const element = item.querySelector('div');
		menuCenter.classList.remove(menuCenter.classList[1]);
		menuCenter.classList.add(`${element.classList[0]}-active`);
	};
}