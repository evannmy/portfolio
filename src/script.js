const hamburgerMenu = document.getElementById('hamburger-menu');
const nav = document.getElementById('header-nav');
const navMenu = document.getElementById('nav-menu');

navOffset = nav.offsetTop;

window.addEventListener('scroll', function() {
  if (this.pageYOffset > navOffset) {
    nav.classList.add('nav-fixed');
  } else {
    nav.classList.remove('nav-fixed');
  }
});

hamburgerMenu.addEventListener('click', function() {
  hamburgerMenu.classList.toggle('is-active');
  navMenu.classList.toggle('show');
});