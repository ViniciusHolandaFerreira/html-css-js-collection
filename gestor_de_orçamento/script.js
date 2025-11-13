

let btn = document.querySelector("#btn")
let historico = document.querySelector("#zone_02_ht")
let ganhos_display = document.querySelector("#ganhos p")
let despesas_display = document.querySelector("#despesas p")
let balanco_display = document.querySelector("#zone_01_balanco")


btn.addEventListener("click", ()=>{
    let input_text = document.querySelector("#text")
    let input_qtd = document.querySelector("#qtd")
    let text = input_text.value
    let qtd = Number(input_qtd.value)
    criarHistorico(text, qtd)
    atualizarValores(text,qtd)
    limparCampos(input_text, input_qtd)
})

function criarHistorico(text,qtd){
    let newTransition = document.createElement("div")
    newTransition.innerHTML = `<h3>${text}</h3><span>${qtd}</span>`
    newTransition.classList.add("card_ht")
    if(qtd > 0){
        newTransition.classList.add("card_ganho")
    } else if(qtd < 0) newTransition.classList.add("card_despesa")
    historico.appendChild(newTransition)
}

function atualizarValores(text,qtd){
    let ganhos = Number(ganhos_display.innerHTML)
    let despesas = Number(despesas_display.innerHTML)
    let balanco = Number(balanco_display.innerHTML)
    if(qtd > 0){
        ganhos += qtd
    } else if(qtd < 0) {
        despesas += Math.abs(qtd)
    } 
    balanco = ganhos - despesas
    ganhos_display.innerHTML = ganhos
    despesas_display.innerHTML = despesas
    balanco_display.innerHTML = balanco
}

function limparCampos(text,qtd){
    text.focus()
    text.value = ""
    qtd.value = ""
}