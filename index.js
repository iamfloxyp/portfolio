// nav-links functionality

const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener('click',()=>{
    navLinks.style.display = "flex";
    menuIcon.style.visibility ="hidden";
    closeIcon.style.visibility ="visible"
});
closeIcon.addEventListener('click',()=>{
    navLinks.style.display= 'none';
    menuIcon.style.visibility ="visible";
    closeIcon.style.visibility= 'hidden';
});