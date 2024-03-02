let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
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