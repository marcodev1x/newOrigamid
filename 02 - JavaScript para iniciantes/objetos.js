//Aprendendo sobre OBJETOS em JavaScript

const pessoa = {
  nome: "Marco Antônio Mendes dos Santos", //Aqui em objeto, criamos uma variável chamada pessoa que atribui especificações para algo.
  idade: 19,
  profissao: "Product Designer Developer",
  possuiFaculdade: true,
};

console.log(pessoa.nome + " - " + pessoa.profissao);

//---- MÉTODOS -----

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado; //<- this.lados devido a que está chamando o "lados (4)" presente no objeto. Para calcular perímetro é quantidade de lados * lado
  },
};

//------MÉTODOS VERSÃO ES6------
const quadrado6 = {
  lados: 6,
  area(lado) {
    return lado * lado; //-> VERSÃO ES6 mais fácil de ler e implementar
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

//Objeto são códigos reutilizaveis para te ajudar a realizar seu código.
console.log(Math.PI); //Math é um objeto nativo do JavaScript
console.log(Math.random() * 80);

console.log(quadrado6.lados);
console.log(quadrado6.area(6));
console.log(quadrado6.perimetro(8));

console.log(quadrado.lados); // 4
console.log(quadrado.area(5)); // 25
console.log(quadrado.perimetro(5)); // 20

//------------------- AULA OBJETOS pt.2-----------------------------]

const marco = {
  nome: "Marco Antônio Mendes dos Santos",
  profissao: "Product Designer Developer",
  estuda(value) {
    if (value) {
      return this.nome + " " + "Está estudando";
    } else {
      return this.nome + " " + "Não está estudando";
    }
  },
};

console.log(marco.estuda("Estudando agora"));

const menu = {
  width: 800,
  heigth: 65,
  backgroundColor: "#ccc",
};

const bgColor = menu.backgroundColor; //<- Adicionando uma propriedade de um objeto a uma variável.
console.log(bgColor); //->Retorna "#ccc"

//Também é possível alterar o valor da propriedade através de uma chamada assim como uma variável.
menu.backgroundColor = "#fff";
console.log(menu.backgroundColor); //->Retorna "#fff"

//Também, por fim, é possível adicionar propriedades sem necessariamente estar mexendo por dentro do objeto.
menu.number = 128;
console.log(menu); //-> Retorna as propriedades com o "Number" adicionado. (128).

//Um objeto já é um objeto mesmo sem existir, trazendo propriedades únicas para se utilizar.
console.log(Object());

//"Entender uma linguagem é entender como suas propriedades e heranças funcionam, isso é realmente entender JavaScript."
//Exemplo ->
console.log(menu.backgroundColor.length); //Propriedade herdada que conta a quantidade de caracteres presentes.

//-------- EXERCÍCIOS --------

// Crie um objeto com os seus dados pessoais
const PDDeveloper = {
  nome: "Marco Antônio",
  sobrenome: "Mendes dos Santos",
  idade: 19,
  cpf: "148.764.239-38",
  profissao: "Product Designer Developer",
  endereco: "Av. São Pedro 984, Roncador/PR", //All ok
};

// Deve possuir pelo menos duas propriedades nome e sobrenome

// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(`Nome completo: ${PDDeveloper.nome} ${PDDeveloper.sobrenome}`); //All ok
// Modifique o valor da propriedade preco para 3000

var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;
console.log(carro.preco); //All ok

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

const Cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  verHomem(homem) {
    if (homem)
      return "AUAUAUAUAUAUAU HOMEM AVISTA AUAUAUAU"; //Late ao ver um homem
    else return "Sem homem aqui.";
  },
};

console.log(Cachorro.verHomem("Eduardo Pianho"));
