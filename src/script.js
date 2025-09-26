const html = document.getElementsByTagName('html')[0];
const hamburgerMenu = document.getElementById('hamburger-menu');
const nav = document.getElementById('header-nav');
const navMenu = document.getElementById('nav-menu');
const toggleDarkMode = document.getElementById('toggle-dark-mode');
const greetingText = document.getElementById('greeting');
const toTop = document.getElementById('to-top');

// Condition for window have scrolled
window.addEventListener('scroll', function() {
  const navOffset = nav.offsetTop;
  // Add class nav-fixed if scrolled
  if (this.pageYOffset > navOffset) {
    nav.classList.add('nav-fixed');
  } else {
    nav.classList.remove('nav-fixed');
  }

  const greetingTextOffset = greetingText.offsetTop;
  // Show to-top button if scroll reach greeting text element
  if (this.pageYOffset > greetingTextOffset) {
    toTop.classList.add('show');
  } else {
    toTop.classList.remove('show');
  }  
});

// For hamburger animation and showing a nav
hamburgerMenu.addEventListener('click', function() {
  hamburgerMenu.classList.toggle('is-active');
  navMenu.classList.toggle('show');
});

// Close hamburger menu if any space except hamburger and nav clicked
window.addEventListener('click', function(e) {
  if (!hamburgerMenu.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove('show');
    hamburgerMenu.classList.remove('is-active');
  }
});

// Darkmode function
const toggleCircle = toggleDarkMode.nextElementSibling;
const toggleCircleIcon = toggleDarkMode.nextElementSibling.children[0];
const toggleContainer = toggleDarkMode.parentElement

function toggleDarkModeEnable() {
  localStorage.theme = "dark";

  toggleCircleIcon.setAttribute('src', 'src/assets/icons/dark-mode.svg');
  
  toggleCircle.classList.remove('bg-white');
  toggleCircle.classList.add('bg-dark');
  toggleCircle.classList.remove('left-0');
  toggleCircle.classList.add('right-0');

  toggleContainer.classList.remove('bg-secondary');
  toggleContainer.classList.add('bg-ctp-surface1');
}

function toggleDarkModeDisable() {
  localStorage.theme = "light";

  toggleCircleIcon.setAttribute('src', 'src/assets/icons/light-mode.svg');
  
  toggleCircle.classList.remove('bg-dark');
  toggleCircle.classList.add('bg-white');
  toggleCircle.classList.remove('right-0');
  toggleCircle.classList.add('left-0');

  toggleContainer.classList.remove('bg-ctp-surface1');
  toggleContainer.classList.add('bg-secondary');
}

if (localStorage.theme == 'dark') {
  toggleDarkMode.checked = true; 
} else {
  toggleDarkMode.checked = false; 
}

if (toggleDarkMode.checked) {
  toggleDarkModeEnable();
} else {
  toggleDarkModeDisable();
}

// Toggle dark mode
toggleDarkMode.addEventListener('click', function() {
  if (this.checked) {
    html.classList.add('dark');
    toggleDarkModeEnable();
  } else {
    html.classList.remove('dark');
    toggleDarkModeDisable();
  }
});