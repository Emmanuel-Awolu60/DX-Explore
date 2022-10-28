


// console.log(document)



var hamburgerdiv = document.querySelector(".hamburger")
var mobileLink = document.querySelector(".mobile-link-holder")
var mybackdrop = document.querySelector(".backdrop")



function  something() {
        
     hamburgerdiv.classList.toggle ("showburger")
     mobileLink.classList.toggle ("show-mobile-link-holder")
     mybackdrop.classList.toggle ("show-backdrop")
}