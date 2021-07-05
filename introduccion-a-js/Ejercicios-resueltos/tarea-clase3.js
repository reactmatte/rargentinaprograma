// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

function OBTENER_NOMBRE_DE_USUARIO() {
    const NOMBRE_DE_USUARIO = prompt(`¿Cual es tu nombre?`);
    const NOMBRE_EN_MAYUS = NOMBRE_DE_USUARIO.toUpperCase();

    if (NOMBRE_EN_MAYUS === "MATTE") {
        console.log(`Hola, tocayo! yo tambien me llamo ${NOMBRE_DE_USUARIO}`)
    }else if (NOMBRE_EN_MAYUS === "JONATAN") {
    console.log(`Hey, te llamas igual que mi perro ${NOMBRE_DE_USUARIO} crack`)        
    } else if (NOMBRE_EN_MAYUS === "ALAN"){
    console.log(`Tengo un amigo que se llama ${NOMBRE_DE_USUARIO}`)        
    }else {
        console.log(`Hola ${NOMBRE_DE_USUARIO}`)
    }
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

function OBTENER_EDAD_DEL_USUARIO() {
    const EDAD_DE_USUARIO = +prompt(`¿Cuantos años tenes?`);
    if (EDAD_DE_USUARIO === 29){
        console.log(`¡Tenemos la misma edad crack!`)
    }else if (EDAD_DE_USUARIO < 29) {
        console.log(`¡Sos mas joven que yo!`)        
    } else if (EDAD_DE_USUARIO > 29) {
        console.log(`¡Sos mas grande que yo!`)
    }    
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

function OBTENER_DNI_DE_USUARIO() {
    const DNI_USUARIO = prompt(`¿Tenes documentos? si o no`);
    const RESPUESTA_DE_USUARIO = DNI_USUARIO.toLowerCase()

    if (RESPUESTA_DE_USUARIO === "si") {
        const EDAD_USUARIO = +prompt(`¿Cuantos años tenes?`)

        if (EDAD_USUARIO >= 18) {
            console.log(`¡Bienvenido!`)            
        }else if (EDAD_USUARIO < 18) {
            console.log(`Tenes que ser mayor de 18 para entrar.`)          
        }
    }else if (RESPUESTA_DE_USUARIO === "no") {
        console.log(`No podes entrar sin documento.`)
    } else {
        console.log(`No entendi la respuesta, contesta con si o no.`)        
    }
}