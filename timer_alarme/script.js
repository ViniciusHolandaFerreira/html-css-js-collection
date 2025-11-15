    let output_data = document.querySelector("#output_data")
    let output_relogio = document.querySelector("#output_relogio")
    let btn_ativar = document.querySelector("#btn_ativar")
    let btn_parar = document.querySelector("#btn_parar")
    let hora_alarme = document.querySelector("#hora_alarme")
    let tmp_alarme = document.querySelector("#tmp_alarme")

    let ts_atual = null
    let ts_alarme = null
    let alarme_tocando = false
    let alarme_ativado = false

    btn_ativar.addEventListener("click", ativarAlarme)
    function ativarAlarme(){
      alarme_tocando = false
      alarme_ativado = true
      let data = new Date()
      ts_atual = data.getTime()
      ts_alarme = ts_atual+(tmp_alarme.value*1000)
      let alarme = new Date(ts_alarme)
      let horas = alarme.getHours()<10 ? `0`+alarme.getHours() : alarme.getHours()
      let minutos = alarme.getMinutes()<10 ? `0`+alarme.getMinutes() : alarme.getMinutes()
      let segundos = alarme.getSeconds()<10 ? `0`+alarme.getSeconds() : alarme.getSeconds()
      hora_alarme.innerHTML = `${horas}:${minutos}:${segundos}`
    }

    btn_parar.addEventListener("click", pararAlarme)
    function pararAlarme(){
      alarme_tocando = false
      alarme_ativado = false
      hora_alarme.innerHTML = ""
      tmp_alarme.value = ""
      tmp_alarme.focus()
      output_relogio.classList.remove("alarme_tocando")
    }

    function data_atual(){
      let data = new Date()
      data = data.toLocaleDateString()
      output_data.innerHTML = `${data}`
    }
    
    function relogio(){
      let data = new Date()
      let horas = data.getHours()<10 ? `0`+data.getHours() : data.getHours()
      let minutos = data.getMinutes()<10 ? `0`+data.getMinutes() : data.getMinutes()
      let segundos = data.getSeconds()<10 ? `0`+data.getSeconds() : data.getSeconds()
      output_relogio.innerHTML = `${horas}:${minutos}:${segundos}`

      if(alarme_ativado === true && alarme_tocando === false){
        if(data.getTime() >= ts_alarme){
          output_relogio.classList.add("alarme_tocando")
        }
      }
      return data
    }

    data_atual()
    setInterval(()=>{
      relogio()
    }, 1000)

