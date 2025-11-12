
let ia = document.querySelector("#input-amount")
let cf = document.querySelector("#currency-from")
let ct = document.querySelector("#currency-to")
let conversion_result = document.querySelector("#conversion-result")
let btn_convert = document.querySelector("#btn-convert")
let btn_reverse = document.querySelector("#btn_reverse")
btn_convert.addEventListener("click", convert)
btn_reverse.addEventListener("click", inverter)

async function convert(){
    let input_amount = ia.value
    let currency_from = cf.value
    let currency_to = ct.value
    let endp = `https://v6.exchangerate-api.com/v6/0b0f008b69d7d2c1ed40576b/latest/${currency_from}`
    if(input_amount && input_amount > 0){
        try {
            let resposta = await fetch(endp)
            let dados = await resposta.json()
            if(!dados.conversion_rates[currency_to]){
                throw new Error("Moeda não encontrada")
            } else {
                let dado_esp = ((dados.conversion_rates[currency_to])*input_amount).toFixed(2)
                exibirSaida(input_amount,currency_from,dado_esp,currency_to)
            }
        } catch (error) {
            console.log(`error: ${error}`)
            conversion_result.innerHTML = "Erro ao acessar a API."
        } finally{
            ia.value = ""
            ia.focus()  
        }
    } else {
        conversion_result.innerHTML = "Valor Inválido"
    }

}

function exibirSaida(qtd,de,result,para){
    conversion_result.innerHTML = `${qtd} ${de} = ${result} ${para}`
}

function inverter(){
    const temp = cf.value;
    cf.value = ct.value;
    ct.value = temp;
}







