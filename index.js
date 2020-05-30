// Get the navbar
var navbar = document.getElementById("navbar");
var linknav = document.getElementsByClassName("nav-item")
$("#btn-darkmode").click(function() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    navbar.classList.toggle('darkmode-theme')
})


window.onscroll = function() { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}