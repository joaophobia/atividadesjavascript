
//atividade 1

let vendidos = 35;
let meta = 30;

if (vendidos > meta) {
    console.log ("Ela superou a meta.")
}
else if (vendidos == meta) {
    console.log ("Ela antigiu exatamente a meta!")
}
else {
    console.log ("Ela não antigiu a meta.")
}

//atividade 2

let valorpedido = 180;
let clientevip = true;

if (valorpedido > 200 || clientevip == true){
    console.log("Cliente tem direito ao frete grátis.")
}
else {
    console.log ("Cliente não tem direito ao frete grátis.")
}


// Desafio 03
// Desconto Especial

const valorServico = 779;
const desconto = 10;
const clienteAntigo = true;

let valorFinal = null;

if(valorServico >= 500 &&
    clienteAntigo) {

    const calculoDesconto = (valorServico * desconto) / 100;
    valorFinal = valorServico - calculoDesconto;

    console.log("Desconto Especial");
    console.log("Valor Serviço: R$ " + valorServico);
    console.log("Desconto: " + desconto + "%");
    console.log("Total a Pagar: R$ " + valorFinal);
    console.log("Agradecemos a Preferência! \n");

} else {
    console.log("Valor Serviço: R$ " + valorServico);
    console.log("Obrigado e Volte Sempre! \n");
}

// Desafio 04
// Horário Disponível

const horarioDisponivel = true;
const pacienteCadastrado = false;

if(horarioDisponivel && 
    pacienteCadastrado) {
    
    console.log("Agendar Consulta");
    console.log("Por favor, selecione uma data para agendamento da consulta. \n");

} else if(horarioDisponivel === false &&
            pacienteCadastrado) {

    console.log("Agendar Consulta");
    console.log("Sem Horário Disponível no Momento. \n");

} else {

    console.log("Agendar Consulta");
    console.log("Paciente Não Cadastrado. \n");
}


