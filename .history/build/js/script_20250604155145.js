const navToggler = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');

navToggler.addEventListener('click', () => {
    aside.classList.toggle('open')
});