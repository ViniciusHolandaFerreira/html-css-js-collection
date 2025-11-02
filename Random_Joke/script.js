
const btn = document.querySelector("#btn")
const endpoint = "https://v2.jokeapi.dev/joke/Any?type=twopart"
btn.addEventListener("click", gerarPiada)

async function gerarPiada(){

    try {
        let resposta = await fetch(endpoint)
        let objeto = await resposta.json()
        let piada_pt_01 = objeto.setup 
        let piada_pt_02 = objeto.delivery
        exibirPiada(piada_pt_01, piada_pt_02)

    } catch (error) {
        console.log("ocorreu algum erro!!!")
        console.log(error)
    }
}

function exibirPiada(pt_01, pt_02){
    let text = document.querySelector("#text")
    text.innerHTML = `${pt_01} </br> ${pt_02}`
}