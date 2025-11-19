
let  ed_api_foto = "https://robohash.org/"
let  ed_api_dados = "https://randomuser.me/api/"

class Robo{
    nome = undefined 
    city = undefined 
    country = undefined
    img_url = undefined
    cor_fundo = undefined

    async gerarImg(){
        try {
            let nAleatorio = Math.floor(Math.random() * 10**15)
            const resposta = await fetch(ed_api_foto+`${nAleatorio}`)
            const dados = resposta 
            this.img_url = dados.url
        } catch (error) {
            console.log("img = ❌❌❌")
            console.log(error)
        }  
    }

    async gerarDados(){
        try {
            const resposta = await fetch(ed_api_dados)
            const dados = await resposta.json()
            this.nome = dados.results[0].name.first
            this.city = dados.results[0].location.city
            this.country = dados.results[0].location.country
        } catch (error) {
            console.log("dados = ❌❌❌")
            console.log(error)
        }
    }


    gerarCorAleatoria(){
        this.cor_fundo = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }
}

export {Robo}

