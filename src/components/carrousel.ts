/*
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
*/

// carousel.ts
export interface CarouselOptions {
  nextButton: HTMLButtonElement;
  prevButton: HTMLButtonElement;
  slides: HTMLElement[];
  interval?: number; // Tiempo entre los cambios automáticos de diapositiva (en milisegundos)
}

export function setupCarousel({
  nextButton,
  prevButton,
  slides,
  interval = 3000, // Valor por defecto de 3 segundos
}: CarouselOptions) {
  let currentSlide = 0;

  const changeSlide = (direction: "next" | "prev") => {
    slides[currentSlide].classList.remove("active");
    if (direction === "next") {
      currentSlide = (currentSlide + 1) % slides.length; // Usa módulo para ciclar
    } else {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Ajusta para negativo
    }
    slides[currentSlide].classList.add("active");
  };

  // Evento de clic para cambiar a la siguiente diapositiva
  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    changeSlide("next");
  });

  // Evento de clic para cambiar a la diapositiva anterior
  prevButton.addEventListener("click", (e) => {
    e.preventDefault();
    changeSlide("prev");
  });

  // Intervalo para cambio automático de diapositiva
  const autoChange = setInterval(() => {
    changeSlide("next");
  }, interval);

  // Función para detener el carrusel (útil para pruebas)
  const stopCarousel = () => {
    clearInterval(autoChange);
  };

  // Inicializa mostrando la siguiente diapositiva
  changeSlide("next");

  return {
    changeSlide,
    stopCarousel, // Exporta para que sea fácil de detener en pruebas
  };
}


