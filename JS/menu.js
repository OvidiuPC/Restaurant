
const left = document.querySelector(".arrow-left");
const right = document.querySelector(".arrow-right")
const sidebar = document.querySelector(".sidebar-menu");
//set event for btns
left.addEventListener("click", function () {
  sidebar.scrollLeft += 100;
});
right.addEventListener("click",function(){
  sidebar.scrollLeft -= 100;
})

