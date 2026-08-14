/*
Atividade 4: Desenvolva um programa que receba duas strings e determine se elas podem ser 
classificadas como "anagramas quase perfeitos". Duas strings são consideradas anagramas quase 
perfeitos quando possuem o mesmo comprimento, contêm exatamente as mesmas letras, 
desconsiderando diferenças entre maiúsculas e minúsculas, e apresentam as mesmas frequências 
para cada caractere. Além disso, pode existir no máximo uma diferença de posicionamento entre os 
caracteres das duas strings, sendo que todas as demais posições devem coincidir exatamente. A 
implementação não pode utilizar funções prontas de ordenação, devendo a comparação ser 
realizada por meio de objetos, contadores ou outras estruturas equivalentes. 
*/

// ! Grande nivel de dificuldade

function verificar() {

    let palavra1 = document.getElementById("palavra1").value.toLowerCase();
    let palavra2 = document.getElementById("palavra2").value.toLowerCase();

    let saida = document.getElementById("saida");

    // * 1. Verifica se possuem o mesmo tamanho
    if (palavra1.length !== palavra2.length) {
        saida.innerHTML = "Não são anagramas quase perfeitos.";
        return;
    }

    let contador1 = {};
    let contador2 = {};

    // * 2. Conta os caracteres da primeira palavra
    for (let i = 0; i < palavra1.length; i++) {

        let letra = palavra1[i];

        if (contador1[letra]) {
            contador1[letra]++;
        } else {
            contador1[letra] = 1;
        }
    }

    // * 3. Conta os caracteres da segunda palavra
    for (let i = 0; i < palavra2.length; i++) {

        let letra = palavra2[i];

        if (contador2[letra]) {
            contador2[letra]++;
        } else {
            contador2[letra] = 1;
        }
    }

    // * 4. Verifica se as frequências são iguais
    for (let i = 0; i < palavra1.length; i++) {

    let letra = palavra1[i];

    if (contador1[letra] !== contador2[letra]) {
        saida.innerHTML = "Não são anagramas quase perfeitos.";
        return;
    }
}

    // * 5. Conta quantas posições são diferentes
    let diferencas = 0;

    for (let i = 0; i < palavra1.length; i++) {

        if (palavra1[i] !== palavra2[i]) {
            diferencas++;
        }
    }

    if (diferencas <= 1) {
        saida.innerHTML = "São anagramas quase perfeitos.";
    } else {
        saida.innerHTML = "Não são anagramas quase perfeitos.";
    }
}