

export class Registro{
    constructor(pnome, pidade, pemail, pcargo, ptel){
        this.nome = pnome
        this.idade = pidade 
        this.email = pemail 
        this.cargo = pcargo
        this.tel = ptel   
    }
}

export class ListaRegistros{
    constructor(callback){
        this.todosRegistros = []
        this.atualizar = callback
        this.atualizar(this.todosRegistros)
    }

    criarRegistro(fnome, fidade, femail, fcargo, ftel){
        const newRegistro = new Registro(fnome, fidade, femail, fcargo, ftel)
        this.todosRegistros.push(newRegistro)
        // enviar dados BD
        this.atualizar(this.todosRegistros)
    }

    deletarRegistro(id_elm_click){
        this.todosRegistros = this.todosRegistros.filter((el) => el.id != id_elm_click)
        // enviar dados BD
        this.atualizar(this.todosRegistros)
    }

    editarRegistro(id_elm_click, new_dados){
        const registro_edit = this.todosRegistros[id_elm_click]
        Object.assign(registro_edit, new_dados)
        // ---------------------- Ou | Para substituir os campus --------------------
        // for (let campo in new_dados) { registro_edit[campo] = new_dados[campo]; }
        // --------------------------------------------------------------------------
        // enviar dados BD
        this.atualizar(this.todosRegistros)
    }

    setDataFirebase(){

    }

    getDataFirebase(){

    }
}