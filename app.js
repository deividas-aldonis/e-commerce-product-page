const shoppingCart = document.querySelector(".shopping-cart");
const shoppingCartBtn = document.querySelector(".shopping-cart-btn");

const menuOverlay = document.querySelector(".menu-overlay");
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

shoppingCartBtn.addEventListener("click", () => {
  shoppingCart.classList.toggle("hide");
});

closeMenuBtn.addEventListener("click", () => {
  menuOverlay.classList.add("hide");
  menu.classList.add("hide");
});

openMenuBtn.addEventListener("click", () => {
  menuOverlay.classList.remove("hide");
  menu.classList.remove("hide");
});
