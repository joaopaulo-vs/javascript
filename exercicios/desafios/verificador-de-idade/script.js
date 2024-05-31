function ler(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var image = document.createElement('img')
        image.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gen = 'Homem'
            if (idade >= 0 && idade < 3){
                image.setAttribute('src', 'imagens/baby-homem.jpg')
            }
            if (idade >= 3 && idade < 12){
                image.setAttribute('src', 'imagens/homem-12-anos.jpg')
            }
            if (idade >= 12 && idade < 19){
                image.setAttribute('src', 'imagens/homem-18-anos.jpg')
            }
            if (idade >= 19 && idade < 25){
                image.setAttribute('src', 'imagens/homem-25-anos.jpg')
            }
            if (idade >= 25 && idade < 40){
                image.setAttribute('src', 'imagens/homem-35-anos.jpg')
            }
            if (idade >= 40 && idade < 55){
                image.setAttribute('src', 'imagens/homem-45-anos.jpg')
            }
            if (idade >= 55 && idade < 70){
                image.setAttribute('src', 'imagens/homem-60-anos.jpg')
            }
            if (idade >= 70 && idade < 90){
                image.setAttribute('src', 'imagens/homem-75-anos.jpg')
            }
            if (idade >= 90 && idade < 110){
                image.setAttribute('src', 'imagens/homem-95-anos.jpg')
            }
        } else if(fsex[1].checked) {
                gen = 'Mulher'
                if (idade >= 0 && idade < 3){
                    image.setAttribute('src', 'imagens/baby-mulher.jpg')
                }
                if (idade >= 3 && idade < 8){
                    image.setAttribute('src', 'imagens/mulher-3-anos.jpg')
                }
                if (idade >= 7 && idade < 10){
                    image.setAttribute('src', 'imagens/mulher-10-anos.jpg')
                }
                if (idade >= 10 && idade < 15){
                    image.setAttribute('src', 'imagens/mulher-13-anos.jpg')
                }
                if (idade >= 15 && idade < 19){
                    image.setAttribute('src', 'imagens/mulher-18-anos.jpg')
                }
                if (idade >= 19 && idade < 26){
                    image.setAttribute('src', 'imagens/mulher-25-anos.jpg')
                }
                if (idade >= 26 && idade < 40){
                    image.setAttribute('src', 'imagens/mulher-35-anos.jpg')
                }
                if (idade >= 40 && idade < 55){
                    image.setAttribute('src', 'imagens/mulher-45-anos.jpg')
                }
                if (idade >= 55 && idade < 70){
                    image.setAttribute('src', 'imagens/mulher-60-anos.jpg')
                }
                if (idade >= 70 && idade < 90){
                    image.setAttribute('src', 'imagens/mulher-75-anos.jpg')
                }
                if (idade >= 90 && idade < 110){
                    image.setAttribute('src', 'imagens/mulher-95-anos.jpg')
                }
        }
        res.innerHTML = `${gen} com ${idade} anos.`
        res.appendChild(image)
    }
}