const shoppingCart = document.querySelector(".shopping-cart");
const shoppingCartBtn = document.querySelector(".shopping-cart-btn");
const shoppingCartItem = document.querySelector(".shopping-cart-item");
const checkoutBtn = document.querySelector(".shopping-cart-checkout-btn");
const emptyCartMessage = document.querySelector(".empty-cart");

const menuOverlay = document.querySelector(".menu-overlay");
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

const nextSlide = document.querySelector(".next-slide");
const prevSlide = document.querySelector(".prev-slide");
const slider = document.querySelector(".product-slider");
const slides = document.querySelectorAll(".product-slide");

const productCount = document.querySelector(".product-count");
const productCountPlusBtn = document.querySelector(".product-count-plus-btn");
const productCountMinusBtn = document.querySelector(".product-count-minus-btn");

const totalPrice = document.querySelector(".total-price");
const itemsInBasket = document.querySelector(".items-in-basket");
const clearBasketBtn = document.querySelector(".clear-basket-btn");
const itemsInBasketCount = document.querySelector(".items-in-basket-count");

const addToCartBtn = document.querySelector(".add-to-cart-btn");

const price = 125;
let currentSlide = 0;
let maxSlide;
let productsInBasket = 0;
let basketEmpty = true;

slides[slides.length - 1].addEventListener(
  "transitionend",
  () => {
    slider.classList.remove("hide");
  },
  {
    once: true,
  }
);



const setSlides = () => {
  if (window.innerWidth >= 425 && window.innerWidth < 768) {
    maxSlide = slides.length - 2;
  } else {
    maxSlide = slides.length - 1;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`;
  });
};

window.addEventListener("DOMContentLoaded", setSlides);
window.addEventListener("resize", setSlides);

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

shoppingCartBtn.addEventListener("click", () => {
  if (basketEmpty) {
    emptyCartMessage.classList.remove("hide");
    shoppingCartItem.classList.add("hide");
    checkoutBtn.classList.add("hide");
  } else {
    emptyCartMessage.classList.add("hide");
    shoppingCartItem.classList.remove("hide");
    checkoutBtn.classList.remove("hide");
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

addToCartBtn.addEventListener("click", () => {
  productsInBasket > 0 ? (basketEmpty = false) : (basketEmpty = true);

  const total = price * productsInBasket;

  totalPrice.textContent = total;
  itemsInBasket.textContent = productsInBasket;

  if (basketEmpty) {
    itemsInBasketCount.classList.add("hide");
    emptyCartMessage.classList.remove("hide");
    shoppingCartItem.classList.add("hide");
    checkoutBtn.classList.add("hide");
  } else {
    itemsInBasketCount.classList.remove("hide");
    itemsInBasketCount.textContent = productsInBasket;
    emptyCartMessage.classList.add("hide");
    shoppingCartItem.classList.remove("hide");
    checkoutBtn.classList.remove("hide");
  }
});

clearBasketBtn.addEventListener("click", () => {
  basketEmpty = true;

  productsInBasket = 0;
  productCount.textContent = productsInBasket;

  itemsInBasketCount.classList.add("hide");
  emptyCartMessage.classList.remove("hide");
  shoppingCartItem.classList.add("hide");
  checkoutBtn.classList.add("hide");
});
