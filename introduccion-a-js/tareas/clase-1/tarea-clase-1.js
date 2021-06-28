// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola




function CALCULAR_EDAD(){

    let ANIO_ACTUAL = prompt(`¿Que año es actualmente?`);
    let ANIO_NACIMIENTO = prompt(`¿En que año naciste?`);
    
    function EDAD_USUARIO(){
        return ANIO_ACTUAL - ANIO_NACIMIENTO
    };
    console.log(`Edad del usuario es ${EDAD_USUARIO()}`)
}

// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.



const MESES_DEL_ANIO = 11.5;
const DIAS_LABORALES_AL_MES = 23;
const HORAS_LABORALES_DIARIA = 8;

function ANUAL_A_MENSUAL(ANUAL) {
    return ANUAL / MESES_DEL_ANIO
}

function MENSUAL_A_DIARIO(MENSUAL) {
    return MENSUAL / DIAS_DEL_MES;
}

function DIARIO_A_POR_HORA(DIARIO) {
    return DIARIO / HORAS_LABORALES_DIARIA
}

function OBTENER_SALARIO_ANUAL(){
    let SALARIO_ANUAL = +prompt(`¿Cuanto ganas anualmente?`);
    
    console.log(`Tu salario mensual es:${ANUAL_A_MENSUAL(SALARIO_ANUAL)}`);
    console.log(`Tu salario diario es:${MENSUAL_A_DIARIO(ANUAL_A_MENSUAL)}`);
    console.log(`Tu salario por hora es: ${DIARIO_A_POR_HORA(MENSUAL_A_DIARIO)}`)
}




/// SCOPE

// Variable hoisting -> izar
// console.log(hola); //Falla porque no está definida

// console.log(mensaje); //No falla, pero muestra undefined... por qué?
// var mensaje = 'Hola, mundo';
// console.log(mensaje); //Hola, mundo

// Y con let?
// let mensaje = 'Hola, mundo';
// console.log(mensaje); //error

// function hoisting

/*
pruebaHoisting(); //funciona!
function pruebaHoisting(){
    console.log('prueba');
}
//pruebaHoisting();
*/

/*
var a = 1; //global
let b = 2; //global

function prueba(c) { //c es un parámetro de la función prueba. LOCAL.
    let d = 4; //local a la función

    if(c === 3){
        var e = 5; // por hoisting termina siendo local a la función
        let f = 6; // local al IF

        console.log('a dentro del if vale: ' + a); // 1
        console.log('b dentro del if vale: ' + b); // 2
        console.log('c dentro del if vale: ' + c); // lo que sea que le pasen a prueba
        console.log('d dentro del if vale: ' + d); // 4
        console.log('e dentro del if vale: ' + e); // 5
        console.log('f dentro del if vale: ' + f); // 6
    }

    console.log('a dentro de la funcion pero fuera del if, vale: ' + a); // 1
    console.log('b dentro de la funcion pero fuera del if, vale: ' + b); // 2
    console.log('c dentro de la funcion pero fuera del if, vale: ' + c); // lo que sea que le pasen a prueba
    console.log('d dentro de la funcion pero fuera del if, vale: ' + d); // 4
    console.log('e dentro de la funcion pero fuera del if, vale: ' + e); // 5
    // console.log('f dentro de la funcion pero fuera del if, vale: ' + f); // error
}

prueba(3);

console.log('a vale: ' + a); // 1
console.log('b vale: ' + b); // 2
// console.log('c vale: ' + c); // error
// console.log('d vale: ' + d); // error
// console.log('e vale: ' + e); // error
// console.log('f vale: ' + f); // error
*/
