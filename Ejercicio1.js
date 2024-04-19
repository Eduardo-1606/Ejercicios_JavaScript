/*Elabore un programa sencillo que reciba una frase de cualquier longitud y que 
el programa devuelva la cantidad de palabras que existen en dicha frase*/

function contadorPalabras(frase){
    return frase.split(" ").length;
}

let frase = "Hola Mundo bienvenido a este codigo";
let cantidadPalabra = contadorPalabras(frase);

console.log("La frase " +frase+ " tiene " + cantidadPalabra +  " palabras");