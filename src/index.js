// alert("Hello");
const navButton = document.querySelector(".navbar-btn");
const navbar = document.querySelector(".navbar");

navButton.addEventListener("click",()=>{
    navbar.classList.toggle("active");
})

