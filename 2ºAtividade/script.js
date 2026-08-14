/*
Atividade 2: Crie um programa que simule um pequeno caixa eletrônico. O usuário inicia com um 
saldo de R$ 1000,00 e o sistema deve apresentar um menu contendo as opções de consultar saldo, 
depositar, sacar e sair. Os saques só podem ser realizados em valores múltiplos de R$ 5,00 e não 
podem ultrapassar o saldo disponível. Após cada operação, o programa deve exibir o saldo 
atualizado. Além disso, o sistema deve limitar a quantidade de saques a cinco por execução do 
programa, considerando que cada execução representa um dia. Após o terceiro saque, uma 
mensagem de aviso deve informar ao usuário que restam poucos saques disponíveis. Ao encerrar a 
execução, o programa deverá apresentar um resumo contendo a quantidade de depósitos realizados, 
a quantidade de saques efetuados e o saldo final da conta. 

? Precisamos:
    ! - Menu;
    - Saldo;
    - Consultar saldo;
    - Depositar;
    - Sacar;
    - Sair;

? Requisitos:
    - Saques apenas de valores múltiplos de 5;
    - Não ultrapassar saldo disponível no saque;
    - Sempre listar o histórico;
    - Mostrar saldo apos cada operação;
    - Limite de saques 5;
    - Após o terceiro saque aparece um aviso;
    - Ao sair deverar mostrar o histórico de ações.

? Vai está no JS:
    - Função:
        consultarSaldo();
        depositar();
        sacar();
        saida();


*/
let sistemaAtivo = true;
let historico = []
let saldo = 1000;
let entrada = document.querySelector(".entrada")
let saida = document.querySelector(".saida")
// ? 1º Botão
    // Consultar saldo
    function consultarSaldo() {
        if (!sistemaAtivo) {
        alert("O sistema foi encerrado.");
        return;
        }
        historico.push(
            `Consulta de saldo | Saldo: R$ ${saldo.toFixed(2)}`
        );
        saida.innerHTML = `
        <h4> ---- SALDO: ---- <h4> <br>
        <p> - Saldo: R$ ${saldo.toFixed(2)} </p>
        `
        return `Saldo: R$ ${saldo.toFixed(2)}`
    }

// ? 2° Botão
    // Deposito
    function depositar() {
        if (!sistemaAtivo) {
        alert("O sistema foi encerrado.");
        return;
        }

        entrada.innerHTML = `
        <form>
        <label for="information"> <h4> Insira o valor que deseja depositar: </h4> </label> 
        <input type="number" id="valorDeposito" min="0">
        <button type="button" onclick="calcularDeposito()">
        Inserir Deposito
        </button>
        `
    }
    
    function calcularDeposito () {
        let valorDeposito = Number(document.getElementById("valorDeposito").value)
        saldo = valorDeposito + saldo;
        historico.push(`Deposito de: R$ ${valorDeposito.toFixed(2)} | Saldo: R$ ${saldo.toFixed(2)}`)
        saida.innerHTML = `
        <h4> ---- DEPOSITO: ---- </h4> <br>
        Deposito de: R$ ${valorDeposito.toFixed(2)}
        <p>Feito com SUCESSO!!!!</p>
        ${consultarSaldo()}
        <h4> ---- HISTÓRICO ---- </h4>
        ${historico.join("<br><br>")}
        `
    }

// ? 3°Botão
    // Saque
    let limite = 0

    function sacar() {
        if (!sistemaAtivo) {
        alert("O sistema foi encerrado.");
        return;
        }

        entrada.innerHTML = `
        <form>
        <label for="information"> <h4> Insira o valor de saque que seja multiplo de 5. Ex.: 5, 10, 15, etc... </h4> </label>
        <input type="number" id="valorSaque" min="0">
        <button type="button" onclick="calcularSaque()">
        Sacar
        </button>
        </form>
        `
    }
    
    function calcularSaque() {
        if (limite >= 5) {
            alert("Você atingiu o limite de 5 saques!");
            return;
        }

        let valorSaque = Number(document.getElementById("valorSaque").value)
        
        if (valorSaque <= 0) {
            saida.innerHTML = `
            <h2>Valor inválido</h2>
            <p>Digite um valor maior que zero.</p>
        `;
        return;
        }
        
        if (valorSaque % 5 !== 0) {
        saida.innerHTML = `
        <h2>Valor inválido</h2>
        <p>O valor precisa ser múltiplo de 5.</p>
        <p>Exemplos: 5, 10, 15, 20 e 25.</p>
        `;
        return;
    }

    if (valorSaque > saldo) {
        saida.innerHTML = `
        <h2>Saldo insuficiente</h2>
        <p>Saldo disponível: R$ ${saldo.toFixed(2)}</p>
        <p>Digite um valor menor ou igual ao saldo.</p>
        `;
        return;
    }
    
    saldo -= valorSaque;

    limite++

    historico.push(
        `Saque de: R$ ${valorSaque.toFixed(2)} | Saldo: R$ ${saldo.toFixed(2)}`
    );

    saida.innerHTML = `
        <h2>Saque realizado</h2>
        <p>Valor sacado: R$ ${valorSaque.toFixed(2)}</p>
        <p>Saldo atual: R$ ${saldo.toFixed(2)}</p>

        <h4>---- HISTÓRICO ----</h4>
        ${historico.join("<br><br>")}
    `;

    if (limite === 3) {
        alert("Faltam apenas 2 saques restantes!");
    }

    if (limite === 5) {
        alert("Você atingiu o limite de 5 saques!");
    }

    }

// ? 4°Botão
    // Saida
    function sair() {
        sistemaAtivo = false;

        entrada.innerHTML = "";
        if (historico.length === 0) {
        saida.innerHTML = `
            <h2>Obrigado por utilizar nosso banco!</h2>
            <p>Nenhuma operação foi realizada.</p>
            <h3>Saldo final: R$ ${saldo.toFixed(2)}</h3>
        `;
        return;
    }

        saida.innerHTML = `
            <h2>Obrigado por utilizar nosso banco!</h2>
            <h3>Saldo final: R$ ${saldo.toFixed(2)}</h3>
            <h3>Histórico de ações</h3>
            ${historico.join("<br><br>")}
        `;
    }