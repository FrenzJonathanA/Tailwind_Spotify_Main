const docshoverDev = document.querySelector(".headerDev__tabs1 ul li:nth-child(2)");
const doctabsDev = document.querySelector(".header__hoverDocs");
docshoverDev.addEventListener("mouseover", () => {
  doctabsDev.classList.toggle("open");
  doctabsDev.style=("transition: .5s ease"); 
});
doctabsDev.addEventListener("mouseover", () => {
  doctabsDev.classList.toggle("show");
});
docshoverDev.addEventListener("mouseout", () => {
  doctabsDev.classList.remove("open");
  doctabsDev.style=("transition: .5s ease"); 
});
doctabsDev.addEventListener("mouseout", () => {
  doctabsDev.classList.remove("show");
  doctabsDev.style=("transition: .5s ease"); 
});


const commhoverDev = document.querySelector(".headerDev__tabs1 ul li:nth-child(4)");
const commtabsDev = document.querySelector(".header__hoverComm");
commhoverDev.addEventListener("mouseover", () => {
  commtabsDev.classList.toggle("open");
  commtabsDev.style=("transition: .5s ease"); 
});
commtabsDev.addEventListener("mouseover", () => {
  commtabsDev.classList.toggle("show");
});
commhoverDev.addEventListener("mouseout", () => {
  commtabsDev.classList.remove("open");
  commtabsDev.style=("transition: .5s ease"); 
});
commtabsDev.addEventListener("mouseout", () => {
  commtabsDev.classList.remove("show");
  commtabsDev.style=("transition: .5s ease"); 
});


const caseshoverDev = document.querySelector(".headerDev__tabs1 ul li:last-child");
const casestabsDev = document.querySelector(".header__hoverCases");
caseshoverDev.addEventListener("mouseover", () => {
  casestabsDev.classList.toggle("open");
  casestabsDev.style=("transition: .5s ease"); 
});
casestabsDev.addEventListener("mouseover", () => {
  casestabsDev.classList.toggle("show");
});
caseshoverDev.addEventListener("mouseout", () => {
  casestabsDev.classList.remove("open");
  casestabsDev.style=("transition: .5s ease"); 
});
casestabsDev.addEventListener("mouseout", () => {
  casestabsDev.classList.remove("show");
  casestabsDev.style=("transition: .5s ease"); 
});



const spotiFY = document.querySelectorAll(".item__top")
const spot = document.querySelector(".item ul");
spotiFY.forEach((premium) => {
    premium.addEventListener("click", () => {
        premium.nextElementSibling.classList.toggle("open");
        premium.querySelector("i").classList.toggle("open");
        spot.style=("transition:.5s ease");
    })
})




const spotifyDev = document.querySelectorAll(".itemD__top")
const spotDev = document.querySelector(".itemD ul");
spotifyDev.forEach((developers) => {
    developers.addEventListener("click", () => {
        developers.nextElementSibling.classList.toggle("open");
        developers.querySelector("i").classList.toggle("open");
        spotDev.style=("transition:.5s ease");
    })
})

const toggleMenuDev = document.querySelector(".toggle__menuDev");
const headerDev = document.querySelector(".headerDev__tabs2 ul");
toggleMenuDev.addEventListener("click", () => {
  toggleMenuDev.classList.toggle("open");
  headerDev.classList.toggle("open");
});


const spotifyQues = document.querySelectorAll(".itemQ__top")
const spotQues = document.querySelector(".itemQ ul");
spotifyQues.forEach((question) => {
    question.addEventListener("click", () => {
        question.nextElementSibling.classList.toggle("open");
        question.querySelector("i").classList.toggle("open");
        spotQues.style=("transition:.5s ease");
    })
})



const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav ul");
const arJAY = document.querySelector(".arjay");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
  headerNav.style=("z-index:999");
  headerNav.style=("transition:.5s ease");
  arJAY.classList.toggle("show");
});





