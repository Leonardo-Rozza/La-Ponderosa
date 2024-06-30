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
