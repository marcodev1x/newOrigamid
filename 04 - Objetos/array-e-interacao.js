//Começando o aprofundamento em array e iteração.

const carros = ["Civic", "Cruze", "Skyline", "Lancer", "Prisma"];

//Método forEach() de iteração

carros.forEach((item, idx, arr) => {
  //Para alterar valores num array com forEach, é necessário declarar o array e realizar a seguinte instrução:
  arr[0] = "Troca de valor"; //Index 0 (Civic) tornou-se esse valor.
  console.log(item, idx, arr);
});

//No método forEach acima, o item retorna os itens presentes na array (Civic, Cruze...), o index retorna o index em que se encontra tais itens (0 Civic, 1 Cruze...)
//O arr retorna o próprio array completo.

//Para modificar o array, o melhor não é o forEach, por que ele apenas itera e retorna o array.
//Utilizando o map(), podemos inserir o valor dentro de uma variável, que não é possível com um forEach().

const renderEach = carros.forEach((item) => {
  console.log(item);
});

console.log(renderEach); //Undefined, não é possível utilizar o forEach() dentro de uma variável.

const render = carros.map((item) => {
  return item.toUpperCase(); //Retornando o item (itens da array, os carros) em upperCase. Manipulando assim os mesmos. //É necessário utilizar o return aqui para retornar modificações na array.;
});

console.log(render); //Retorna o array iterado. Render recebeu a array carros.

//Seguindo com o map...

const numerosArr = [1, 4, 6, 28, 1, 4, 2];

const multiplyValues = numerosArr.map((item) => {
  return item * 2;
});

console.log(multiplyValues); //Agora, atribuído a variável multiplyValues, o array passa a obter ordens do .map(), que no caso foi o item valer x2 no return.

//Aprendendo .map() com objetos;
//com o map(), é possível interagir com valores de um objeto (que está dentro de um array) [{}] e inserí-los numa variável.

const aulas = [
  {
    nome: "Jsxs1",
    min: 24,
  },
  {
    nome: "Aula4NodeJsEmprego14kmensaissalario",
    min: 38,
  },
  {
    nome: "Aula390IDL",
    min: 11,
  },
];

const aulasReprod = aulas.map((item, idx, arr) => {
  return arr[idx].nome;
});

console.log(aulasReprod); //Retornando a propriedade .nome dos itens de objeto do array

//Puxando .map() como uma função dentro de um .map() "?"

const nomesAula = (aula) => {
  return aula.nome;
};

const aulasReturno = aulas.map(nomesAula);

console.log(aulasReturno);

//Aprendendo reduce(), agora.

const aulasred = [10, 25, 30];

const reduceAulas = aulasred.reduce((acumulador, item, index, arr) => {
  return (acumulador += item);
}, 0);

console.log(reduceAulas);

//O reduce() é um método em que é possível somar valores, concatenar strings e manipular arrays de uma maneira muito específica. Com o acumulador geralmente iniciando em 0, podemos utilizar o reduce()
//Como no exemplo acima para somar valores 10,25,30.

//Mini exercício de reduce(), verificar o maior valor de um arr.

const values = [
  20, 30, 80, 10, 102, 48, 1049, 10299, 1029994, 0, 1, 3, 5, 8, 1, 90,
];

const verifyHighValue = values.reduce((acumulador, values) => {
  return acumulador < values ? values : acumulador;
});

const strings = ["String1", "I've got my eye on you", "Sex on the beach"];

const concatenar = strings.reduce((acc, values) => {
  //Método reduce() concatenando os valores do array.
  return acc + "" + values;
});

console.log(verifyHighValue);
console.log(concatenar);

//Treinando acumulador para entender mais...

const valuesReduction = [1, 8, 9, 10, 90, 24, 22];

const valuesByred = valuesReduction.reduce((acumulator, item) => {
  return item > acumulator ? item : acumulator;
});

const compare = ["Maça", "Maçã", "Massa", "Maçã", ""];

console.log(valuesByred);

//---- Arrays e iterações II ----

//Podemos retornar outros valores com o reduce().

const listAulas = aulas.reduce((acc, item, idx) => {
  acc[idx] = item.nome; //Variável que acumula os nomes dentro de si, agora é possível retornar os nomes.

  return acc;
}, {}); //Acc (acumulador) serve como uma variável que retornará os nomes acoplados dentro de si, dos objetos do arr aulas.

console.log(listAulas);

//DISCLAIMER: O acumulador nada mais é que o que o nome diz, ele acumula os valores da array possibilitando a execução de cálculos, comparações, concatenações, retornos variados...

//Método some(), basicamente: Algo. Caso existe algo que será verificado, retorna true. Caso não, false.

const verifySome = compare.some((fruitCompare) => {
  return fruitCompare === "Massa";
});

console.log(verifySome);

//Método every(), se todos os itens presentes forem true, retorna true. Caso não seja, retornará false.
const checkEvery = compare.every((item) => {
  return item;
});

console.log(checkEvery); //Retorna false, por que no arr existe o valor "" que é vazio, ou seja, falsy.

//---- Arrays e interações III ----

//Método find() e findIndex(). Estes métodos verificam um valor se é booleano ou não. O find retorna o valor true, no qual for comparado e o primeiro a retornar true.
//O findIndex é parecido, mas retorna apenas o index e não o valor do item em si.

const verifyFind = carros.find((item) => {
  return item.startsWith("S");
});

console.log(verifyFind); //Retorna Skyline, verificando o primeiro item que começa com S e é true.

const verifyIndex = carros.findIndex((item) => {
  return item.startsWith("S");
});

console.log(verifyIndex); //Retorna 1, que é o index de "Cruze" (Tinha removido o Civic acima).

//Método filter(). O filter é uma maneira de filtrar valores truthy dentro de uma variável. Será atribuído valor a variável apenas os valores truhy. O Filter literalmente filtra valores truthy de falsy.
const carros1x = [
  "Civic",
  "Cruze",
  "Skyline",
  "Lancer",
  "Prisma",
  null,
  "Fusca",
  undefined,
  "",
  0,
];
const arrFiltrada = carros1x.filter((item) => {
  return item;
});

console.log(arrFiltrada);

//Mini exercício filter

const filterHigher = aulas.filter((item) => {
  return item.min > 12; //Filtra aulas com maiores de 12 minutos, retornando-as na variável filterHigher.
});

console.log(filterHigher);

//---- Arrays e interações IV ----

//--- Exercíciossssssssssss ----

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll(".curso");
const transformArr = Array.from(cursos);

const cursosArr = transformArr.map((item, idx) => {
  const title = item.querySelector("h1").innerText;
  const descricaoCurso = item.querySelector("p").innerText;
  const qntdAulas = item.querySelector(".aulas").innerText;
  const horasAulas = item.querySelector(".horas").innerText;
  item = {
    titulo: title,
    descricao: descricaoCurso,
    qntdAulas: qntdAulas,
    horasAulas: horasAulas,
  };
  return item;
});

console.log(cursosArr);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const listMoreThan100 = numeros.filter((item) => {
  return item > 100;
});

console.log(listMoreThan100); //Retorna os valores 333, 122, 322, que são maiores que 100.

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const verifyBaixo = instrumentos.some((item) => {
  return item === "Baixo";
});

console.log(verifyBaixo); // Retorna true, por que Baixo existe.

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

const removeSifra = compras.map((item) => {
  item.preco = item.preco.replace("R$", "").replace(",", ".").trim();
  item.preco = +item.preco;
  return item.preco;
});

const somarTotal = removeSifra.reduce((acc, item) => {
  return (acc += item);
}, 0);

console.log(removeSifra);
console.log(somarTotal);
