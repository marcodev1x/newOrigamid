//ForEach é essencial para percorrer uma NodeList, que é criada após uma seleção de uma lista HTML (querySelectorAll('value'))

const imgs = document.querySelectorAll("img");
imgs.forEach((i) => {
  console.log(i); //Imprime a NodeList de imgs do element HTML
});

//Também é possível imprimir outros itens dentro do ForEach, de maneira array. Imprimindo o item, o index e o array em si! Por exemplo:

imgs.forEach((i, index, arr) => {
  console.log(i, index, arr);
});

//Caso seja possível chamar um element pelo GetElements (que vira um array like caso possua mais de 1 element), é necessário transformá-lo em um array através de um método.

const getImgs = document.getElementsByTagName("img");

const transformArr = Array.from(getImgs);

transformArr.forEach((i, index, arr) => {
  console.log(i, index, arr);
});

console.log(imgs); //NodeList, manipulável como um array.
console.log(getImgs); //HTML List, não manipulável como um array e precisa ser transformado como alguns códigos acima.

//Arrow function é uma maneira de encurtar uma função anônima. Além de sua modernidade,

const getNovamenteImgs = document.querySelectorAll("img");

getNovamenteImgs.forEach((item, index) => {
  console.log(item, index); //A Arrow func encurta a função anônima.
});

//Caso a sua arrow function só tenha um parâmetro a ser passado, ela não precisa necessariamente de um parênteses o fechando. Assim:

getNovamenteImgs.forEach((item) => {
  console.log(item); //*! Apenas caso tenha UM parâmetro passado.
});

//-> Caso tenha dois ou mais parâmetros, é necessário o "()" para se realizar. Assim: ()=>{}

//-> Para uma função que retorna uma linha (assim como um if de uma linha), não é necessário abrir { "chaves" } para que o mesmo se execute. Exemplo:

getNovamenteImgs.forEach((item) => console.log(item)); //Funcionando!

//----- EXERCÍCIOSSSSSSSSSS -----
// Mostre no console cada parágrado do site

const getAllps = document.querySelectorAll("p"); //All ok, funcionando normalmente! Selecionei todos os Ps e os imprimi num forEach
getAllps.forEach((item) => {
  console.log(item);
});

// Mostre o texto dos parágrafos no console

getAllps.forEach((value) => {
  console.log(value.textContent); //All ok, peguei a seleção dos Ps e requisiei um forEach com console.log(textContext), que verifica o valor textual de cada P.
});

const imgsx = document.querySelectorAll("img");

imgsx.forEach((item, index) => {
  //Adicionado parênteses para caso de dois parâmetros
  console.log(item, index);
});

let i = 0;
imgsx.forEach(() => {
  //Adicionado parênteses para o caso de não ter nenhum parâmetro na arrow function. É necessário para o mesmo possa ser executado.
  console.log(i++);
});

imgsx.forEach(() => i++);
