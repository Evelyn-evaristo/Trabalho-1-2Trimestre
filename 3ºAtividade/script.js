/*
Atividade 3: Implemente uma função que receba um array de números inteiros e retorne um novo 
array contendo apenas os números considerados "números da sorte". Um número da sorte é aquele 
cuja soma dos seus dígitos resulta em um valor par e cuja quantidade de dígitos ímpares é maior do 
que a quantidade de dígitos pares. Por exemplo, o número 1234 possui soma dos dígitos igual a 10, 
que é par, porém possui a mesma quantidade de dígitos ímpares e pares, portanto não deve ser 
considerado da sorte. Já o número 1357 possui soma igual a 16, que é par, e todos os seus dígitos 
são ímpares, sendo assim considerado um número da sorte. A função deve ignorar números 
negativos e, caso o array recebido esteja vazio, retornar uma mensagem apropriada informando que 
não há dados para processar. 

* Requisitos:
    - Array de números inteiros;
    - Array contendo apenas números considerados da "sorte";

* Variaveis:
    - somaTotal: somar todo os números;
!       -> Deve ser par
    - Pares: Apenas números pares;
    - Impares: Apenas números impares;

1. Faço a lista: digitos = [1234, 1357, 248, 555]
2. Separo essa lista com o se(if) quais são pares e impares, listando cada um.
3. Irei comparar a quantidade de cada um isso definira se é da sorte ou não.
*/

function verificarNumero (){

let numero = document.getElementById("numero").value
let saida = document.querySelector(".saida")

let somaTotal = Number(numero[0]) + Number(numero[1]) + Number(numero[2]) + Number(numero[3])

let impar = []
let par = []

for (let i = 0; i < numero.length; i++) {
    let digito = Number(numero[i]);
    
    if (digito % 2 !== 0) {
        impar.push(digito)
    } else {
        par.push(digito)
    }
}

if (somaTotal % 2 === 0 && impar.length > par.length) {
    saida.innerHTML = `
    <h3> O NÚMERO: ${numero} </h3>
    <h2> É DA SORTE!!!! PARABÉNS </h2>
    `
} else if (numero < 0) {
    alert("Insira um valor valido")
} else {
    saida.innerHTML = `
    <h3> O NÚMERO: ${numero} </h3>
    <h2> NÃO É DA SORTE. QUE AZAR :( </h2>
    `
}

}






