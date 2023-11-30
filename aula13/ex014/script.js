function carregar() {
    var msg =window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 18
    msg.innerHTML = `Agora são ${hora} horas.` // ${}= A Placeholder
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#fee772'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = "tarde.png"
        document.body.style.background = '#ab674a'
    } else { 
        //BOM NOITE
        img.src = 'noite.png'
        document.body.style.backeground = '#1c2f49'
    }
}