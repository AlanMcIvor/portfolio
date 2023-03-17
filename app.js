// variables
const btn = document.getElementById('menu-btn' );
const ul = document.querySelector('ul')
const overlay = document.getElementById('overlay');

// when hamburger is clicked either open or close, apply overlay and stop scrolling

// event listener for hamburger menu
btn.addEventListener('click', navToggle);

// hamburger open and close function, stop scrolling and overlay open
function navToggle(){
    btn.classList.toggle('open');
    ul.classList.toggle('show-menu')
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling')
}

// when arrow is clicked scroll down

// variable
const arrow = document.getElementById('arrow');

// event listener for arrow scroll
arrow.addEventListener('click', scrollTo);

function scrollTo(){
    document.getElementById('about').scrollIntoView({behavior: "smooth", block: "center"})
}