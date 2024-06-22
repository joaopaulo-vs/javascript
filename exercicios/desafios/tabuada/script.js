function calcTab(){
    let n = document.getElementById('num')
    let res = document.getElementById('seltab')
    res.innerHTML += '<br>'

    if(n.value.length == 0){
        window.alert('Digite um número')
    }else {
        if (num == 0){
            window.alert('Qualquer número multiplicado por 0 é sempre 0! Digite outros valores para ver mais resultados.')
        } else {
            res.innerHTML = ''
            let num = Number(n.value)
            for (let i = 1; i<=10; i++){
                let item = document.createElement('option')
                item.text = `${num} x ${i} = ${num*i}`
                item.value = `res${i}`
                res.appendChild(item)
               // res.innerHTML += (`${num} x ${i} = ${num*i} <br>`)
            }
        }
    }
    
}