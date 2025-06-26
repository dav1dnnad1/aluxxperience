const toggleButton = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});