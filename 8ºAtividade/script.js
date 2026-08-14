/* 
Atividade 8: Crie uma função capaz de interpretar e calcular o resultado de uma expressão 
aritmética simples representada por uma string contendo apenas números inteiros positivos e os 
operadores de adição (+), subtração (-), multiplicação (*) e divisão (/). A função não pode utilizar o 
método eval() e deve percorrer a string caractere por caractere para identificar números e 
operadores, armazenando-os em estruturas apropriadas para posterior processamento. O cálculo 
deve respeitar a precedência matemática tradicional, realizando primeiro as operações de 
multiplicação e divisão e, somente depois, as operações de adição e subtração. Considere que a 
divisão deve ser inteira, utilizando Math.floor() para descartar a parte decimal. A expressão pode 
conter espaços em branco em qualquer posição e a implementação não pode utilizar expressões 
regulares. Por exemplo, a expressão "8 / 2 + 3 * 2" deve resultar em 10, pois primeiro são realizadas 
as operações de divisão e multiplicação, produzindo os valores 4 e 6, que posteriormente são 
somados. 
*/

function calcular() {

    let expressao = document.getElementById("expressao").value;
    let saida = document.getElementById("saida");

    let numeros = [];
    let operadores = [];

    let numero = "";

    for (let i = 0; i < expressao.length; i++) {

        let caractere = expressao[i];

        if (caractere >= "0" && caractere <= "9") {

            numero = numero + caractere;

        }

        else if (caractere === " ") {

            continue;

        }

        else if (
            caractere === "+" ||
            caractere === "-" ||
            caractere === "*" ||
            caractere === "/"
        ) {

            numeros.push(Number(numero));
            operadores.push(caractere);

            numero = "";
        }
    }

    numeros.push(Number(numero));


    // * 1º Ação
    // Multiplicação e divisão

    for (let i = 0; i < operadores.length; i++) {

        if (operadores[i] === "*" || operadores[i] === "/") {

            let resultado;

            if (operadores[i] === "*") {

                resultado = numeros[i] * numeros[i + 1];

            } else {

                resultado = Math.floor(numeros[i] / numeros[i + 1]);

            }

            numeros[i] = resultado;

            numeros.splice(i + 1, 1);

            operadores.splice(i, 1);

            i--;
        }
    }


    // * 2º Ação
    // Adição e subtração

    let resultadoFinal = numeros[0];

    for (let i = 0; i < operadores.length; i++) {

        if (operadores[i] === "+") {

            resultadoFinal = resultadoFinal + numeros[i + 1];

        } else if (operadores[i] === "-") {

            resultadoFinal = resultadoFinal - numeros[i + 1];

        }
    }


    saida.innerHTML = `
        Resultado: ${resultadoFinal}
    `;
}