//fatorial
let fat = function(f){
    let res = f
    for (i=f; i>1; i--){
        res = res*(i-1)
        console.log(i, f, res)
    }
    return res
}
console.log(`O fatorial de 5 é ${fat(7)}`)