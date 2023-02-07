const shoppingCart = document.querySelector(".shopping-cart");
const shoppingCartBtn = document.querySelector(".shopping-cart-btn");

shoppingCartBtn.addEventListener("click", () => {
  shoppingCart.classList.toggle("hide");
});
