// ===============================
// MENU MOBILE
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// ===============================
// SCROLL SUAVE ENTRE SEÇÕES
// ===============================

const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const targetId = this.getAttribute("href");
        const section = document.querySelector(targetId);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        // Fecha menu no mobile após clicar
        nav.classList.remove("active");
    });
});


// ===============================
// HEADER COM EFEITO AO ROLAR
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================

const btnTop = document.createElement("button");
btnTop.innerText = "↑";
btnTop.classList.add("btn-top");

document.body.appendChild(btnTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service_ndq94h4', 'template_3r7qm1j', this)
    .then(() => {
      alert('Mensagem enviada com sucesso!');
      form.reset();
    }, (error) => {
      console.error('Erro:', error);
      alert('Erro ao enviar a mensagem.');
    });
});