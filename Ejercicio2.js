/*Elabore un programa que permita calcular el IMC (Índice de Masa Corporal), el programa recibirá 
como parámetros el peso y altura de la persona. Nota: el IMC se calcula mediante peso / (altura * altura) */


function calcularIMC(peso, altura){
    let imc = peso / (altura * altura);
    return imc;
}

function operacionesIMC(imc){
    if (imc < 18.5){
        return 'Bajo peso';
    } else if (imc >= 18.5 && imc < 25 ){
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30 ){
        return 'Sobrepeso';
    } else {
        return 'Obesidad';
    }
}

let peso = 80;
let altura = 1.70;
let imc =calcularIMC(peso, altura);
let resultado = operacionesIMC(imc);

console.log("Tu IMC es de: " + imc);
console.log("Resultados: " + resultado)