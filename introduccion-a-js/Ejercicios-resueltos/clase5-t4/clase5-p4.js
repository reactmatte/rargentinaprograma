import { crearElemento, render } from "../clase5-p3/libreria.js";



function agregarNumero(valor) {
    const $arrNumeros = document.querySelector("#array-numeros");
    let $numeroLi = crearElemento("li", {type: "number", className: "numeroLi"})
    render($numeroLi, $arrNumeros)
    $numeroLi.innerText = Math.floor(Math.random() * valor ) + 1

    
    return false
}

function generarNumerosLi(cantidad) {
    for (let i = 0; i < cantidad; i++) {
        let numeroAleatorio = Math.random() * 500 + 1 
        agregarNumero(numeroAleatorio)
        
    }
}

let promedioNumeros = function () {
    let $numeroLi = document.querySelectorAll(".numeroLi");
    let contador = 0;
    let promedio;
    for (let i = 0; i < $numeroLi.length; i++) {
        contador = contador + (+$numeroLi[i].innerText)
        promedio = contador / $numeroLi[i]
    }
    return promedio = contador / $numeroLi.length
}

function mensajePromedio() {
    const $mensajePromedio = document.querySelector("#promedio-numeros")
    $mensajePromedio.innerText = `El promedio es: ${promedioNumeros()}`
}

generarNumerosLi(10)
mensajePromedio()

