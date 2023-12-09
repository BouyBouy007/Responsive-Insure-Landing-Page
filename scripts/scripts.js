activateHamburger();

function activateHamburger() {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const headerNav = document.querySelector('.header-nav');
  
  let activatedButton = false;
  
  hamburgerButton.addEventListener('click', () => {
    if (activatedButton === false) {
      hamburgerButton.classList.add('display-mobile-nav');
      headerNav.style.display = 'flex';
  
      activatedButton = true;
    } else {
      hamburgerButton.classList.remove('display-mobile-nav');
      headerNav.style.display = 'none';
  
      activatedButton = false;
    }
  });
}