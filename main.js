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
const toggleTopIcon = document.querySelector('#toggle-top-icon');
const toggleMiddleIcon = document.querySelector(
  '#toggle-middle-icon'
);
const toggleBottomIcon = document.querySelector(
  '#toggle-bottom-icon'
);
const dropdownToggle = document.querySelector('.mega-list');
const dropdown = document.querySelector('#dropdown');

const items = [];
const icons = [];
let isMenuOpen = false;

const obsever = new IntersectionObserver(entires =>
  entires.forEach(entry => {
    if (!isMenuOpen) {
      const cond = !entry.isIntersecting;
      intersectionObserverHeader(cond);
    }
  })
);

obsever.observe(target);

toggleMenuBtn.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  megaMenuAnimation(isMenuOpen);
  toggleAnimationIcon();
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

function intersectionObserverHeader(cond) {
  logo.src = cond ? './assets/logoD.avif' : './assets/logo.avif';
  cardIcon.src = cond ? './assets/cartD.svg' : './assets/cart.svg';
  logoSection.classList.toggle('!bg-[#FAFAFA]', cond);
  cardText.classList.toggle('!text-black', cond);

  megaMenuWrapper.classList.toggle('bg-[#FAFAFA]', cond);
  megaMenuWrapper.classList.toggle('translate-y-[-100%]', cond);
  megaMenuWrapper.classList.toggle('opacity-0', cond);

  megaItems.forEach(item => {
    item.classList.toggle('!text-black', cond);
  });

  toggleMenuBtn.classList.toggle('!visible', cond);
  toggleMenuBtn.classList.toggle('!translate-x-[-16px]', cond);

  searchInput.classList.toggle('search-border', cond);
  searchInput.classList.toggle('!translate-x-[-5px]', cond);
}

function toggleAnimationIcon() {
  toggleTopIcon.classList.toggle('rotate-[45deg]', isMenuOpen);
  toggleTopIcon.classList.toggle('translate-y-[-1px]', isMenuOpen);
  toggleBottomIcon.classList.toggle('rotate-[-45deg]', isMenuOpen);
  toggleMiddleIcon.classList.toggle('opacity-0', isMenuOpen);
}

function megaMenuAnimation(cond) {
  megaMenuWrapper.classList.toggle('!bg-[#FAFAFA]', cond);
  megaMenuWrapper.classList.toggle('!translate-y-0', cond);
  megaMenuWrapper.classList.toggle('!opacity-100', cond);
}
