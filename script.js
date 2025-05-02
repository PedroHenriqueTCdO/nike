let trocarCor = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")
let botoes = document.querySelector(".botao-carrinho")

function mudarVisual(cor, imagem, botao){
    trocarCor.style.background= cor
    tenis.src = imagem
    botoes.style.background = botao
}
