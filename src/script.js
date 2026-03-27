/* ===== Download CV ===== */
document.getElementById("download-cv").addEventListener("click", function () {
  window.location.href = "./src/assets/doc/Luis_Henrique_Desenvolvedor_Junior.pdf";
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

/* ===== Formulario Contato WhatsApp ===== */
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    
    // Constrói a mensagem formatada para o WhatsApp
    const whatsappMessage = `Olá! Meu nome é ${name}.\nMeu e-mail é: ${email}\n\nMensagem:\n${message}`;
    
    // Número atualizado conforme o HTML
    const phoneNumber = "5519988081357";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Redireciona o usuário (abrindo em nova aba)
    window.open(whatsappUrl, "_blank");
    
    // Limpa o formulário após enviar o clique
    contactForm.reset();
  });
}
