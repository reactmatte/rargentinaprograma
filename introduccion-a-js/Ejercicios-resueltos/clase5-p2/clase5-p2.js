
const $BOTON_RESET = document.querySelector("#boton-reset");
const $BOTON_ENVIAR = document.querySelector("#boton-enviar");
const $MENSAJE = document.querySelector("#mensaje-bienvenida")

function CAMBIAR_MENSAJE(PRIMER_NOMBRE, SEGUNDO_NOMBRE, APELLIDO, EDAD) {
    $MENSAJE.textContent = `¡Bienvenido ${PRIMER_NOMBRE} ${SEGUNDO_NOMBRE} ${APELLIDO}!, tenes: ${EDAD} años`    
}

$BOTON_ENVIAR.onclick = function () {
    const $USUARIO_PRIMER_NOMBRE = document.querySelector("#nombre-primer").value;
    const $USUARIO_SEGUNDO_NOMBRE = document.querySelector("#nombre-segundo").value;
    const $USUARIO_APELLIDO = document.querySelector("#apellido").value;
    const $USUARIO_EDAD = +document.querySelector("#edad").value;

    CAMBIAR_MENSAJE($USUARIO_PRIMER_NOMBRE, $USUARIO_SEGUNDO_NOMBRE, $USUARIO_APELLIDO, $USUARIO_EDAD)
    return false
}
