/* Elabora un programa que permita generar el factorial de un número N. Si el programa recibe
0 o 1, entonces devuelve el factorial de 1. Nota: Factorial es el producto de todos los números
enteros positivos desde 1 hasta N.*/


function calcularFactorial(numero){
    if (numero === 0 || numero === 1){
        return 1;
    } else{
        let factorial = 1;
        for (let i = 2; i <= numero; i++){
            factorial *= i;
        }
        return factorial;
    }
}

let numero = 10; 
let factorial = calcularFactorial(numero);

console.log ("El factorial de " + numero + " es: " + factorial)

