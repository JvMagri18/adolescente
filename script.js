function toggleTexto(id) {
  const texto = document.getElementById(id);
  texto.classList.toggle('mostrar');
}

const menuBtn = document.getElementById('menu-hamburguer');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('aberto');
});

// Fecha o menu ao clicar em qualquer link
const links = navLinks.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('aberto');
  });
});
