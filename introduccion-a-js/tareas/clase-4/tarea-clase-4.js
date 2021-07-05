// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

function IMPRIMIR_CADA_TRES_NUMEROS() {
    for(i = 3; i <= 22; i++){
        if (i % 3 === 0) {
            console.log(i)
        }
    }
}

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

function WHILE_DIEZ_A_UNO() {
    let NUMERO = 10
    while (NUMERO >= 1) {
        console.log(NUMERO--)
    }    
}

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

function FIZZBUZZ() {
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            console.log(`${i} Fizzbuzz`)
        }else if(i % 5 === 0){
            console.log(`${i} Buzz`)
        }else if(i % 3 === 0){
            console.log(`${i} Fizz`)
        }else{
            console.log(i)
        }
    }
}

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

//recordatorio: El promedio se obtiene de sumar los elementos y dividirlos por la cantidad de elementos.
//  elementos = 1,2,4
// se suman los elementos  suma === 1 + 2 + 4 = 7
// por ultimo se divide la suma por la cantidad de elementos
//  promedio === suma / elementos.length
// 7 / 3 =  2,3...

const EL_ARRAY = [10,5,4,2,8]
function CALCULAR_PROMEDIO_EN_ARRAY(ARRAY){
    function SUMA_DE_ELEMENTOS(ACUMULADOR, VALOR_ACTUAL) {
        ACUMULADOR + VALOR_ACTUAL
    }
    PROMEDIO = ARRAY.reduce(SUMA_DE_ELEMENTOS());
    console.log(`El promedio es ${PROMEDIO}`)
}
//let SUMA_DE_ELEMENTOS = (ACUMULADOR, VALOR_ACTUAL) => ACUMULADOR + VALOR_ACTUAL
    