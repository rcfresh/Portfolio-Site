console.log("Hi!  My name is Russell.  Welcome to my site!")

function menuToggle() {
  var x = document.getElementById('myNavToggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
