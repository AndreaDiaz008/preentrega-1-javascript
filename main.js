let nombre = prompt("Ingrese su nombre: ");
console.log(nombre)
let apellido = prompt("Ingrese su apellido: ");
console.log(apellido)
let añoNacimiento = parseInt(prompt("Ingrese su año de nacimiento: "));
console.log(añoNacimiento)
const añoActual = 2026;

let nombreCompleto = nombre + " " + apellido;
let resultado = añoActual - añoNacimiento;

console.log("Nombre completo:", nombreCompleto);
console.log("Edad:", resultado);

alert("su nombre completo es: " + nombreCompleto + " y su edad es: " + resultado);





