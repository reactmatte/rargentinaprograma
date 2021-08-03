import { crearElemento, render } from "../clase5-p3/libreria.js";

const $inputs = document.querySelector("#inputs");
const $botonAgregar = document.querySelector("#boton-agregar");
const $botonCalcular = document.querySelector("#boton-calcular");
const $botonReset = document.querySelector("#boton-reset");

$botonAgregar.onclick = function (){
    const $cantidadFamiliares = document.querySelector("#cantidad-familiares");

    for (let i = 0; i < +$cantidadFamiliares.value; i++) {
        eliminarElemento()
    }
    for (let i = 0; i < +$cantidadFamiliares.value; i++) { 

        $crearInputFamiliar(i)
    }
}

function $crearInputFamiliar(indice) {
    let $label = document.createElement("label")
    $label.textContent = "Ingrese la edad del miembro familiar: #" + (indice + 1)
    let $elInput = crearElemento("input", {type: "number", className: "formularios", placeholder: "Edad "})
    render($label, $inputs )
    render($elInput, $inputs);

    return false
}

function eliminarElemento() {
    const resultadoFinal = document.querySelector("h2")
    const input = document.querySelectorAll(".formularios")
    const label = document.querySelectorAll("label")
    for (let i = 1; i < input.length; i++) {
        resultadoFinal.remove()
        input[i].remove()
        label[i].remove()
    }
}

$botonCalcular.onclick = function () {
    const $contenedor = document.querySelector("#contenedor")
    const $resultadosFinales = crearElemento("h2", {innerText: `Edad promedio: ${edadPromedio()}, edad minima: ${edadMinima()}, Edad maxima ${edadMaxima()}`})
    render($resultadosFinales, $contenedor )
    console.log(`La edad promedio es: ${edadPromedio()}`);
    console.log(`La edad minima es: ${edadMinima()}`);
    console.log(`La edad maxima es: ${edadMaxima()}`)
}

function edadPromedio() {
    let edades = document.querySelectorAll(".formularios");
    let resultado = 0;

    for (let i = 1; i < edades.length; i++) {
        resultado = resultado + Number(edades[i].value);
    }
    return resultado / (edades.length - 1)
}

function edadMinima(){
    let edades = document.querySelectorAll(".formularios");
    let edadMenor = Number(edades[1].value);

    for (let i = 1; i < edades.length; i++) {
        if ( Number(edades[i].value) < edadMenor ) {
            edadMenor = Number(edades[i].value);
        }
    }
    return edadMenor
}

function edadMaxima(){
    let edades = document.querySelectorAll(".formularios");
    let edadMayor = Number(edades[1].value);

    for (let i = 1; i < edades.length; i++) {
        if ( Number(edades[i].value) > edadMayor ) {
            edadMayor = Number(edades[i].value);
        }
    }
    return edadMayor
}

$botonReset.onclick = function () {
    eliminarElemento()
}