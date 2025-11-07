import { elementos } from "./library.js"

//==============================================================================================
let password_exib = document.querySelector("#input_box > input")              // display-exibir
let copy = document.querySelector("#copy")                                    // btn - copy
let indicator = document.querySelector(".line")                               // bar segurity
let range = document.querySelector("#range")                                  // btn - range
let range_exibition = document.querySelector("#details_password >span")       // range exibition
let btn_generation = document.querySelector("#btn_generator")                 // btn - gerar 
//==============================================================================================
copy.addEventListener("click", copyPassword)              // criar a função para copiar a senha
range.addEventListener("input", lengthPasswordAtl)        // criar a função para mostrar a seguraça
btn_generation.addEventListener("click", gerarSenha)      // criar a função para gerar a senha
//==============================================================================================

function copyPassword(){
  let senhaExibida = password_exib.value
  navigator.clipboard.writeText(senhaExibida)
}

function lengthPasswordAtl(){
  let rangeEscolhido = range.value
  range_exibition.innerHTML = rangeEscolhido
  let proporcao = range.value*3.33
  indicator.style.width = `${proporcao}%`
  if(rangeEscolhido <= 6){ indicator.style.backgroundColor = "#d62828"
  } else if(rangeEscolhido <=20){ indicator.style.backgroundColor = "#f1c80b"
  } else{ indicator.style.backgroundColor = "#2a9d8f"}
}

function gerarSenha(){
  let senha = ""
  let mistura = ""
  let rangeEscolhido = range.value
  //-------------------------------------------------
  // let spaces = document.querySelector("#spaces")
  // let lower = document.querySelector("#lowercase")
  // let upper = document.querySelector("#uppercase")
  // let numbers = document.querySelector("#numbers")
  // let symbols = document.querySelector("#symbols")
  // let exc_duplicate = document.querySelector("#exc_duplicate")
  // ==================== ou ============================
  let checkeds = document.querySelectorAll('input[type="checkbox"]:checked');
  let exc_duplicate = document.querySelector("#exc_duplicate")
  //-------------------------------------------------
  // if(spaces.checked){ mistura+= elementos.chars_spc} 
  // if(lower.checked){ mistura+= elementos.chars_m} 
  // if(upper.checked){mistura+= elementos.chars_M} 
  // if(numbers.checked){mistura+= elementos.chars_n} 
  // if(symbols.checked){mistura+= elementos.chars_sym} 
  // ==================== ou ============================
  checkeds.forEach((el)=>{
    if(el.id === "lowercase"){mistura+= elementos.chars_m}
    if(el.id === "uppercase"){mistura+= elementos.chars_M}
    if(el.id === "numbers"){mistura+= elementos.chars_n}
    if(el.id === "symbols"){mistura+= elementos.chars_sym}
    if(el.id === "spaces"){mistura+= elementos.chars_spc}
  })
  //-------------------------------------------------
  mistura = mistura.split("")
  //-------------------------------------------------

  if(mistura.length === 0){
    password_exib.value = "Escolha os chekboxs"
  } else if(exc_duplicate.checked && rangeEscolhido > mistura.length){
    password_exib.value = "Reduza a length (-caract)";
  } else{
    for(let i=0; i<rangeEscolhido; i++){
      let char = mistura[Math.floor(Math.random()*mistura.length)]
      if(exc_duplicate.checked){
        if(senha.includes(char)){
          i--
          continue
        }
      }
    senha +=char
    }
    password_exib.value = senha
  } 
  }
  //-------------------------------------------------   


