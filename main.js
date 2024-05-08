import { NAV_LINKS, SOCIAL } from './data';

const navList = document.querySelector('#nav-list');
const socialList = document.querySelector('#social-list');
const target = document.querySelector('#target-tag');
const logoSection = document.querySelector('#logo-section');
const searchInput = document.querySelector('#search');
const logo = document.querySelector('#logo');
const cardIcon = document.querySelector('#card-icon');
const cardText = document.querySelector('#card-txt');
const megaMenuWrapper = document.querySelector('#mega-menu-wrapper');
const megaItems = document.querySelectorAll('.mega-item');
const toggleMenuBtn = document.querySelector('#toggle-menu-btn');

const items = [];
const icons = [];
let isMenuOpen = false;

const obsever = new IntersectionObserver(entires =>
  entires.forEach(entry => {
    const cond = !entry.isIntersecting;

    isMenuOpen = false;
    logo.src = cond ? './assets/logoD.avif' : './assets/logo.avif';
    cardIcon.src = cond ? './assets/cartD.svg' : './assets/cart.svg';
    logoSection.classList.toggle('bg-white', cond);
    cardText.classList.toggle('text-black', cond);

    if (!isMenuOpen) {
      megaMenuWrapper.classList.remove('!bg-white');
      megaMenuWrapper.classList.remove('!translate-y-0');
      // megaMenuWrapper.classList.remove('!opacity-100');
    }

    megaMenuWrapper.classList.toggle('bg-white', cond);
    megaMenuWrapper.classList.toggle('translate-y-[-100%]', cond);
    megaMenuWrapper.classList.toggle('opacity-0', cond);
    megaItems.forEach(item => {
      item.classList.toggle('!text-black', cond);
    });

    toggleMenuBtn.classList.toggle('!visible', cond);
    toggleMenuBtn.classList.toggle('!translate-x-[-16px]', cond);

    searchInput.classList.toggle('search-border', cond);
    searchInput.classList.toggle('!translate-x-[-5px]', cond);
  })
);

obsever.observe(target);

toggleMenuBtn.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  megaMenuWrapper.classList.toggle('!bg-white', isMenuOpen);
  megaMenuWrapper.classList.toggle('!translate-y-0', isMenuOpen);
  megaMenuWrapper.classList.toggle('!opacity-100', isMenuOpen);
});

NAV_LINKS.forEach(link => {
  const navItem = document.createElement('li');
  const navLink = document.createElement('a');

  navLink.innerHTML = link;
  navLink.href = '#';
  navLink.classList.add('link');
  navItem.appendChild(navLink);
  items.push(navItem);
});

SOCIAL.forEach(social => {
  const listItem = document.createElement('li');
  const socialLink = document.createElement('a');
  const socialIcon = document.createElement('i');
  const screenOnlyText = document.createElement('span');

  socialIcon.classList.add('fa-brands', `fa-${social.title}`);

  socialLink.href = social.url;
  socialLink.target = '_blank';
  screenOnlyText.innerHTML = social.title;
  screenOnlyText.classList.add('sr-only');
  socialLink.append(socialIcon, screenOnlyText);
  listItem.appendChild(socialLink);
  icons.push(listItem);
});

navList.append(...items);
socialList.append(...icons);
