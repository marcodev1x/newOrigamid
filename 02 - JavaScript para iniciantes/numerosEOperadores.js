//Tipos de números

var idade = 19; //Number inteiro.
var idadeString = "19"; //String, não um número. Ou seja, um texto.
var pi = 3.14; //Number decimal
var exp = 2e10; //Trás o 2 com mais 10 zeros no final, ou seja: 20000000000
console.log(typeof pi);
console.log(exp); //Retorno: 20000000000

//Operadores aritméticos
var calculoMais = 19 + 19; //Soma os dois números.
console.log(calculoMais);
var calculoMenos = 19 - 18; //Subtrai os dois números.
console.log(calculoMenos);
var calculoMultiplicar = 4 * 2; //Multiplica os dois números.
console.log(calculoMultiplicar);
var calculoDivisao = 10 / 2; //Divide os dois números.
console.log(calculoDivisao);
var calculoModulo = 14 % 5; //Calcula o módulo. É o que sobra numa divisão! Tipo: 10/5 sobra 0, como tem 4 sobrando e não é divisível fica 4.
console.log(calculoModulo);
var calculoExpoente = 4 ** 2; //Calculo exponencial. (Mesma coisa que 4 ao quadrado. = 16)
console.log(calculoExpoente);

//Verificando NaN - Not a Number!

var numeroInit = 78;
var typeCalculo = "kg";
var pesoTotal = numeroInit + typeCalculo; //Resulta em 78kg. Concatena um número e uma String. Devido ao mais! Agora se fosse 78/kg teríamos um problem NaN.
var dividindoPeso = numeroInit / typeCalculo;
console.log(pesoTotal);
console.log(dividindoPeso); //Not a Number, ou seja, NaN.
console.log(isNaN(dividindoPeso)); //Verifica se é NaN. Retorno nesta: True!.

//------------------------------------------PRÓXIMA AULA DE Números e operadores---------------------------------------

//A ordem matemática importa!

//-> Multiplicação e divisão possuem prioridade em cálculos matemáticos e pela lógica devem ser realizadas primeiro
var conta = 120 - 30 + (40 * 2) / 2 + 10; // <- 140
console.log(conta);

//-> Itens entre parênteses também são realizados primeiro, inclusive com maior prioridade do que multiplicação e divisão.
conta = 120 - 30 + (40 * 2) / (4 + 10);
console.log(conta);

//-> Operadores artiméticos unários, o classico index++
//-> Nesses operadores, realizasse o valor do i + 1. Porém, o cálculo correto é: i = i + 1.

for (let i = 0; i <= 10; i++) {
  //Incrementa o i + 1 = i por 10 vezes nesse laço de repetição
  console.log(i);
}

//-> Operadores unários "- ou +" antes de chamar uma variavel.
var idadeUser = 18;

console.log(-idadeUser); //Transforma o valor em negativo, por conter o menos.

//-> ---------------------EXERCÍCIOS OPERADORES E NÚMEROS----------------------------------------------------------------------

// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20; //35 É O RESULTADO <- Correto!
console.log(total);

// Crie duas expressões que retornem NaN
console.log(80 / "20 kg");
console.log(120 * "21.5 IMC");

// Somar a string '200' com o número 50 e retornar 250
console.log(+"200" + 50);

// Incremente o número 5 e retorne o seu valor incrementado
var num5 = 5;
num5++;
console.log(num5);

// Como dividir o peso por 2?
var numero = +"80" / 2;
var unidade = "kg";
var peso = numero + unidade; // '80kg'

console.log(peso);
