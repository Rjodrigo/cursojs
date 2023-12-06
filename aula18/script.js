let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    } 
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) !== -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {  
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado.`
        lista.appendChild(item) 
        res.innerHTML = ''  
    } else {
        window.alert('Valor inválido ou ja encontrado na lista.')
    }
    num.value = '' //este trecho de código apaga o numero inserido na tabela após apertar "ENTER"
    num.focus() 
}

function finalizar () {
    if (valores.length === 0) { //Esta linha verifica se o array valores está vazio. 
        window.alert('adicione valores antes de finalizar.') //O operador === verifica a igualdade estrita, garantindo que o comprimento seja zero. 
    } else {
        let tot = valores.length   
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]    
        }
        media = soma / tot
        res.innerHTML = ''   
        res.innerHTML += `<p> Ao todo, temos ${tot} número(s) cadastrado(s).</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</P>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>` 
    }// a função finalizar verifica se há valores no array valores e, dependendo disso, exibe uma mensagem de alerta ou atualiza o conteúdo HTML para indicar quantos números foram cadastrados.
}
