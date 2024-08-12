//capta classes para serem tratadas nos scrpts
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

//adiciona a ação click no botão para executar a função de adicionar e remover classe
btn.addEventListener('click', () =>{
    search.classList.toggle('active');
    input.focus()
})