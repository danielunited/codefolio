export function setupNav() {
  const navButton = document.querySelector('.navbar-icon-button');
  const navMenu = document.querySelector('.w-nav-menu');

  if (!navButton || !navMenu) return;

  const toggleNav = () => navMenu.classList.toggle('is-open');
  navButton.addEventListener('click', toggleNav);

  // Cleanup function to prevent memory leaks
  return () => navButton.removeEventListener('click', toggleNav);
}
