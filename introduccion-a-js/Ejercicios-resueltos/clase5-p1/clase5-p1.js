const $BOTON_CALCULAR = document.querySelector("#boton-calcular")

function CALCULAR_SALARIO_MENSUAL(SALARIO_ANUAL){
    return SALARIO_ANUAL / 12;
}

$BOTON_CALCULAR.onclick = () => {
    const $SALARIO_ANUAL = +document.querySelector("#salario-anual").value;
    const SALARIO_MENSUAL = CALCULAR_SALARIO_MENSUAL($SALARIO_ANUAL);
    document.querySelector("#salario-mensual").value = SALARIO_MENSUAL 
    return false    
}