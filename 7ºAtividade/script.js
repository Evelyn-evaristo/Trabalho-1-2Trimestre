let numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;
let erros = 0;

let partidas = 1;
let vitorias = 0;

let jogoTerminado = false;

function jogar() {

    let palpite = Number(document.getElementById("palpite").value);

    let saida = document.getElementById("saida");
    let historico = document.getElementById("historico");

    if (jogoTerminado === true) {
        saida.innerHTML = "A partida terminou. Clique em Jogar novamente.";
        return;
    }

    if (palpite < 1 || palpite > 100) {
        saida.innerHTML = "Digite um número entre 1 e 100.";
        return;
    }

    tentativas++;

    if (palpite === numeroSecreto) {

        vitorias++;

        saida.innerHTML = `
            Parabéns! Você acertou!
            <br>
            Número secreto: ${numeroSecreto}
            <br>
            Tentativas utilizadas: ${tentativas}
        `;

        jogoTerminado = true;

        historico.innerHTML = `
            Partidas realizadas: ${partidas}
            <br>
            Vitórias: ${vitorias}
        `;

        return;
    }

    erros++;

    let mensagem = "";

    if (numeroSecreto > palpite) {
        mensagem = "O número secreto é maior.";
    } else {
        mensagem = "O número secreto é menor.";
    }

    if (erros === 2 || erros === 4 || erros === 6) {

        if (numeroSecreto % 2 === 0) {
            mensagem += "<br>Dica: o número secreto é par.";
        } else {
            mensagem += "<br>Dica: o número secreto é ímpar.";
        }
    }

    if (tentativas === 7) {

        mensagem += `
            <br><br>
            Suas tentativas acabaram.
            <br>
            O número secreto era: ${numeroSecreto}
        `;

        jogoTerminado = true;
    }

    saida.innerHTML = `
        ${mensagem}
        <br>
        Tentativas usadas: ${tentativas}/7
    `;

    historico.innerHTML = `
        Partidas realizadas: ${partidas}
        <br>
        Vitórias: ${vitorias}
    `;
}

function novaPartida() {

    numeroSecreto = Math.floor(Math.random() * 100) + 1;

    tentativas = 0;
    erros = 0;

    partidas++;

    jogoTerminado = false;

    document.getElementById("palpite").value = "";

    document.getElementById("saida").innerHTML =
        "Nova partida iniciada!";

    document.getElementById("historico").innerHTML = `
        Partidas realizadas: ${partidas}
        <br>
        Vitórias: ${vitorias}
    `;
}