export function setupNav() {
  const navButton = document.querySelector('.navbar-icon-button');
  const navMenu = document.querySelector('.w-nav-menu');

  if (!navButton || !navMenu) return;

  const toggleNav = () => {
    const isOpen = navMenu.classList.contains('is-open');

    navMenu.classList.toggle('is-visible', !isOpen);
    setTimeout(
      () => {
        navMenu.classList.toggle('is-open', !isOpen);
      },
      isOpen ? 300 : 10
    );
  };

  navButton.addEventListener('click', toggleNav);
  return () => navButton.removeEventListener('click', toggleNav);
}
