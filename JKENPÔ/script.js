var pc,vidas = 3,vitoria=0;

const botao1 = document.getElementById("btnPedra")
const botao2 = document.getElementById("btnPapel")
const botao3 = document.getElementById("btnTesoura")

botao1.addEventListener("click", fnpedra)
botao2.addEventListener("click", fnpapel)
botao3.addEventListener("click", fntesoura)
function fnpedra(){
    pc = Math.floor((Math.random() * 3 ) + 1)
    if(pc == 2){
        alert("O computador escolheu PAPEL, você perdeu")
        vidas --
    }
    if(pc == 1){
        alert("O computador escolheu PEDRA, você empatou")
    }
    if(pc == 3){
        alert('O computador escolheu TESOURA, você venceu')
        vitoria++
    }
    return
}
function fnpapel(){
    pc = Math.floor((Math.random() * 3 ) + 1)
    if(pc == 2){
        alert('O computador escolheu PAPEL, você empatou')
    }
    if(pc == 3){
        alert('O computador escolheu TESOURA, você perdeu')
        vidas --
    }
    if(pc == 1){
        alert('O computador escolheu PEDRA, você venceu')
        vitoria++
    }
    return
}
function fntesoura(){
    pc = Math.floor((Math.random() * 3 ) + 1)
    if(pc == 2){
        alert("O computador escolheu PAPEL, você venceu")
        vitoria++
    }
    if(pc == 1){
        alert('O computador escolheu PEDRA, você perdeu')
        vidas --
    }
    if(pc == 3){
        alert('O computador escolheu TESOURA, você empatou')
    }
}

