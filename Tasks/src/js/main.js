import { ListaTarefas } from "./Classes.js"

const btn_add = document.querySelector("#add_item")
const input = document.querySelector("#zone_input")
const listContainer = document.querySelector("#zone_items")

// Instancia a lista e sincroniza os dados da Firebase
const lista = new ListaTarefas(atualizarExibicao)
lista.sincronizarTarefas()

// add terefa ao click
btn_add.addEventListener("click", () => {
    if(!input.value.trim()) return
    lista.criarTarefa(input.value)
    input.value = ""
    input.focus()
})

// deletar tarefa ao click
listContainer.addEventListener("click", (el) => {
    if(el.target.classList.contains("task")){
        lista.deletarTarefa(el.target.id)
    }
})

// atulizar a lista de tarefas
function atualizarExibicao(tarefas){
    listContainer.innerHTML = ""
    tarefas.forEach(({id, nome}) => {
        const li = document.createElement("li")
        li.id = id 
        li.classList.add("task")
        li.textContent = nome
        listContainer.appendChild(li)
    })
}







