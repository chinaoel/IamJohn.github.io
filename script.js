let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide__content");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("slide__content__active");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].classList.add("slide__content__active");
  dots[slideIndex - 1].className += " active";
}

const btnleft = document.querySelector(".slider__btn--left");
const btnright = document.querySelector(".slider__btn--right");
const slides = document.querySelectorAll(".slide");

let curSlide = 0;

let maxSlide = document.querySelectorAll(".slide").length;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

function nextSlide() {
  curSlide += 1;
  if (curSlide === maxSlide) {
    curSlide = 0;
  }
  goToSlide(curSlide);
}

function prevSlide() {
  curSlide -= 1;
  if (curSlide === 0) {
    curSlide = maxSlide;
  }
  goToSlide(curSlide);
}
//btnright.addEventListener("click", nextSlide);
//btnleft.addEventListener("click", prevSlide);

// Internship button
const buttonContainer = document.getElementById("button__container");
const buttons = document.querySelectorAll(".button");
const contents = document.querySelectorAll(".slide__content");

buttonContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".button");

  // other part of buttonContainer
  if (!clicked) {
    return;
  }

  console.log(buttons);
  buttons.forEach((button) => {
    button.classList.remove("button-active");
  });
  contents.forEach((content) => {
    content.classList.remove("slide__content__active");
  });

  clicked.classList.add("button-active");
  const clickedIndex = clicked.dataset.tab;
  console.log(clickedIndex);
  document
    .querySelector(`.slide__content-${clickedIndex}`)
    .classList.add("slide__content__active");
});

// Smooth Slide to specified tag

const menuList = document.querySelector("nav ul");
menuList.addEventListener("click", (e) => {
  e.preventDefault();
  const clicked = e.target.closest("a");
  if (!clicked) {
    return;
  }
  const id = clicked.getAttribute("href");
  console.log(id);
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

// Text shown sequentially
document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("sequence");
  const textToType = "Hello World 👋 I'm John Huang."; // Put your text here
  let index = 0;

  function type() {
    if (index < textToType.length) {
      textElement.textContent += textToType[index];
      index++;
      setTimeout(type, 100); // Adjust the typing speed here (milliseconds)
    }
  }

  type();
});
