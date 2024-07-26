// ****************************Carousel****************************************
document.addEventListener("DOMContentLoaded", () => {
  const $nextBtn = document.querySelector<HTMLButtonElement>(".next-btn");
  const $prevBtn = document.querySelector<HTMLButtonElement>(".prev-btn");
  const $slides = document.querySelectorAll<HTMLElement>(
    ".slider-slides .slider-slide"
  );
  let currentSlide = 0;

  const changeSlide = (direction: "next" | "prev") => {
    $slides[currentSlide].classList.remove("active");
    if (direction === "next") {
      currentSlide++;
      if (currentSlide >= $slides.length) currentSlide = 0;
    } else {
      currentSlide--;
      if (currentSlide < 0) currentSlide = $slides.length - 1;
    }
    $slides[currentSlide].classList.add("active");
  };

  document.addEventListener("click", (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target === $nextBtn) {
      e.preventDefault();
      changeSlide("next");
    }
    if (target === $prevBtn) {
      e.preventDefault();
      changeSlide("prev");
    }
  });


  setInterval(() => {
    changeSlide("next");
  }, 3000);


  changeSlide("next");
});

// ****************************Menu****************************************

const $menuBtn = document.querySelector<HTMLButtonElement>(".menu-btn");
const $menu = document.querySelector<HTMLElement>(".menu");

const $firstChild = $menuBtn?.firstElementChild as HTMLElement | null;
const $lastChild = $menuBtn?.lastElementChild as HTMLElement | null;

$menuBtn?.addEventListener("click", (e: MouseEvent) => {
  $firstChild?.classList.toggle("none");
  $lastChild?.classList.toggle("none");
  $menu?.classList.toggle("is-active");
});

document.addEventListener("click", (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  if (!target.matches(".menu a")) return;

  $firstChild?.classList.remove("none");
  $lastChild?.classList.add("none");
  $menu?.classList.remove("is-active");
});
