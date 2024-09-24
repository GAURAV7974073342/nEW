document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  // Active link functionality
  const currentPath = window.location.pathname;
  console.log('Current Path:', currentPath); // Debugging

  const navLinkElements = document.querySelectorAll('.nav-link a');

  navLinkElements.forEach(link => {
    const linkPath = link.getAttribute('href');
    console.log('Link Path:', linkPath); // Debugging

    // Normalize paths for comparison
    const normalizedLinkPath = linkPath.startsWith('/') ? linkPath : `/${linkPath}`;
    const normalizedCurrentPath = currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath;

    console.log('Normalized Link Path:', normalizedLinkPath); // Debugging
    console.log('Normalized Current Path:', normalizedCurrentPath); // Debugging

    if (normalizedLinkPath === normalizedCurrentPath || (normalizedCurrentPath === '/' && normalizedLinkPath === '/index.html')) {
      link.classList.add('active');
    }
  });

  function toggleMenu() {
    const navLinks = document.querySelector('.main-navlink-wrap');
    const navButton = document.querySelector('.nav-button');
    const overlay = document.querySelector('.header-overlay');
    
    navLinks.classList.toggle('show');
    navButton.classList.toggle('show');
    overlay.classList.toggle('show');
  }

  let currentIndex = 0;
  const slider = document.querySelector('.success_home-content-bottom-slider-track');
  const items = document.querySelectorAll('.success_home-content-bottom-slider-item');
  const itemWidth = items[0].offsetWidth;

  function slideLeft() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    }
  }

  function slideRight() {
    if (currentIndex < items.length - 1) {
      currentIndex++;
      updateSliderPosition();
    }
  }

  function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  // Attach functions to window to make them accessible from HTML
  window.slideLeft = slideLeft;
  window.slideRight = slideRight;
});