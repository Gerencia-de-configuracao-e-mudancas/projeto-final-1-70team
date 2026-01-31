document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".page");
  const links = document.querySelectorAll("a[href]");

  links.forEach(link => {
    // ignora links externos
    if (link.target === "_blank") return;

    link.addEventListener("click", e => {
      e.preventDefault();

      const destino = link.href;

      // anima saída
      page.classList.remove("slide-in");
      page.classList.add("slide-out");

      // espera a animação terminar
      setTimeout(() => {
        window.location.href = destino;
      }, 500);
    });
  });
});
