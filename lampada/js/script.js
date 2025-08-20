const lampada = document.querySelector('#lampada')
const btligar = document.querySelector('#btligar')
const btdesligar = document.querySelector('#btdesligar')

//evento

btligar.addEventListener('click', ligar)
btdesligar.addEventListener('click', desligar)

//função

function ligar(){
    lampada.src = 'images/lampada-acesa.png'
}

function desligar(){
    lampada.src = 'images/lampada-apagada.png'
}