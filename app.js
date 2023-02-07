const shoppingCart = document.querySelector(".shopping-cart");
const shoppingCartBtn = document.querySelector(".shopping-cart-btn");

const menuOverlay = document.querySelector(".menu-overlay");
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

const nextSlide = document.querySelector(".next-slide");
const prevSlide = document.querySelector(".prev-slide");
const slides = document.querySelectorAll(".product-slide");

const productCount = document.querySelector(".product-count");
const productCountPlusBtn = document.querySelector(".product-count-plus-btn");
const productCountMinusBtn = document.querySelector(".product-count-minus-btn");

const addToCartBtn = document.querySelector(".add-to-cart-btn");

let currentSlide = 0;
let maxSlide = slides.length - 1;
let productsInBasket = 0;
let basketEmpty = true;

nextSlide.addEventListener("click", () => {
  currentSlide === maxSlide ? (currentSlide = 0) : currentSlide++;

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
});

prevSlide.addEventListener("click", () => {
  currentSlide <= 0 ? (currentSlide = maxSlide) : currentSlide--;

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
});

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

shoppingCartBtn.addEventListener("click", () => {
  if (basketEmpty) {
  }

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

productCountMinusBtn.addEventListener("click", () => {
  if (productsInBasket === 0) return;
  productsInBasket--;
  productCount.textContent = productsInBasket;
});

productCountPlusBtn.addEventListener("click", () => {
  productsInBasket++;
  productCount.textContent = productsInBasket;
});

addToCartBtn.addEventListener("click", () => {});
