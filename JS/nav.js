// Navigation X eflect
function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });
}

navSlide();

// End navigation efect
const navigation = document.querySelector('.header');
const functionalInfo = document.querySelector(".functional-info");
window.addEventListener('scroll',function(){
  console.log(Math.floor(this.scrollY))
  if(scrollY >= 40){
   navigation.style.backgroundColor = "rgb(255, 255, 255)";
   functionalInfo.style.backgroundColor = "rgb(255, 255, 255)";
  }else{
    navigation.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
   functionalInfo.style.backgroundColor = "rgba(255, 255, 255, 0.6)";

  }
})