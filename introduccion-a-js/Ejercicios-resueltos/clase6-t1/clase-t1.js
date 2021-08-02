import { crearElemento, render } from "../clase5-p3/libreria.js";

const $inputs = document.querySelector("#inputs");
const $botonAgregar = document.querySelector("#boton-agregar");
const $botonCalcular = document.querySelector("#boton-calcular")

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
    const input = document.querySelectorAll(".formularios")
    const label = document.querySelectorAll("label")
    for (let i = 1; i < input.length; i++) {
        input[i].remove()
        label[i].remove()
    }
}


$botonCalcular.onclick = function () {
    let edades = document.querySelectorAll(".formularios");
    let contador = 0;
    for (let i = 1; i < edades.length; i++) {
        contador += +edades[i].value
    }
    console.log(contador)
    return contador
}