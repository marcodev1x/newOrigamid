//Seleção de elementos no DOM, do objeto ELEMENT

//Selecionar pelo ID
const getH1 = document.getElementById("animais"); //->Pega elementos pelo nome do ID.

// A construção é a seguinte: Definimos a requisição em uma variável, depois chamamos o DOM e o método "getElementByID("idvalue")".

console.log(getH1); //Retorna a section animais
//Caso não exista o item selecionado, o retorno será null.

//---

//É possível selecionar também pelo ClassName do elemento!
const getAnimals = document.getElementsByClassName(".animais"); //Importante detalhar que por ser um seletor CSS precisa do ".".

//Seguindo a ideia de cima, é possível pegar elementos que estejam dentro de uma TAG HTML, como o ul, nav, a, p, h1, h2, h3...

const ul = document.getElementsByTagName("ul");
console.log(ul); // -> Retorna a lista de ULs do site.
console.log(ul[0]); //Funciona como uma array, onde podemos visualizar informando o INDEX.

//Um dos mais utilizados é o querySelector! Com o querySelector, podemos requisitar diversos tipos de dados do site. Para uma class, utlizar o "." e o nome, para um ID utilizar o "#" e o nome, é possível selecionar uma TAG HTML também (UL, LI, P, H1, H2, H3, H4)... Também é possível selecionar atributos HTML, como o HREF.

//Com o querySelector, ele puxa apenas o PRIMEIRO elemento que encontrar que tenha a requisição encontrada. Ou seja, se requisitar todos os "H1", encontrará apenas o primeiro H1 do site. Diferente do seu irmão, querySelectorAll que retorna a lista toda.

const queryCss = document.querySelector(".grid-section"); //Seleciona o "grid-section" com a classe do elemento. Seleciona sempre o primeiro.
console.log(queryCss);

const queryId = document.querySelector("#animais");

console.log(queryId); //Seleciona no DOM com o querySelector o "animais" pelo ID do elemento. Seleciona sempre o primeiro.

const queryTag = document.querySelector("p");

console.log(queryTag); //Seleciona no DOM com o querySelector o primeiro "p" do site.

//Também é possível realizar uma requisição de um item disponível apenas dentro de um elemento pai! Como por exemplo, selecionar um H1 que está dentro de uma section específica. Exemplo:

const getH1Solo = document.querySelector(".getH1solo");
const getH1Inside = getH1Solo.querySelector("h1");

console.log(getH1Inside.textContent);

//No código acima, fiz a requisição do elemento SECTION específico no HTML e dentro dele realizei uma requisição das TAGS H1 dentro dessa SECTION! Assim pude retornar a mesma.

//Selecionando links extornos
const linkExtornos = document.querySelector('[href^="#"]'); //Retorna o primeiro link externo do site que começa com o "#"; Importante selientar que para construir essa requisição é necessário: Iniciar com aspas simples (''), Abrir chaves [], adicionar o atributo (href) e para dizer que é tudo que começa com "#", é necessário adicionar o chapéu (^) antes do ="#".
console.log(linkExtornos);

//querySelectorAll -> Retorna todos os itens selecionados, isso quer dizer que: Selecionado "H1", o retorno será todos os H1s do site, diferente do seu irmão querySelector que retorna apenas o primeiro.

const getAllH1 = document.querySelectorAll("h1");
console.log(getAllH1); //-> Retorna uma NodeList com todos os lugares com !*"h1"

//É possível selecionar especificadamente um item (como se fosse um array) nessa NodeList, exemplo:

console.log(getAllH1[1]); //-> Retorna o que está no index 1.

//--- SELEÇÃO ELEMENTOS pt.2 ---

//-> Diferença de uma lista HTML (getElement) de uma NodeList (querySelector). O querySelector que transforma tudo numa NodeList trás mais métodos interativos e interessantes para um element.

const gridSection = document.getElementsByClassName("grid-section"); //A pior

const gridQuery = document.querySelectorAll(".grid-section"); //A melhor para se utilizar

console.log(gridSection);
console.log(gridQuery);

gridQuery.forEach((item) => {
  console.log(item);
});

//Só é possível utilizar certos métodos em itens que realmente são array, não em um array like como o "gridSection", que exibe uma collection HTML. Para converter em um array é necessário:

const transformArray = Array.from(gridSection);

transformArray.forEach((item) => {
  //Agora é possível utilizar o forEach na Collection HTML
  console.log(item);
});

//--------- EXERCÍCIOS --------
// Retorne no console todas as imagens do site
const getAllImg = document.querySelectorAll("img"); //Seleciona todas as tags img do site!
getAllImg.forEach((item) => {
  console.log(item); //All ok
});

// Retorne no console apenas as imagens que começaram com a palavra imagem
const getSrc = document.querySelectorAll('img[src^="./img/imagem"]'); //FORMATO CURIOSO MAS OK
getSrc.forEach((item) => {
  console.log(item);
});

// Selecione todos os links internos (onde o href começa com #)
const getHash = document.querySelectorAll('a[href^="#"]'); //All ok
getHash.forEach((item) => {
  console.log(item);
});
// Selecione o primeiro h2 dentro de .animais-descricao
const getFirstH2 = document.querySelector(".animais-descricao");
const getAnimalsH2 = getFirstH2.querySelector("h2");
console.log(getAnimalsH2); //All ok; Selecionar primeiro o pai e depois o filho com a ajuda do pai. (getFirstH2 -> getAnimalsH2)

// Selecione o último p do site
const pFinal = document.querySelectorAll("p");
console.log(pFinal[pFinal.length - 1]); //All ok. Mas também posso fazer do jeito abaixo:

const loudP = document.querySelector(".copy");
const copyP = loudP.querySelector("p"); //All ok
console.log(copyP);
