import { setupCarousel } from "./carrousel";

document.addEventListener("DOMContentLoaded", () => {

  //Carrousel
  const nextBtn = document.querySelector<HTMLButtonElement>(".next-btn");
  const prevBtn = document.querySelector<HTMLButtonElement>(".prev-btn");
  const slides = Array.from(
    document.querySelectorAll<HTMLElement>(".slider-slides .slider-slide")
  );

  if (nextBtn && prevBtn && slides.length > 0) {
    // Configura el carrusel con los elementos del DOM
    setupCarousel({
      nextButton: nextBtn,
      prevButton: prevBtn,
      slides: slides,
    });
  }
});
