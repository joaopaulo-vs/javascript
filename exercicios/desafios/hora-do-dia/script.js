function carregar(){
    var now = new Date()
    var hora = 19//now.getHours()
    var box = document.querySelector("div#text")
    var image = document.getElementById("image")
    box.innerHTML = (`Agora são ${hora} horas.`)
    if (hora > 5 && hora < 10){
        image.src = 'imagens/amanhecer.jpeg'
        //image.style.backgroundImage = "url('imagens/amanhecer.jpeg')"
        document.body.style.backgroundImage = "linear-gradient(to bottom, #908EA3,#E0C2B6, #F0D46C)"
    } else if (hora >= 10 && hora < 17){
        image.src = 'imagens/dia-ensolarado.jpg'
        document.body.style.backgroundImage = "linear-gradient(to bottom, #4873AE,#6bceff)"
    } else if (hora >= 17 && hora < 19){
        image.src = 'imagens/entardecer.jpg'
        document.body.style.backgroundImage = "linear-gradient(to bottom, #E07E27,#ffb951)"
    } else {
        document.body.style.backgroundImage = "linear-gradient(to bottom,#000069,#0240b2)"
        image.src = 'imagens/noite.jpeg'
    }
}