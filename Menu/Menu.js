const toggleMenu = () => {
  menu.style.display = 'block';
  menu.classList.toggle('menu--open');
  if (menu.classList.contains('menu-open')) {
    setTimeout(() => {
      menu.style.display = 'none'
    }, 330);
  }
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

// close box
const closeBox = document.querySelector('.closeBox');
closeBox.addEventListener('click', toggleMenu);

// Escape listener to close menu
document.addEventListener('keydown', (event) => {
  const open = document.querySelector('.menu');
  // If escape is pressed and our menu is open, but our form modal is not open
  if (event.keyCode === 27 && open.classList.contains('menu--open') && !document.querySelector('.form--open')) {
    toggleMenu();
  }
});