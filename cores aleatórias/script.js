function getRandomColor() {
    // Gera uma cor hexadecimal aleatória
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function changeColor() {
    // Obtém uma cor aleatória
    var randomColor = getRandomColor();

    // Aplica a cor ao fundo do elemento body
    document.body.style.backgroundColor = randomColor;
}
