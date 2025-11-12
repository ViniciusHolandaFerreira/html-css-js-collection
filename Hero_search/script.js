// API -> Superhero-api
let endpoint = "https://akabab.github.io/superhero-api/api/all.json"
let zoneCards = document.querySelector("#content")
let input = document.querySelector("#sea_input")
//-------------------------------------------------------------
window.addEventListener("load", carregarCards)
input.addEventListener("input", (el) => pesquisar(el))
//-------------------------------------------------------------

async function carregarCards() {
  try {
    let resposta = await fetch(endpoint)
    let dados = await resposta.json()
    dados.forEach((heroi) => criar_add_card(heroi))
  } catch (error) {
    console.log("Opsssss")
    console.log(error)
  }
}

function criar_add_card(pdados){
  let newCard = document.createElement("div")
  newCard.classList.add("card")
  newCard.innerHTML = `
    <img src=${pdados.images.lg}></img>
    <h2>${pdados.name}</h2>`
  zoneCards.appendChild(newCard)
}

function formatarPesquisa(ppesquisado){
  return ppesquisado
  .toLowerCase() // tirar as M
  .trim()        // tirar os esp
  .normalize('NFD').replace(/[\u0300-\u036f]/g,'') // acents
}

function pesquisar(el){
  let pesquisado = formatarPesquisa(el.target.value)
  let Elmtitulos = [...document.querySelectorAll("#content h2")]
  Elmtitulos.forEach((el) => {
    let text = formatarPesquisa(el.innerHTML)
    if (text.indexOf(pesquisado) === 0) {
      el.parentElement.style.display = "block"
    } else {el.parentElement.style.display = "none"}
  })
}
















