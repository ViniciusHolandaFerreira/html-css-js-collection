import {Robo} from "./robo.js"
import {bankTodos, bankFavoritos} from "./bank.js"

let ultimoRobo = undefined
let btn_gerar = document.querySelector("#btn_gerar")
let btn_favoritar = document.querySelector("#btn_favoritar")

btn_gerar.addEventListener("click", criarRobo)
btn_favoritar.addEventListener("click", favoritarRobo)
window.addEventListener("load", msgInicial)

function msgInicial(){
    Swal.fire({
        title: "Seja bem vindo",
        backdrop: `rgba(0, 0, 0, 0.71)`,
        width: 800,
    });
}

async function criarRobo(){
    let robo = new Robo() // criar o robo
    await robo.gerarDados() // criar dado robo
    await robo.gerarImg() // criar img do robo
    robo.gerarCorAleatoria() // criar um cor 
    //-------------------------------------------------
    bankTodos.push(robo) // salvar todos os gerados
    ultimoRobo = robo
    //-------------------------------------------------
    mostrarRobo(robo) // vai mostrar o robo
    //-------------------------------------------------
}

function favoritarRobo(){
    if(!ultimoRobo){
        Swal.fire({
        title: "Ops!",
        text: "Só é possível salvar robôs que foram criados",
        icon: "warning"
    });
    } else if(ultimoRobo) {
        bankFavoritos.push(ultimoRobo)
        Swal.fire({
            title: "Salvo",
            text: "Robô salvo com sucesso!",
            icon: "success"
        });
    }
}

function mostrarRobo(probo){
    let nome = document.querySelector("#nome")
    let locali = document.querySelector("#locali")
    let img = document.querySelector("#img")
    //-------------------------------------//
    nome.innerHTML = probo.nome 
    locali.innerHTML = `${probo.city} | ${probo.country}`
    img.src = probo.img_url
    //-------------------------------------//
    let body = document.querySelector("body")
    body.style.backgroundColor = probo.cor_fundo
    img.style.borderColor = probo.cor_fundo
}

