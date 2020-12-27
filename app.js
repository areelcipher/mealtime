const hamburger = document.querySelector('#hidden-menu-icon');
const clear = document.querySelector('#clear');

hamburger.addEventListener('click', () => {
    const sideMenu = document.querySelector('#side-menu');
    sideMenu.style.display = 'flex'
})

clear.addEventListener('click', () => {
    const sideMenu = document.querySelector('#side-menu');
    sideMenu.style.display = 'none'
})