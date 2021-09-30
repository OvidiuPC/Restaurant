const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar-menu")
const scollLeft = document.querySelector(".arrow-left");
const menuImage = document.querySelectorAll(".menu-img");


scollLeft.addEventListener("click", function(){
  menuImage.forEach(function(item){
      item.scrollIntoView()
  })
})


