function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var fundo = window.document.querySelector('body#fundo')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'imagens/fotomanha.png'
        fundo.style = 'background: linear-gradient(#fcf58c, #fc8855)'
    } else if (hora >= 12 && hora < 19) {
        //BOA TARDE
        img.src = 'imagens/fototarde.png'
        fundo.style = 'background: linear-gradient(to top, #c89c79, #b0b5b9, #2e6077)'
    } else {
        //BOA NOITE
        img.src = 'imagens/fotonoite.png'
        fundo.style =  'background: linear-gradient(#465b60, #131e22)'
    }
}

