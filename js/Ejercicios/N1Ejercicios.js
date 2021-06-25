// Tarea: Ahora te toca a vos! Acá abajo escribí una alerta que diga "Hola mundo!"
// Tarea: Una vez que la alerta funcione, comentala poniendo '//' en la línea donde está el código y guardá los cambios.
// Una vez que recargás la página, ya no debería aparecer más.

function HOLA_MUNDO(){
    alert("¡Hola mundo!")
}

// Tarea: Ahora probá hacer un console.log de un mensaje que queramos.

function MENSAJE(TEXTO){
    console.log(TEXTO)
}

// TAREA: Creá 2 variables indefinidas, llamadas numeroUno y numeroDos.

let numeroUno, numeroDos;
console.log(`Variables indefinidas ${numeroUno} ${numeroDos}`);

// TAREA: Crear 3 variables:
// * 1ra variable llamada 'diez' con valor 10
// * 2nda variable llamada 'tres' con valor 3
// * 3ra variable llamada resultadoMultiplicacion que va a ser igual a
// la 1ra variable multiplicada (con el operador *) por la 2nda variable.
// Mostrar el valor de resultadoMultiplicacion con un alert o un console.log

let DIEZ = 10
let TRES = 3
let RESULTADO_MULTIPLICACION = DIEZ * TRES;
console.log(`Multiplo de la variable DIEZ y TRES ${RESULTADO_MULTIPLICACION}`)

// TAREA: Es tu turno de crear una función!
// Creá una función llamada 'sumar'
// Escribí código para que acepte 2 argumentos (numero1 y numero2)
// Escribí código para que devuelva (return) la suma de numero1 y numero2
// Ejecutá la función sumar y mostrá su resultado en la consola

function SUMAR(NUMERO_UNO, NUMERO_DOS){
    return NUMERO_UNO + NUMERO_DOS
}

//Misma funcion pero con operador REST, este permite
//poner cuantas variables necesitemos. 
//¿PORQUE LO AGREGE? NO HAY PORQUE, solo practicaba.

function SUMAR_REST(...NUMERO){
    return NUMERO.reduce((ACUMULADOR, VALOR_ACTUAL) => {
       return ACUMULADOR + VALOR_ACTUAL
    })
}

function RESTAR(NUMERO_UNO, NUMERO_DOS){
    return NUMERO_UNO - NUMERO_DOS
}

function RESTAR_REST(...NUMERO){
    return NUMERO.reduce((ACUMULADOR, VALOR_ACTUAL) => {
       return ACUMULADOR - VALOR_ACTUAL
    })
}

function MULTIPLICACION(NUMERO_UNO, NUMERO_DOS){
    return NUMERO_UNO * NUMERO_DOS
}

function MULTIPLICACION_REST(...NUMERO){
    return NUMERO.reduce((ACUMULADOR, VALOR_ACTUAL) => {
       return ACUMULADOR * VALOR_ACTUAL
    })
}

function DIVISION(NUMERO_UNO, NUMERO_DOS){
    return NUMERO_UNO / NUMERO_DOS
}

function POTENCIACION(BASE, EXPONENTE){
    return BASE ** EXPONENTE
} 

// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr, dependiendo del operador artmético (+, -, /, *, etc.)
//      Si el operador es '+', vamos a usar la función para sumar.
//      Si no, vamos a usar la función para restar.
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
// Si tenemos un operador igual a '+', llamamos la función 'sumar' con nuestros números (las variables del paso 2).
// Si no, tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
// No se olviden de hacer un console.log para ver el resultado!

let OPERADOR = prompt(`Operador aritmetico`)
let NUMERO_UNO;
let NUMERO_DOS;

if (OPERADOR === "+") {
    SUMAR    
}
