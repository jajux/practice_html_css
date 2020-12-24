// Déclarations des constantes sur le media queries menu navigation
const burger = document.querySelector('.btn-burger');
const navLeft = document.querySelector('.nav-left');
const itemNav = document.querySelectorAll('nav-item');
const barre = document.querySelector('.barre');

burger.addEventListener('click', () => {
    barre.classList.toggle('active');
    navLeft.classList.toggle('menu-visible');
});
// faire apparaitre par un slide la barre de menu de navigation
if (window.matchMedia('(max-width: 1300px')) {

    itemNav .forEach(item => {
        item .addEventListener('click', () => {
            navLeft.classList.toggle('menu-visible');
            barre.classList.toggle('acitve');
        });
    });
 }
