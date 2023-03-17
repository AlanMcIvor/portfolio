const btn = document.getElementById('menu-btn' );
const ul = document.querySelector('ul')
const overlay = document.getElementById('overlay');

btn.addEventListener('click', navToggle);

function navToggle(){
    btn.classList.toggle('open');
    ul.classList.toggle('show-menu')
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling')
}