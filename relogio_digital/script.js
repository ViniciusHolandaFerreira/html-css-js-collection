let container_timer = document.querySelector("#container_timer")

function timer(){
  let date = new Date()
  let hours = date.getHours()<10 ? `0`+date.getHours(): date.getHours()
  let minutes = date.getMinutes()<10 ? `0`+date.getMinutes(): date.getMinutes()
  let seconds = date.getSeconds()<10 ? `0`+date.getSeconds(): date.getSeconds()
  let miliseconds = date.getMilliseconds()<10 ? `0`+date.getMilliseconds(): date.getMilliseconds()
  container_timer.innerHTML = `${hours} : ${minutes} : ${seconds} : ${miliseconds}`
}

setInterval(()=>{
  timer()
  }, 1000)



