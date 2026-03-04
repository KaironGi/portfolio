//Menu Mobile

//Seleciona o botão Hamburguer
const menuToggle = document.querySelector(".menu-toggle");

//Seleciona a navegação
const nav = document.querySelector("nav");

//Evento de clique para abrir e fechar menu
menuToggle.addEventListener("click", () => {
    //alterna a classe active
    //se existir, remove. Se não existir, adiciona
    nav.classList.toggle("active");
});

//Scroll suave entre seções

//Seleciona todos os links que começam com #
const linksInternos = document.querySelectorAll('a[href^="#"]');

//Para cada link interno
linksInternos.forEach(link => {
    link.addEventListener("click", function (event){
       //Impede pulo brusco
       event.preventDefault();
       
       //Pega o destino do link (Ex: #sobre)
       const targetId = this.getAttribute("href");

       const section = document.querySelector(targetId);

       //Scroll suave até a seção
       section.scrollIntoView({
        behavior:"smooth",
        block: "start"
       });

       //Fecha menu mobile se estiver aberto
       nav.classList.remove("active");
    })
})

//Header com efeito 
const header = document.querySelector("header");

//Evento de scroll da pag
window.addEventListener("scroll", () => {
    //Se a pagina estiver rolada mais de 50px
    if (window.scrollY > 50) {
        //Adiciona classe pra mudar visual
        header.classList.add("scrolled");
    } else {
    //Remove se voltar ao topo
    header.classList.remove("scrolled");
    }
})

//ANIMAÇÂO REVEAL AO APARECER NA TELA

//Seleciona todos elementos que terão animação
const revealElements = document.querySelectorAll(".reveal");

//Cria observer (observador de visibilidade)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        //Se elemento estiver visivel
        if (entry.isIntersecting) {
            //adiciona classe pra animar
            entry.target.classList.add("visible");
        } 
    });
}, {
    threshold: 0.2 // ativa quando 20% do elemento aparece
});

//Aplica o observer em cada elemento
revealElements.forEach(element => {
    observer.observe(element);
});

//Contador animado

//Seleciona elementos com classe counter
const counter = document.querySelectorAll(".counter");

//Função para animar números
counters.forEach(counter => {
    counter.innerText = "0";
})
