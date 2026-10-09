
const menuButton = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

// Abrir y cerrar el menú móvil
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");

    const abierto = nav.classList.contains("open");
    menuButton.textContent = abierto ? "✕" : "☰";
    menuButton.setAttribute("aria-expanded", String(abierto));
    menuButton.setAttribute(
      "aria-label",
      abierto ? "Cerrar menú" : "Abrir menú"
    );
  });

  // Cerrar el menú al seleccionar una sección
  nav.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.textContent = "☰";
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

// Mostrar el año actual automáticamente
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Animaciones de entrada para las tarjetas
const elementos = document.querySelectorAll(
  ".feature, .tech-row, .contact-card"
);

if ("IntersectionObserver" in window) {
  const observador = new IntersectionObserver((entradas, observer) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        observer.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15 });

  elementos.forEach((elemento) => {
    elemento.classList.add("reveal");
    observador.observe(elemento);
  });
}