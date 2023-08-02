/*function saludar() {
    console.log("hello");
}

function saludoPerzonalizado (nombre){
    console.log("hola " + nombre) ;
}

saludoPerzonalizado("Pipi")*/

let numero1 = parseInt (prompt("ingresa un numero"))
let numero2 = parseInt (prompt("ingresa un numero"))

function suma(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        mensaje("No son numeros");
    }else{
        mensaje ("la suma es: " + (num1 + num2));
    }
}

function mensaje(mensaje) {
    console.log (mensaje);
}

suma(numero1, numero2);
