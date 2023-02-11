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
const productThumbnailBtns = document.querySelectorAll(
  ".product-thumbnail-btn"
);

const productCount = document.querySelector(".product-count");
const productCountPlusBtn = document.querySelector(".product-count-plus-btn");
const productCountMinusBtn = document.querySelector(".product-count-minus-btn");

const totalPrice = document.querySelector(".total-price");
const itemsInBasket = document.querySelector(".items-in-basket");
const clearBasketBtn = document.querySelector(".clear-basket-btn");
const itemsInBasketCount = document.querySelector(".items-in-basket-count");
const addToCartBtn = document.querySelector(".add-to-cart-btn");

const lightboxNextSlideBtn = document.querySelector(".lightbox-next-slide-btn");
const lightboxPrevSlideBtn = document.querySelector(".lightbox-prev-slide-btn");
const lightboxSlides = document.querySelectorAll(".lightbox-slide");
const lightboxOverlay = document.querySelector(".lightbox-overlay");
const closeLightboxBtn = document.querySelector(".close-lightbox-btn");
const lightboxThumbnails = document.querySelectorAll(".thumbnail-overlay");

const price = 125;
let currentSlide = 0;
let maxSlide = slides.length - 1;
let productsInBasket = 0;
let basketEmpty = true;
let currentLightboxSlide = 0;

// Product Slider
const setSlides = () => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`;
  });

  currentSlide = 0;

  productThumbnailBtns.forEach((btn) => btn.classList.remove("active"));
  productThumbnailBtns[currentSlide].classList.add("active");
};

window.addEventListener("DOMContentLoaded", setSlides);

nextSlide.addEventListener("click", () => {
  currentSlide === maxSlide ? (currentSlide = 0) : currentSlide++;

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });

  productThumbnailBtns.forEach((btn) => btn.classList.remove("active"));
  productThumbnailBtns[currentSlide].classList.add("active");
});

prevSlide.addEventListener("click", () => {
  currentSlide <= 0 ? (currentSlide = maxSlide) : currentSlide--;

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });

  productThumbnailBtns.forEach((btn) => btn.classList.remove("active"));
  productThumbnailBtns[currentSlide].classList.add("active");
});

const showSlide = (btnIndex) => {
  currentSlide = btnIndex;

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });

  productThumbnailBtns.forEach((btn) => btn.classList.remove("active"));
  productThumbnailBtns[currentSlide].classList.add("active");
};

productThumbnailBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => showSlide(index));
});

// Lightbox Slider
slides.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    currentLightboxSlide = index;

    lightboxSlides.forEach((s) => s.classList.remove("active"));
    lightboxSlides[currentLightboxSlide].classList.add("active");

    lightboxThumbnails.forEach((t) => t.classList.remove("active"));
    lightboxThumbnails[currentLightboxSlide].classList.add("active");

    lightboxOverlay.classList.remove("hide");
  });
});

lightboxNextSlideBtn.addEventListener("click", () => {
  if (currentLightboxSlide === maxSlide) currentLightboxSlide = 0;
  else currentLightboxSlide++;

  lightboxSlides.forEach((s) => s.classList.remove("active"));
  lightboxSlides[currentLightboxSlide].classList.add("active");

  lightboxThumbnails.forEach((t) => t.classList.remove("active"));
  lightboxThumbnails[currentLightboxSlide].classList.add("active");
});

lightboxPrevSlideBtn.addEventListener("click", () => {
  if (currentLightboxSlide === 0) currentLightboxSlide = maxSlide;
  else currentLightboxSlide--;

  lightboxSlides.forEach((s) => s.classList.remove("active"));
  lightboxSlides[currentLightboxSlide].classList.add("active");

  lightboxThumbnails.forEach((t) => t.classList.remove("active"));
  lightboxThumbnails[currentLightboxSlide].classList.add("active");
});

lightboxThumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    currentLightboxSlide = index;

    lightboxSlides.forEach((s) => s.classList.remove("active"));
    lightboxSlides[currentLightboxSlide].classList.add("active");

    lightboxThumbnails.forEach((t) => t.classList.remove("active"));
    lightboxThumbnails[currentLightboxSlide].classList.add("active");
  });
});

closeLightboxBtn.addEventListener("click", () => {
  lightboxOverlay.classList.add("hide");
});

// Menu And Shopping Cart
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
