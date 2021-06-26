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