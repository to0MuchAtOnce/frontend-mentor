const hamburger = document.querySelector('.navbar > .hamburger'),
  navLinksContainer = document.querySelector('.navbar > .nav-links-container');

/*when toggler button is clicked*/
hamburger.addEventListener(
  'click',
  () => {
    //convert hamburger to close
    hamburger.classList.toggle('cross');
    //make nav visible
    navLinksContainer.classList.toggle('nav-active');
  },
  true
);
