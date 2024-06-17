//Prototype é um objeto adicionado como propriedade de uma função quando ela é criada. Ou seja, ele transforma uma função num objeto para visualização.
//!* Importante: Sempre uma função apenas para receber a propriedade prototype.

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = () => {
    //É assim que se cria um método criando uma classe em função (Com this.nomeMétodo).
    console.log("Andou");
  };
}

const user = new Pessoa("Marcielo", 38);

console.log(Pessoa.prototype); //Vem do objeto "Pessoa" criado na function acima.

//Resumindo a história: É possível transformar uma função em um objeto, fazendo com que a função fique com métodos e
//Propriedades de um objeto.

Pessoa.prototype.addNew = "Novo Add"; //-> Funcionando como um objeto.
console.log(user.addNew); //Agora, virou uma propriedade do objeto User, criado através da função-objeto Pessoa.

//Adicionando um método agora.
Pessoa.prototype.trabalhar = () => {
  console.log(`${user.nome} Trabalhando!`);
};
user.trabalhar(); //Método adicionado ao objeto user.

//O prototype faz um objeto herdar métodos e propriedades de um protótipo, como:
console.log();

//---- Prototype pt.2 ----

//A parte de "Prototype" se refere a demonstrar como Strings, numbers, arrays e outros tipos herdam métodos e propriedades de um protótipo.
//O prototype dentro desses itens basicamente são um resguardar de métodos e propriedades que podem ser utilizados para a manipulação de itens!
//Como por exemplo:

const arr = [1, 2, 3, 4];
console.log(Array.prototype); //Aqui, vemos os métodos e propriedades de um protótipo de Array. Ele retorna inúmeros, como o Map, pop, push...
//Para verificar métodos e propriedades de um tipo, basta chamar pelo tipo e inserir o .prototype.
console.log(arr.pop()); //Remove o último valor e retorna.
console.log(arr);

//Mais uma vez ->
const StringProto = "Stringer Prototyper";
console.log(String.prototype); //Retornando métodos de uma String, na qual posso usar na minha variável com string acima. Como: Length, toLowerCase, toUpperCase, charAt...
console.log(StringProto.toUpperCase()); //Método visto no prototype de uma String, retornando a string em caixa-alta.

const testString = new String("Teste de String 84x");
console.log(testString);
console.log(testString.toUpperCase());

const Carro = {
  marca: "Ford",
  preco: 2000,
  andar() {
    return true;
  },
};

console.log(typeof Carro); //É um objeto.
console.log(Carro.marca);

//É importante entender o que cada item retorna para assim trabalhar com métodos e propriedades do tipo retornado.

//---- Exercíciossssssssssssssssss ----
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function setPessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

setPessoa.prototype.fullName = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const exercicioPessoa = new setPessoa("Jair Inácio", "Bolsilva", 56);

console.log(exercicioPessoa.fullName());

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList));
//ForEach
//Item
//Length
//toString
//hasOwnProperty
console.log(Object.getOwnPropertyNames(HTMLCollection));
//Length
//Item
//toString
//valueOf
//hasOwnProperty

console.log(Object.getOwnPropertyNames(document));
//querySelector
//getElementBy
//Append
//Fullscreen
//hasFocus

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; //HTMLLIELEMENT
li.click; //Function
li.innerText; //String
li.value; //Number
li.hidden; //Boolean
li.offsetLeft; //Number
li.click(); //Undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
//String
