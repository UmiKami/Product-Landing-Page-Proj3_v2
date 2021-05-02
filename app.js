// Navigation

const navBTN = document.querySelector(".nav-menu");
const header = document.querySelector("#header");
const closeNavBTN = document.querySelector(".close-nav");


navBTN.addEventListener("click",()=>{
    header.classList.add("nav-show");
});

closeNavBTN.addEventListener("click", ()=>{
    header.classList.remove("nav-show");
});