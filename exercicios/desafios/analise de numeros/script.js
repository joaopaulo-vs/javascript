let num = document.querySelector('input#num')
let res = document.querySelector('div#res')
let selectors = document.querySelector('select#seladd')
let lista = []

function addNumber(){
    res.innerHTML = (``)
    if (isNum(num.value) && !inList(num.value, lista)){
        lista.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        selectors.appendChild(item)
    } else {
        alert('Valor inválido ou duplicado.')
    }
}

function isNum(n){
    if (Number(n)<1 || Number(n)>100){
        return false
    } else {
        return true
    }
}

function inList(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


function fim(){
    let maior = Math.max.apply(null, lista)
    let menor = Math.min.apply(null, lista)
    let soma = somaArray(lista)
    res.innerHTML = (`Foram digitados ${lista.length} números <br>`)
    res.innerHTML += (`Maior número digitado é ${maior}<br>`)
    res.innerHTML += (`Menor número digitado é ${menor}<br>`)
    res.innerHTML += (`Soma dos valores é ${soma}<br>`)
    res.innerHTML += (`Média dos valores é ${soma/lista.length}<br>`)
}

function somaArray(l){
    let soma = 0
    for (let i=0; i<l.length; i++){
        soma += l[i]
    }
    return soma
}