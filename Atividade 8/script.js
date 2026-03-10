
// Desafio 01
// Cadastro de Cliente

console.log("Cadastro de Cliente");

const cliente = {
    nome: "Alexia Altman",
    tel: "(11) 97827-6420",
    favorito: "Bolo de Morango",
};

console.log("Nome: " + cliente.nome);

cliente["cidade"] = "Curitiba";

delete cliente.tel;

console.log(cliente);

// Desafio 02
// Cadastro de Produto

console.log("Cadastro de Produto");

const bolo = {
    sabor: "Baunilha",
    preco: "R$ 29,99",
};

const ingredientes = {
    massa: "Massa Branca",
    recheio: "Flocos",
};

const produtoFinal = {};

Object.assign(
    produtoFinal, 
    bolo, 
    ingredientes
);

console.log(produtoFinal);

// Desafio 03
// Cadastro de Serviço

console.log("Cadastro de Serviço");

const servico = {
    tipo: "Abotoamento de Roupa",
    preco: "R$ 19,99",
};

servico.preco = "R$ 24,99";

servico["prazoEntrega"] = "Até 3 Dias";

console.log(servico);



// exercício 4
let paciente = {
    nome: "Ana",
    idade: 28,
    problema: "Ansiedade"
};

let propiedades = Object.keys(paciente);

console.log("Dados da ficha do paciente: ")
console.log(propiedades)

// exercício 5

let costureira = {
    nome: "Luciana",
    experiencia: 5,
    especialidade: "Vestidos sob medida"
};

costureira.experiencia += 1;

console.log("Cadastro atualizado da costureira: ")
console.log(costureira)

//exercício 6

let terapeuta = {
    nome: "Luciano",
    especialidade: "Psicologia Clinica",
    cidade: "São Paulo"
};

let [nome, especialidade, cidade] =
Object.values(terapeuta);

console.log ("Informações do terapeuta: ")
console.log ("Nome: " + nome)
console.log("Especialidade: " + especialidade)
console.log("Cidade: " + cidade)