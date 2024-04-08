const botao = document.querySelector(".btn-plataforma");

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});
const atuliza = document.querySelector(".cabecalho .menu li:nth-child(3)");
atuliza.addEventListener("click", () => {
    alert("Disponivel em uma futura Atualização")
});

const atuliza2 = document.querySelector(".home .informacoes #btn-sobre");
atuliza2.addEventListener("click", () => {
    alert("Disponivel em uma futura Atualização")
});