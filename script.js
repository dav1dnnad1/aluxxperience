const toggleButton = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

toggleButton.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});