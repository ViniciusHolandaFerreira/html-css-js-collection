
let values = [...document.querySelectorAll(".card h2")]
let interval = 5000

values.forEach((el) =>{
  let current = 0
  let valorImplemt = parseInt(el.getAttribute("value"))
  let temp = Math.floor(valorImplemt/ interval)
  //--------------------------------------------------
  let counter = setInterval(()=>{
    current++
    el.innerHTML = current
    if(current >= valorImplemt){
      clearInterval(counter)
    }
  },temp)
  //--------------------------------------------------
})













