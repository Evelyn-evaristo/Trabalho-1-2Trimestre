/* 
* # Atividade 1: 
Um estacionamento cobra R$ 5,00 pela primeira hora, R$ 3,00 por cada hora adicional 
até a 6ª hora e, a partir da 7ª hora, o valor por hora adicional passa a ser R$ 2,00. Desenvolva uma 
função que receba a hora de entrada e a hora de saída, ambas no formato "HH", considerando que a 
permanência ocorre em um único dia e não ultrapassa a meia-noite. O cálculo deve considerar que 
qualquer fração de hora será cobrada como uma hora inteira, utilizando arredondamento para cima. 
Caso o tempo total de permanência seja superior a 12 horas, aplique um desconto de 10% sobre o 
valor bruto. A função deve retornar o valor final formatado com duas casas decimais.

? Ação:
R$ 5,00 = 1h
R$ 3,00 <= 6h (limite 6h)
> 7h = R$2,00 (acima de 7h)

? A função vai receber: 
Hora "HH":
- Entrada 
- Saida
! OK!

? Considere:
Permanência ocorre em um único dia;
Não ultrapassa a meia noite. 
! OK!

? Adicionais:
Permanencia > 12h = desconto 10% sobre o valor bruto.

? Variaveis:
- Entrada;
- Saida;
- Valor final;
- horas_adiconais;
- preco_adicional;
- primeira_hora

? Sequencia:
1. Registra entrada; 
! OK!
2. Conta o tempo;
! OK!
3. Registra a saida.
! OK!

? Acrescentando no código:
* let formatado = valor.toFixed(2);
* <input type="number" min="0" max="23" id="entrada" oninput="atualizarLimite()">
* oninput
* function
* querySelector -> class no HTML

? Código:
*let; 
*const;

*/

let entrada = document.getElementById("entrada");
let saida = document.getElementById("saida");
let valorBruto = 0;
let tempo = Number(saida.value) - Number(entrada.value);
const valor = 5.0;
const horaAdicional = 3.0;
const horaSuperior = 2.0;
let desconto = 0;
let resultado = document.querySelector(".resultado");

function atualizarLimite() {
  saida.min = entrada.value;
}

function calcularEstacionamento() {
  let tempo = Number(saida.value) - Number(entrada.value);
  if (tempo <= 1) {
    valorBruto = valor;
    resultado.textContent = `Valor a pagar: R$ ${valorBruto.toFixed(2)}`;
  } else if (tempo > 1 && tempo <= 6) {
    valorBruto = valor + (tempo - 1) * horaAdicional;
    resultado.textContent = `Valor a pagar: R$ ${valorBruto.toFixed(2)}`;
  } else if (tempo >= 7 && tempo <= 12) {
    valorBruto = valor + 5 * horaAdicional + (tempo - 6) * horaSuperior;
    resultado.textContent = `Valor a pagar: R$ ${valorBruto.toFixed(2)}`;
  } else {
    valorBruto = valor + 5 * horaAdicional + (tempo - 6) * horaSuperior;
    let desconto = valorBruto * 0.1;
    valorBruto = valorBruto - desconto;
    resultado.textContent = `Valor a pagar: R$ ${valorBruto.toFixed(2)}`;
  }
}
