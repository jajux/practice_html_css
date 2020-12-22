// Déclarations des constantes sur le media queries menu navigation
const burger = document.querySelector('.btn-burger');
const navLeft = document.querySelector('.nav-left');
const itemNav = document.querySelectorAll('nav-item');
const ligne = document.querySelector('.content');

burger.addEventListener('click', () => {
    ligne.classList.toggle('active');
})