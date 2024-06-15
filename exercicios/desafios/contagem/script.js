function contar(){
    //coletando valores do usuario
    let n1 = document.getElementById("inicio").value
    let n2 = document.getElementById("fim").value
    let pass = document.getElementById("passo").value
    let res = document.getElementById("res")
    let lista = []
    //executando contagem
    res.innerHTML = ('Contando')
    for (var i = n1; i<=n2; i+=pass){
        res.innerHTML=(i)
    }
}