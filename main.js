document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
if (menuButton && nav) menuButton.addEventListener('click', () => nav.classList.toggle('open'));
