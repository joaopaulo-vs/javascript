let amigo = {
    nome: 'Joao',
    sexo: "M",
    peso: 81.1,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
console.log(`${amigo.nome} tem ${amigo.peso} kilos`)
amigo.engordar(3.5)
console.log(`${amigo.nome} agora tem ${amigo.peso}`)