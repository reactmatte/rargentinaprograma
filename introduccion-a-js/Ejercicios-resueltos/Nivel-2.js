console.log(`_____________________________________________`)

// TAREA: Crea tu propio array, llamado comidasFavoritas, y escribi dentro algunas
//       cosas que te gustan.

let COMIDAS_FAVORITAS = [`manzana`, `pera`, `limon`, `naranja`, `melon`, `sandia`, `lechuga`, `espinaca`, `zanahoria`];
console.log(`Crea tu propio array ${COMIDAS_FAVORITAS}`)

// TAREA: Verifique cuántos valores tiene en su array comidasFavoritas.
// imprimi utilizando console.log el resultado.

console.log(`TAREA: Verifique cuántos valores tiene en su array COMIDAS_FAVORITAS: ${COMIDAS_FAVORITAS.length}`)

// TAREA: Obtené el tercer elemento de tu array comidasFavoritas e imprimilo utilizando console.log.

console.log(`Obtené el tercer elemento de tu array: ${COMIDAS_FAVORITAS[2]}`)

// TAREA: Toma tu array de comidasFavoritas y reemplaza el primer valor
// con cualquier otra cosa.

console.log(`Toma tu array de comidasFavoritas y reemplaza
 el primer valor con cualquier otra cosa.`)

COMIDAS_FAVORITAS[0] = `JUAN`

// TAREA: console.log todo el array para verificar.

console.log(COMIDAS_FAVORITAS)

// TAREA: Extendamos tu lista de comidasFavoritas y agreguemos un valor más.

COMIDAS_FAVORITAS.push(`PESCADO`)

// TAREA: console.log todo el array para verificar.

console.log(`console.log todo el array para verificar: ${COMIDAS_FAVORITAS}`)

// TAREA: Intenta crear un array como una constante y modifica los valores que contiene.

const ANIMALES = [`OVEJA`, `PATO`, `ARAÑA`, `CARPINCHO`]

// TAREA: Observa lo que sucede si agregas algo con.push(), cambias algo
//       con notación de corchetes (array[1]) y
//       asigna un nuevo array completamente nuevo a la constante

ANIMALES.push(`JOAQUIN`)

console.log(ANIMALES)

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

function EL_WHILE(NUMERO) {
    while (NUMERO >= 1) {
        console.log(NUMERO--)
    }    
}

// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

function EL_FOR() {
    for (let i = 3; i <= 22; i++) {
        if (i % 3 === 0) {
            console.log(i)
        }
    }    
}

// TAREA: Probalo con tu comidasFavoritas array.

function ITERADOR() {
    for (let i = 0; i <= COMIDAS_FAVORITAS.length; i++) {
        console.log(COMIDAS_FAVORITAS[i])    
    }
}

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
//
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.

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