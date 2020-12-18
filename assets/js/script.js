/*========================================================================
SCRIPT
==========================================================================*/

const menuCenterList = document.querySelector('.menu-center__list');
const listUl = menuCenterList.querySelector('ul');

const menuItems = document.getElementsByClassName('menu-center__item');
for(const item of menuItems) {
	item.onclick = () => {
		if (window.innerWidth > 800) {
			const element = item.querySelector('div');
			if (listUl.classList[0]) { listUl.classList.remove(listUl.classList[0]); }
			listUl.classList.add(`${element.classList[0]}-active`);
		} else {
			setTimeout(() => {
				sidebar.classList.remove('active');
				menuBurger.classList.remove('active');
				menuCenter.classList.remove('active');
				body.classList.remove('lock');
				footer.classList.remove('z');
			}, 200);
		}
	};
}

// Buttons 

const search = document.querySelector('.search');
const searchInput = search.querySelector('.search__input');
const searchCancel = search.querySelector('.search__cancel');

searchInput.onfocus = () => { search.classList.add('active'); }
searchInput.onblur = () => { search.classList.remove('active'); }

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

// Burger 

const sidebar = document.querySelector('.sidebar');
const menuCenter = document.querySelector('.menu-center');
const menuBurger = document.querySelector('.menu-burger');

const body = document.querySelector('body');
const footer = document.querySelector('.footer');

menuBurger.onclick = () => {
	sidebar.classList.toggle('active');
	menuBurger.classList.toggle('active');
	menuCenter.classList.toggle('active');
	body.classList.toggle('lock');
}

// Language

const language = document.querySelector('.language');
const languageList = language.querySelector('.language__list');
const languageItems = languageList.children;

for(const item of languageItems) {
	item.onclick = () => {
		const lng = item.querySelector('span');
		console.log(lng);
		if (languageList.classList[1]) { languageList.classList.remove(languageList.classList[1]); }
		languageList.classList.add(`${lng.classList[0]}`);

		languageMove(lng.classList[0]);
	};
}


// events

const events = document.querySelector('.events__body');

const btnUp = events.querySelector('.butt__up');
const btnDown = events.querySelector('.butt__down');

const eventsUl = events.querySelector('ul');
const eventsItems = eventsUl.children;


let bottomItems = 5;
let maxItems = eventsItems.length;

if (bottomItems < maxItems) { btnDown.classList.add('active'); }

btnUp.onclick = () => {
	console.dir(eventsItems[0]);
	if (bottomItems > 5) {
		setTimeout(() => {
			const size = (eventsItems[0].querySelector('.events__item-content')).clientHeight + 20;
			const scrollTop = Number(eventsUl.scrollTop) - size;
			eventsUl.scrollTop = scrollTop;
			bottomItems--;
			if (bottomItems == 5) { btnUp.classList.remove('active'); }
			if (bottomItems < maxItems) { btnDown.classList.add('active'); }
		}, 100);
	}
}

btnDown.onclick = () => {
	if (bottomItems < maxItems) {
		setTimeout(() => {
			const size = (eventsItems[0].querySelector('.events__item-content')).clientHeight + 20;
			const scrollTop = Number(eventsUl.scrollTop) + size;
			eventsUl.scrollTop = scrollTop;
			bottomItems++;
	
			if (bottomItems > 5) { btnUp.classList.add('active'); }
			if (bottomItems == maxItems) { btnDown.classList.remove('active'); }
		}, 100);
	}
}
