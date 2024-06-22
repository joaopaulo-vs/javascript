function contar(){
    //coletando valores do usuario
    let n1 = document.getElementById("inicio").value
    let n2 = document.getElementById("fim").value
    let pass = document.getElementById("passo").value
    let res = document.getElementById("res")
    let listatest = [n1, n2, pass]
    //executando contagem

    if (n1.length == 0 || n2.length == 0 || pass.length == 0){
        res.innerHTML += ('Impossivel contar')
        window.alert('Digite os valores para continuar!!')
        
    } else {
        res.innerHTML=('Contando: <br>')
    //convertendo dados em números
        let i=Number(n1)
        let end = Number (n2)
        let passo = Number(pass)

        if (passo<=0){
            window.alert('[ERRO]. Campo "PASSO" inválido')
        } else {
            //contando do menor para o maior
            if (end>i){
                for (let c = i; c<=end; c+=passo){
                    res.innerHTML+= `${c} ⇨ `
                }
            //contando do maior para o menor
            } else if (end<i){
                for (let c = i; c>=end; c-=passo){
                    res.innerHTML+= `${c} ⇨ `
                }
            //caso os dados forem iguais
            } else {
                res.innerHTML+=(`${i} ⇨ ${end}`)
            }
        }
    }

    
}