function calcular() {

    let saida = document.getElementById("saida");

    let alunos = [];

    for (let i = 1; i <= 5; i++) {

        let nome = document.getElementById("nome" + i).value;

        let nota1 = Number(document.getElementById("nota" + i + "_1").value);
        let nota2 = Number(document.getElementById("nota" + i + "_2").value);
        let nota3 = Number(document.getElementById("nota" + i + "_3").value);

        alunos.push({
            nome: nome,
            notas: [nota1, nota2, nota3]
        });
    }

    let aprovados = [];
    let somaMedias = 0;
    let quantidadeValidos = 0;
    let resultado = "";

    for (let i = 0; i < alunos.length; i++) {

        let nome = alunos[i].nome;
        let notas = alunos[i].notas;

        let notaValida = true;

        for (let j = 0; j < notas.length; j++) {

            if (notas[j] < 0 || notas[j] > 10) {
                notaValida = false;
            }
        }


        let media = (
            notas[0] * 2 +
            notas[1] * 3 +
            notas[2] * 5
        ) / 10;

        let classificacao = "";

        if (media >= 9) {
            classificacao = "Excelente";
        }
        else if (media >= 7) {
            classificacao = "Bom";
        }
        else if (media >= 5) {
            classificacao = "Regular";
        }
        else {
            classificacao = "Insuficiente";
        }

        resultado += `
            Aluno: ${nome}
            <br>
            Média: ${media.toFixed(2)}
            <br>
            Classificação: ${classificacao}
            <br><br>
        `;

        if (media >= 7) {
            aprovados.push(nome);
        }

        if (notaValida === true) {

            somaMedias = somaMedias + media;
            quantidadeValidos++;

        } else {

            resultado += `
                Aviso: ${nome} possui nota inválida.
                <br><br>
            `;
        }
    }

    let mediaGeral = somaMedias / quantidadeValidos;

    resultado += `
        Aprovados: ${aprovados}
        <br>
        Média geral: ${mediaGeral.toFixed(2)}
    `;

    saida.innerHTML = resultado;

    return aprovados;
}