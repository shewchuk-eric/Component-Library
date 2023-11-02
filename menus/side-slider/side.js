const sidenav = document.querySelector('#sidenav-open');

sidenav.addEventListener('keyup', event => {
  if (event.code === 'Escape') document.location.hash = '';
});

sidenav.addEventListener('transitionend', e => {
    const isOpen = document.location.hash === '#sidenav-open';
  
    isOpen
        ? document.querySelector('#sidenav-close').focus()
        : document.querySelector('#sidenav-button').focus();
  })