
let btn_open = document.querySelector("#btn_open")
let container = document.querySelector("#container")
btn_open.addEventListener("click", abrirPopup)
container.addEventListener("click", fecharPopup)

function abrirPopup(){
    let popup = document.querySelector("#popup")
    popup.style.display = "block"

}

function fecharPopup(el){
    if(el.target.id === "btn_close"){
        el.target.parentNode.style.display = "none"
    }
}