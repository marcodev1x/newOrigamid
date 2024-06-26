//Arrays em JavaScript

const arr = [
  function nameTag(nome) {
    console.log(nome);
  },
];

const arr2 = [
  1,
  2,
  3,
  4,
  ["Conta 1", "Conta 2", "Conta 3"],
  { cor: "Preto", secondary: "#ccc" },
];

console.log(arr2[5].secondary); //Retornando o objeto
console.log(arr2[4][1]); //Retornado um array dentro de um array. Necessário selecionar o array (no idx 4) e selecionar o idx dentro desse array secundário.

//É possível substituir valores em arrays.

const carros = new Array("Ford", "Fiat", "Chevrolet");

carros[0] = "Mitsubishi";
carros[10] = "Mercedes-benz"; //Criei no index 10, ou seja: Deixou vários espaços vazios dentro do array (Que o deixam um pouco lento.) value empty.

carros.forEach((item) => {
  console.log(item);
});

console.log(carros.length);

//É possível transformar objetos NodeList, HTMLList, entre outros array-like em um array, com o método Array.from()

const getLIs = document.querySelectorAll("li");

const newArrLIs = Array.from(getLIs);
console.log(newArrLIs); //Tornou-se uma array, após o uso do método Array from em um item NodeList

//Método verificar se um item é ou não um Array, retornado um valor booleano

console.log(Array.isArray(newArrLIs)); //True, transformei num Array
console.log(Array.isArray(getLIs)); //False, é uma NodeList

//Método sort(). O método sorte é responsável por, quando são valores em strings, arrumá-los em ondem alfabética.

const comidas = ["Pizza", "Arroz", "Feijão", "Tubaína", "Iogurte"];
console.log(comidas.sort());

//Método unshift() adiciona itens no INÍCIO da array.
//Método push() adiciona itens no FINAL da array.

comidas.push("Pão de forma"); //FINAL do arr
comidas.unshift("Margarina"); //Início do arr
console.log(comidas.sort());

//Método shift() remove o item INICIAL da array e retorna o mesmo.
//Método pop() remove o item FINAL da array e retorna o mesmo.

console.log(comidas.pop()); //Tubaína removida
console.log(comidas.shift()); //Arroz removido

//Método reverse, trás a array de maneira invertida.
console.log(comidas.reverse());

//--- Array pt.2
const carrosSplice = ["Ford", "Fiat", "VW", "Honda"];

//Método splice(). Com o slice, podemos adicionar e remover itens propriamente no meio de um array.
//Não necessariamente é preciso removê-los, é possível adicionar sem removê-los.
//O slice possui parâmetros peculiares a serem passados, começando com o index (number), a quantidade que vamos remover (number) e o que queremos passar pra dentro do array (itemAdd).

carrosSplice.splice(3, 1, "Fusca", "Elantra", "Cruze");
//Adicionado após o index 2, no index 3.
console.log(carrosSplice);

//Método copyWithin(); Serve para repetir valores num array, os parâmetros passados são:
//Dados alvo,
["Item1", "Item2", "Item3", "Item4"].copyWithin(2, 0, 3);
// ['Item1', 'Item2', 'Item1', 'Item2']

["Item1", "Item2", "Item3", "Item4"].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']

//Método fill() "completa" um array com base num item informado. É possível começar por um index, inserindo-o ao final do construtor do método.

carrosSplice.fill("Maçã"); //Carros agora são todos maçãs.
carrosSplice.fill("Guaraná", 3); // A partir do 3 agora, todos são guaraná. Do 0, 1, 2 todos são "Maçã".
carrosSplice.fill("Beterraba", 4, 6); //A partir de agora, os dois últimos valores (4 & 5) são beterraba. Com início e final setados no construtor do método.
console.log(carrosSplice);

//Método concat(), concatena valores de arrays para dentro de um, tornando-se um só.

const passearCom1 = ["Barco", "Navio", "Avião"];
const passearCom2 = ["Carro", "Bike", "Helicóptero"];
const fullPassearCom = [].concat(passearCom1, passearCom2);

fullPassearCom.forEach((item) => {
  console.log(item);
});

//---- Exercíciossss ----
const comidasss = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
//Removendo o primeiro item;
const firstArrItem = comidasss.shift(); //Método shift() para remover itens do início da array.
console.log(firstArrItem);

// Remova o último valor de comidas e coloque em uma variável
//Removendo o último item;
const lastArrItem = comidasss.pop(); //Método pop() remove o item do final da arr retornando-o.
console.log(lastArrItem);

// Adicione 'Arroz' ao final da array
comidasss.push("Arroz"); //Método push() adiciona um item no final da arr.
console.log(comidasss);

// Adicione 'Peixe' e 'Batata' ao início da array
comidasss.unshift("Peixe", "Batata"); //Método unshift() para adicionar itens no início da array
console.log(comidasss);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort()); //Método sort para ordenar em ordem alfabética
// Inverta a ordem dos estudantes

// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes("Joana")); //Método includes(), verifica se existe um valor com um boolean -> Neste caso, true.
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes("Juliana")); //Falsy.
let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split("div"); //Split remove o item separador selecionado.
html = html.join("li"); //Join adiciona um item adicionado ao construtor do próprio método, substituindo o removido com o split.
html = html.split("section");
html = html.join("ul");
console.log(html);

const carrosss = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
const newcars = carrosss;
console.log(newcars);
carrosss.pop();
