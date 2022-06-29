// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
const nav = document.querySelector('nav-link');
window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
        nav.classList.add('color');
    }
    else {
        header.classList.remove('navbarDark');
        nav.classList.remove('color');
    }
}
