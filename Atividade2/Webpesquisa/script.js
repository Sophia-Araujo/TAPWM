// Menu responsivo
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Animação do botão
const apoioBtn = document.querySelector('#apoio-btn');

apoioBtn.addEventListener('click', () => {

    setTimeout(() => {
        apoioBtn.innerText = "Sucesso! Vamos te ajudar 🚀";
        apoioBtn.style.background = "#4CAF50";
    },);
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".buttons button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert(`Você clicou em: ${button.textContent}`);
        });
    });
});
