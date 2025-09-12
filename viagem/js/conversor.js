//DOM

const km = document.querySelector('#km')
const kml = document.querySelector('#kml')
const preco2 = document.querySelector('#preco2')
const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')


//Eventos

botao.addEventListener('click', converter)

//Funções
function converter(){
    quilometro = Number(km.value)
    quilometro2 = Number(kml.value)
    precoCombustivel = Number(preco2.value)
    valorFinal = (quilometro / quilometro2) * precoCombustivel
    resultado.textContent = `O valor total da viagem será R$ ${valorFinal.toFixed(2)}`
}