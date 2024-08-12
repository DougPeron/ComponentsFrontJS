//const para pegar todos os cards
const panels = document.querySelectorAll(".panel");

//capta o evento click, para adicionar a classe active ao card selecionado
panels.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    })
});
//função para remover a classe active
function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove("active")
    });
};