// Atividade 7

///exercício 1 

let sabores = ["Chocolate", "Morango", "Baunilha", "Leite Ninho"];
console.log("Sabores Disponiveis: ");
console.log(sabores);

sabores.push("Red Velvet");
sabores.pop();
console.log("Quantidade de sabores disponiveis: " + sabores.length);

// exercício 2 

let clientes = ["João", "Samuel", "Carlos", "Luiz", "Maria"];
console.log("Primeiro cliente: " + clientes[0]);
console.log("Último cliente: " + clientes[clientes.length - 1]);

console.log("Carlos está na lista? " + clientes.includes("Carlos"));
console.log("Posição de Maria: " + clientes.indexOf("Maria"));

// exercício 3

let pedidosManha = ["Bolo de Chocolate", "Bolo de Morango", "Bolo de Leite Ninho"];

let pedidosTarde = ["Bolo de Baunilha", "Bolo de Red Velvet", "Bolo de Coco"];

let todosPedidos = pedidosManha.concat(pedidosTarde);

console.log("Pedidos do dia: ");
console.log(todosPedidos);


// Desafio 04
// Controle de Serviços

console.log("Controle de Serviços");

const servicos = [
    "Ajuste de Vestido",
    "Barra de Calça",
    "Reforma de Camisa",
];

servicos.unshift("Abotoamento de Roupa");
servicos.splice(1, 1);

console.log(servicos)


// Desafio 05
// Agenda de Pacientes

console.log("Agenda de Pacientes");

const pacientes = [
    "Alfredo",
    "Lucas",
    "Maria",
    "Victor",
];

for(let i = 0; i < pacientes.length; i++) {
    console.log(`Índice: ${i} | Nome: ${pacientes[i]}`);
}

// Desafio 06
// Horários de Atendimento

console.log("Agenda de Atendimento");

const agenda = [
    ["10:00", "13:00", "16:00"],
    ["10:30", "13:30", "16:30"],
];

for(let dias = 0; dias < agenda.length; dias++) {
    console.log("---Dia---");
    for(let horarios = 0; horarios < agenda[dias].length; horarios++) {
        console.log("Horário");
        console.log("[" + dias + "] [" + horarios + "] = " + agenda[dias][horarios]);
    }
}
