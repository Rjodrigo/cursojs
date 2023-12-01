function verificar() {
    var start = document.getElementById('txti');
    var fim = document.getElementById('txtf');
    var passo = document.getElementById('txtp'); 
    var res = document.getElementById('res')   

    if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0 ) {
        res.innerHtml = `Impossivel Contar!`
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
            res.innerHTML = 'Contando ...'    
            var i = Number(start.value)
            var f = Number(fim.value)  //<<<<<<convertendo
            var p = Number(passo.value)
            if (1 < f) {
                //coontagem crescente
            for (let c = i;c <= f; c += p) {
               res.innerHTML += `${c} \u{1F449}` 
            }
           res.innerHTML += `\u{1F3C1}`
        } else {
            //contagem regressiva
          for (let c = i; c >= f; c -= p) {
               res.innerHTML += ` ${c} \u{1F449}` 
           }
      
        }
    }

}
  
