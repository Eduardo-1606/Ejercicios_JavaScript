/* Elaborar un programa que permita recibir una palabra o una frase y que devuelva si es palindromo
 o no. Nota: Palindromo es una palabra o frase que se lee de igual de izquiera a derecha que
 derecha a izquierda*/


 function esPalindromo(texto){
    texto = texto.replace(/ /g, '').toLowerCase();

    let textoInvertido = texto.split('').reverse().join('');

    return texto === textoInvertido;
 }

 let palabra_frase = 'anita lava la tina'
 let resultado = esPalindromo(palabra_frase);

 if (resultado){
    console.log("'" + palabra_frase + " es un palindromo");
 }else {
    console.log("'" + palabra_frase + " no es palindromo")
 }