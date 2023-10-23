const button = document.querySelectorAll('button');
const windowHeight = document.body.clientHeight;
let gridTop = windowHeight * .1;
let gridBottom = windowHeight * .9;
  
window.addEventListener('scroll', testButton);
  
    function testButton() {
      for(i=0; i<button.length; i++) {
        let thisTop = button[i].getBoundingClientRect().top; // gets current position of button top corner
        if (thisTop < gridBottom) {button[i].classList.add('animated');} // adds 'animated' when it's on screen
        if (thisTop > gridBottom || thisTop < gridTop) {button[i].classList.remove('animated'); // removes 'animated' when off screen
        }
      }
    };