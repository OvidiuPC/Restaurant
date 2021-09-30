const menuProduct = [
  {
    id: 1,
    category: "pizza",
    img: "https://bit.ly/3AXu6uf",
    title: "Neapolitan Pizza",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 7.99,
    oldPrice: 10.99,
  },
  {
    id: 2,
    category: "pizza",
    img: "https://bit.ly/3F4KY4R",
    title: "Chicago Pizza",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 11.99,
    oldPrice: 15.99,
  },
  {
    id: 3,
    category: "pizza",
    img: "https://bit.ly/3mbQaLx",
    title: "California Pizza",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 6.99,
    oldPrice: null,
  },
  {
    id: 4,
    category: "pizza",
    img: "https://bit.ly/3F4KY4R",
    title: "Pizza Diavola",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 11.99,
    oldPrice: 15.99,
  },
  {
    id: 5,
    category: "pizza",
    img: "https://bit.ly/3F4KY4R",
    title: "Pizza Diavola",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 11.99,
    oldPrice: 15.99,
  },
  {
    id: 6,
    category: "pizza",
    img: "https://bit.ly/3F4KY4R",
    title: "Pizza Diavola",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 11.99,
    oldPrice: 15.99,
  },
  {
    id: 7,
    category: "pizza",
    img: "https://bit.ly/3F4KY4R",
    title: "Pizza Diavola",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 11.99,
    oldPrice: 15.99,
  },
  {
    id: 8,
    category: "pizza",
    img: "https://bit.ly/3F4KY4R",
    title: "Pizza Diavola",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 11.99,
    oldPrice: 15.99,
  },
  {
    id: 9,
    category: "pizza",
    img: "https://bit.ly/3F4KY4R",
    title: "Pizza Diavola",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 11.99,
    oldPrice: 15.99,
  },
  {
    id: 10,
    category: "pizza",
    img: "https://bit.ly/3F4KY4R",
    title: "Pizza Diavola",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 11.99,
    oldPrice: 15.99,
  },
  {
    id: 11,
    category: "grill",
    img: "https://bit.ly/3F4KY4R",
    title: "Grill",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 11.99,
    oldPrice: 15.99,
  },
  {
    id: 12,
    category: "grill",
    img: "https://bit.ly/3F4KY4R",
    title: "Grill",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 11.99,
    oldPrice: 15.99,
  },
  {
    id: 13,
    category: "grill",
    img: "https://bit.ly/3F4KY4R",
    title: "Grill",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 11.99,
    oldPrice: 15.99,
  },
  {
    id: 14,
    category: "grill",
    img: "https://bit.ly/3F4KY4R",
    title: "Grill",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 11.99,
    oldPrice: 15.99,
  },
  {
    id: 15,
    category: "salads",
    img: "https://bit.ly/3F4KY4R",
    title: "Salads",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 11.99,
    oldPrice: 15.99,
  },
  {
    id: 16,
    category: "salads",
    img: "https://bit.ly/3F4KY4R",
    title: "Salads",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 11.99,
    oldPrice: 15.99,
  },
  {
    id: 17,
    category: "dessert",
    img: "https://bit.ly/3F4KY4R",
    title: "Dessert",
    ingredient:
      "Flour,Salt,Mozzarella,Water,Olive oil,Salami,Basil,Tomato sauce",
    weight: "450g",
    currentPrice: 11.99,
    oldPrice: 15.99,
  },
];

const menuContent = document.querySelector(".menu-content");
const menuBtns = document.querySelectorAll('.filter-btn');


//loaded items on html
window.addEventListener("DOMContentLoaded", function () {
  displayMenu(menuProduct)
});

//btns
menuBtns.forEach(function(btn){
  btn.addEventListener('click', function(e){
    const category = e.currentTarget.dataset.id;
    const menuCategory = menuProduct.filter(function(menuItem){
      if(menuItem.category === category){
        return menuItem
      }
    });
    if(category ===''){
      displayMenu(menuProduct)
    }else{
      displayMenu(menuCategory)
    }
  });
});

//display menu
function displayMenu(menuItem){
let showMenu = menuItem.map(function (product) {
  return `<div class="product-card">
      <div class="product-img">
       <img class="product-image" src="${product.img}" alt="${product.title}" title ="${product.title}">
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-ingredient">${product.ingredient}</p>
        <p class="product-weight">${product.weight}</p>
        <p class="product-price">
        <span class="current-price">${product.currentPrice}</span>
         <del><span class="old-price">${product.oldPrice}</span></del>$</p>
      </div>
       
    </div>`;
});
showMenu = showMenu.join("");
menuContent.innerHTML = showMenu;
}

