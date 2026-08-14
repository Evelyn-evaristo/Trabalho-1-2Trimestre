/* 

Atividade 5: Construa um programa que leia repetidamente números inteiros positivos digitados pelo 
usuário até que seja informado o valor 0. Para cada número lido, exceto o zero, o programa deve 
calcular o seu fatorial e verificar se ele é um "fatorial primo". Considere que um número é classificado  
como fatorial primo quando tanto o número original quanto o valor do seu fatorial são números 
primos. O número 1 não deve ser considerado primo. Ao final da execução, o programa deverá exibir 
a média aritmética de todos os números informados, desconsiderando o zero, além da quantidade de 
números que foram classificados como fatoriais primos. Para evitar problemas de desempenho, 
considere apenas entradas entre 0 e 20.

*/
let soma = 0;
let quantidade = 0;
let fatoriaisPrimos = 0;

function adicionar() {

    let numero = Number(document.getElementById("numero").value);
    let saida = document.getElementById("saida");

    if (numero < 0 || numero > 20) {
        saida.innerHTML = "Digite um número entre 0 e 20.";
        return;
    }

    if (numero === 0) {

        if (quantidade === 0) {
            saida.innerHTML = "Nenhum número foi informado.";
            return;
        }

        let media = soma / quantidade;

        saida.innerHTML =
            "Média: " + media +
            "<br>Quantidade de fatoriais primos: " + fatoriaisPrimos;

        return;
    }

    soma = soma + numero;
    quantidade++;

    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial = fatorial * i;
    }

    let numeroPrimo = true;

    if (numero === 1) {
        numeroPrimo = false;
    }

    for (let i = 2; i < numero; i++) {

        if (numero % i === 0) {
            numeroPrimo = false;
        }
    }

    let fatorialPrimo = true;

    if (fatorial === 1) {
        fatorialPrimo = false;
    }

    for (let i = 2; i < fatorial; i++) {

        if (fatorial % i === 0) {
            fatorialPrimo = false;
        }
    }

    if (numeroPrimo === true && fatorialPrimo === true) {
        fatoriaisPrimos++;
    }

    saida.innerHTML =
        "Número: " + numero +
        "<br>Fatorial: " + fatorial;
}