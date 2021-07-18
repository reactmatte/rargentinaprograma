import { crearElemento, render } from "./libreria.js";

const $botonAgregar = document.querySelector("#boton-agregar")
const $botonCalcular = document.querySelector("#boton-calcular");

const $inputsTiempo =  document.querySelector(".tiempo-videos")

function agregarContadores() {
    let inputHoras = crearElemento("input", {className: "input-horas", type: "number", placeholder: "Ingresa las horas"})
    render(inputHoras, $inputsTiempo)

    let inputMinutos = crearElemento("input", {className: "input-minutos", type: "number", placeholder: "Minutos"})
    render(inputMinutos, $inputsTiempo)

    let inputSegundos = crearElemento("input", {className: "input-segundos", type: "number", placeholder: "Segundos"})
    render(inputSegundos, $inputsTiempo)
}

$botonAgregar.onclick = function () {
    let $input = +document.querySelector("#input-videos").value;
    console.log($input)

    for (let i = 0; i < $input; i++) {
        agregarContadores()
    }
}

function borrarContadoresAnteriores() {
    const $horas = document.querySelectorAll(".input-horas");
    const $minutos  = document.querySelectorAll(".input-minutos");
    const $segundos = document.querySelectorAll(".input-segundos"); 

    for (let i = 0; i < $horas.length; i++) {
        $horas[i].remove;
    }
    for (let i = 0; i < $horas.length; i++) {
        $minutos[i].remove;
    }
    for (let i = 0; i < $horas.length; i++) {
        $segundos[i].remove;
    }
}
