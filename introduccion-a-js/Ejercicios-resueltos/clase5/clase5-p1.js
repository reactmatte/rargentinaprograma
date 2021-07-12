const $BOTON_CALCULAR = document.querySelector("#boton-calcular")

function CALCULAR_SALARIO_MENSUAL(SALARIO_ANUAL){
    return SALARIO_ANUAL / 12;
}

$BOTON_CALCULAR.onclick = function(){
    const $SALARIO_ANUAL = +document.querySelector("#salario-anual").value;
    const $SALARIO_MENSUAL = document.querySelector("#salario-mensual").value;
    const SALARIO_MENSUAL = CALCULAR_SALARIO_MENSUAL(SALARIO_ANUAL);
    $SALARIO_MENSUAL= salarioMensual
    return false    
}

console.log("hola lalalalala")