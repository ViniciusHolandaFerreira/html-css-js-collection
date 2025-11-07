import { ListaRegistros } from "./Classes.js"


let listaR = new ListaRegistros(atualizarTela)
let form = document.querySelector("#form")
let listReg = document.querySelector("#listaReg")


form.addEventListener("submit", (event) => criarCadastro(event))


function criarCadastro(event){
    event.preventDefault()
    let nome = document.querySelector("#nome").value
    let email = document.querySelector("#email").value
    let idade = document.querySelector("#idade").value
    let tel = document.querySelector("#tel").value
    let cargo = document.querySelector("#cargo").value
    listaR.criarRegistro(nome, idade, email, cargo, tel)
    // notficação de criação
    form.reset()
}


function atualizarTela(registros){
    listReg.innerHTML = ""
    registros.forEach( (reg, id) => {
        let cad = document.createElement("tr")
        cad.id = id 
        cad.innerHTML = `
            <td>N</td>
            <td>${reg.nome}</td>
            <td>${reg.idade}</td>
            <td>${reg.email}</td>
            <td>${reg.tel}</td>
            <td>${reg.cargo}</td>
            <td>
                <button class="btn btn-success"><i class="bi bi-eye"></i></button>
                <button class="btn btn-primary"><i class="bi bi-pencil-square"></i></button>
                <button class="btn btn-danger"><i class="bi bi-trash"></i></button>
            </td>`
        listReg.appendChild(cad)
    })
}
