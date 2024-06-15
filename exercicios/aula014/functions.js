//par ou ímpar
function parimp(n){
    if (n%2==0){
        return 'par'
    } else {
        return 'ímpar'
    }
}
let res = parimp(3)
console.log(res)

//função dentro de uma variável
let v = function(x){
    return x*3
}
console.log(v(6))

