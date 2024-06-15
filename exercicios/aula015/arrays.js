//declarando um array
let num = [5, 8, 4]
console.log(num)

//formas de adicionar um elemento ao array
num[3] = 6
console.log(num)
num.push(7)
console.log(num)
//tamanho do array
console.log(num.length)
//ordenando array
num.sort()
console.log(num)
//exibindo vetor sem colchetes
for (let pos=0;pos<num.length;pos++){
    console.log(`Na posição ${pos} está o valor ${num[pos]}`)
}
console.log("\n")
//for simplificado
for (let i in num){
    console.log(`Na posição${i} está o valor ${num[i]}`)
}
console.log("\n")
//buscando valor no indice do array
console.log(`O número 6 está na posição ${num.indexOf(6)}`)
console.log(num.indexOf(3))