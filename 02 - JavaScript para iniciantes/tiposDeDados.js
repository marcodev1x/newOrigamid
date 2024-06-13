//Dados primitivos, exceto o objeto.

var nome = "Marco Antônio"; // String (TEXT)
var idade = 19; // Number (Num, Int)
var trueFalse = true; // Boolean (True or false)
var time; // Undefined, indefinida.
var comidaPredileta = null; //Null, nula
var simbolo = Symbol(); //Símbolo, symbol
var objeto = {
  //Objeto, object
  nome: "Marco",
};

console.log(typeof time);
console.log(typeof objeto + typeof simbolo); //typeof informa o tipo primitivo da variável. Retorno: object/symbol

//É possível concatenar strings e valores primitivos.
console.log(nome + " - " + idade); //Retorno: Marco Antônio - 19

//Usando Template String!! Importantíssimo.

console.log(`Olá, bem vindo ${nome}`); //Em Template String usasse aspas especiais e o "${}" para puxar uma variável desejada. <-
console.log(`Aqui diz que você tem ${idade} anos.`);
console.log(
  `O seu time preferido é ${time}. Opa! Aparentemente não existe. Que tal confirmá-lo?`
);
time = "Corinthians";
console.log(`Oba, vejo que você torce para o ${time}!`);

//--------------------Exercícios------------------------
// Declare uma variável contendo uma string

// Declare uma variável contendo um número dentro de uma string

// Declare uma variável com a sua idade

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas

// Coloque a seguinte frase em uma variável: It's time

// Verifique o tipo da variável que contém o seu nome

var setString = "String testing";
var numString = "10";
var idadeNumber = 19;

var nomeDeveloper = "Marco";
var sobreNomeDeveloper = "Antônio";

console.log(`${nomeDeveloper} ${sobreNomeDeveloper}`); //O MELHOR É ESTE! E RECOMENDADO.
//OU
console.log(nomeDeveloper + " " + sobreNomeDeveloper);

var requestUser = "It's time";

console.log(typeof nomeDeveloper); // Retorno: String
