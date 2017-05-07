document.getElementById("main").style.right = "2%";
var navOpen = false;

function revealMenu() {
  if ( window.matchMedia( "(max-device-width: 740px)" ).matches ) {
    if ( navOpen == false ) {
      document.getElementById("side-bar").style.left = "2%";
      document.getElementById("nav-button").innerHTML = "<";
      navOpen = true;
    }
    else {
      document.getElementById("side-bar").style.left = "-46%";
      document.getElementById("nav-button").innerHTML = ">";
      navOpen = false;
    }
  }
}

function showPast() {
  document.getElementById("main").style.right = "150%";
  document.getElementById("past").style.right = "2%";
  document.getElementById("what").style.right = "150%";
  document.getElementById("future").style.right = "150%";
}

function showWhat() {
  document.getElementById("main").style.right = "150%";
  document.getElementById("past").style.right = "150%";
  document.getElementById("what").style.right = "2%";
  document.getElementById("future").style.right = "150%";
}

function showFuture() {
  document.getElementById("past").style.right = "150%";
  document.getElementById("main").style.right = "150%";
  document.getElementById("what").style.right = "150%";
  document.getElementById("future").style.right = "2%";
}
