/* ===== Download CV ===== */
document.getElementById("download-cv").addEventListener("click", function () {
  window.location.href = "./src/assets/doc/Curriculo_DW_v1.pdf";
});

/* ===== Menu Hambúrguer ===== */
(function () {
  const hamburger = document.getElementById("nav-hamburger");
  const menu = document.getElementById("nav-menu");
  const overlay = document.getElementById("nav-overlay");

  function openMenu() {
    menu.classList.add("nav__menu--open");
    hamburger.classList.add("nav__hamburger--open");
    overlay.classList.add("nav__overlay--visible");
    hamburger.setAttribute("aria-expanded", "true");
    hamburger.setAttribute("aria-label", "Fechar menu");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    menu.classList.remove("nav__menu--open");
    hamburger.classList.remove("nav__hamburger--open");
    overlay.classList.remove("nav__overlay--visible");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Abrir menu");
    document.body.style.overflow = "";
  }

  // Toggle ao clicar no botão
  hamburger.addEventListener("click", function () {
    const isOpen = menu.classList.contains("nav__menu--open");
    isOpen ? closeMenu() : openMenu();
  });

  // Fechar ao clicar no overlay
  overlay.addEventListener("click", closeMenu);

  // Fechar ao clicar em um link do menu (scroll para seção)
  menu.querySelectorAll(".nav__link").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // Fechar com ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  // Fechar ao redimensionar para desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 900) closeMenu();
  });
})();
