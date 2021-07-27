import { crearElemento, render } from "./libreria.js";

const $botonAgregar = document.querySelector("#boton-agregar")
const $botonCalcular = document.querySelector("#boton-calcular");
const $inputsTiempo =  document.querySelector(".tiempo-videos")

//elementos creados desde una minilibreria
function agregarContadores() {
    let inputHoras = crearElemento("input", {type: "number" , className: "input-horas" , placeholder: "Ingresa las horas"})
    render(inputHoras, $inputsTiempo)

    let inputMinutos = crearElemento("input",
     {type: "number", max: 59 , className: "input-minutos", placeholder: "Minutos"})
    render(inputMinutos, $inputsTiempo)

    let inputSegundos = crearElemento("input",
     {type: "number", max: 59 , className: "input-segundos" , placeholder: "Segundos"})
    render(inputSegundos, $inputsTiempo)
}

//Agrega X contadores del #input-videos, antes de agregarlos borra los anteriores existentes
$botonAgregar.onclick = function () {
    let $input = +document.querySelector("#input-videos").value;

    borrarContadoresAnteriores()

    for (let i = 0; i < $input; i++) {

        agregarContadores()
    }
}

//funcion remove() elimina los elementos seleccionados
function borrarContadoresAnteriores() {
    const $horas = document.querySelectorAll(".input-horas");
    const $minutos  = document.querySelectorAll(".input-minutos");
    const $segundos = document.querySelectorAll(".input-segundos"); 

    for (let i = 0; i < $horas.length; i++) {
        $horas[i].remove();
    }
    for (let i = 0; i < $horas.length; i++) {
        $minutos[i].remove();
    }
    for (let i = 0; i < $horas.length; i++) {
        $segundos[i].remove();
    }
}

$botonCalcular.onclick = function() {
    let $horas = document.querySelectorAll(".input-horas");
    let $minutos = document.querySelectorAll(".input-minutos");
    let $segundos = document.querySelectorAll(".input-segundos");
    
    let acumuladorHoras = 0;
    let acumuladorMinutos = 0;
    let acumuladorSeguntos = 0;

    for (let i = 0; i < $horas.length; i++) {
        acumuladorHoras += +$horas[i].value  
    }
    for (let i = 0; i < $minutos.length; i++) {
        acumuladorMinutos += +$minutos[i].value
    }
    for (let i = 0; i < $segundos.length; i++) {
        acumuladorSeguntos += +$segundos[i].value;
    }
    acumuladorHoras += Math.trunc(acumuladorMinutos / 60);
    acumuladorMinutos %= 60;
    acumuladorMinutos += Math.trunc(acumuladorSeguntos / 60);
    acumuladorSeguntos %= 60;
    
    mensajeTiempoTotal(acumuladorHoras, acumuladorMinutos, acumuladorSeguntos)
}

function mensajeTiempoTotal(horas, minutos, segundos) {
    let mensaje = document.createElement("h2")
    mensaje.textContent = `El tiempo total es ${horas}:${minutos}:${segundos}`
    const $formulario = document.querySelector("#formularios")
    render(mensaje, $inputsTiempo)    
}
