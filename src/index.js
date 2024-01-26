// Home Page
const navButton = document.querySelector(".navbar-btn");
const navbar = document.querySelector(".navbar");

navButton.addEventListener("click",()=>{
    navbar.classList.toggle("active");
})

// custom pointer
var cursor = document.querySelector(".cursor");
document.addEventListener("mousemove",function(dots){
  cursor.style.left = dots.x -100 +"px"
  cursor.style.top = dots.y - 100+"px"
})

//Footer
var currentYear = new Date().getFullYear();
document.querySelector(".copyright").innerHTML= "© " + currentYear + " Funtech Club";

// Event Page
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 2500);