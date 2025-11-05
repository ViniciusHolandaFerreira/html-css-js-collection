import { adicionarDado, observarDados, deletarDado } from "./firebase.js"

// Classe Tarefa
export class Tarefa{
    constructor(pnome){
        this.nome = pnome.trim()
    }
}

// Classe ListaTarefas
export class ListaTarefas{
    constructor(callback){
        this.tarefas = []
        this.onUpdate = callback
    }

    async criarTarefa(nome){
        if(!nome) return
        const nw_tarefa = new Tarefa(nome)
        await adicionarDado("tarefas", nw_tarefa)
    }

    async deletarTarefa(id){
        await deletarDado("tarefas", id)
    }

    sincronizarTarefas(){
        observarDados("tarefas", dados => {
            this.tarefas = dados 
                ? Object.entries(dados).map(([id, tarefa]) => ({ id, ...tarefa }))
                : [];
            // atualizar exibição
            if(this.onUpdate){
                this.onUpdate(this.tarefas)
            }
        })
    }

}





