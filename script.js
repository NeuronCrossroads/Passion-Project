document.getElementById("nav-button").addEventListener("touchstart", revealMenu, false);
document.getElementById('button-past').addEventListener("touchstart", showPast, false);
document.getElementById('button-what').addEventListener("touchstart", showWhat, false);
document.getElementById('button-future').addEventListener("touchstart", showFuture, false);
document.getElementById('button-video').addEventListener("touchstart", tellMe, false);
document.getElementById('button-works').addEventListener("touchstart", showWorks, false);
document.getElementById('button-more').addEventListener("touchstart", showMore, false);
document.getElementById('button-ethics').addEventListener("touchstart", showEthics, false);

function tellMe() {
	console.log("clicked!");
}

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
  document.getElementById("works").style.right = "150%";
	document.getElementById("more").style.right = "150%";
	document.getElementById("ethics").style.right = "150%";
}

function showWhat() {
  document.getElementById("main").style.right = "150%";
  document.getElementById("past").style.right = "150%";
  document.getElementById("what").style.right = "2%";
  document.getElementById("future").style.right = "150%";
  document.getElementById("works").style.right = "150%";
	document.getElementById("more").style.right = "150%";
	document.getElementById("ethics").style.right = "150%";
}

function showFuture() {
  document.getElementById("past").style.right = "150%";
  document.getElementById("main").style.right = "150%";
  document.getElementById("what").style.right = "150%";
  document.getElementById("future").style.right = "2%";
  document.getElementById("works").style.right = "150%";
	document.getElementById("more").style.right = "150%";
	document.getElementById("ethics").style.right = "150%";
}

function showWorks() {
  document.getElementById("past").style.right = "150%";
  document.getElementById("main").style.right = "150%";
  document.getElementById("what").style.right = "150%";
  document.getElementById("future").style.right = "150%";
	document.getElementById("works").style.right = "2%";
	document.getElementById("more").style.right = "150%";
	document.getElementById("ethics").style.right = "150%";
}

function showMore() {
	document.getElementById("past").style.right = "150%";
  document.getElementById("main").style.right = "150%";
  document.getElementById("what").style.right = "150%";
  document.getElementById("future").style.right = "150%";
	document.getElementById("works").style.right = "150%";
	document.getElementById("more").style.right = "2%";
	document.getElementById("ethics").style.right = "150%";
}

function showEthics() {
	document.getElementById("past").style.right = "150%";
  document.getElementById("main").style.right = "150%";
  document.getElementById("what").style.right = "150%";
  document.getElementById("future").style.right = "150%";
	document.getElementById("works").style.right = "150%";
	document.getElementById("more").style.right = "150%";
	document.getElementById("ethics").style.right = "2%";
}
