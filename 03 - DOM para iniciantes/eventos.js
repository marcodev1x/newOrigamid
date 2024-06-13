const img = document.querySelector("img");

//Corpo -> Variável de chamada, chamada do método addEventListener e duas funções. Uma de ação "click", "hover", entre outros...
//Por fim, uma função anônima que será responsável por ditar o que acontece após o primeiro evento ocorrer (Que é o de click).
img.addEventListener("click", () => {
  console.log("click");
});

//-> É uma boa prática criar a função fora do escopo e inseri-la dentro do evento.

const insideFunction = (event) => {
  console.log(event.target); //Existem várias propriedades que podem ser inseridas aqui, apesar dos snippets não mostrarem. Para vê-las, é necessário visualizar o console developer no navegador.
  console.log(event.altKey);
  console.log(event.layerX);
  console.log(event.srcElement);
};

img.addEventListener("click", insideFunction); //Código limpo e simples de entender.

//--- Add animais-lista
const addAnimals = document.querySelector(".animais-lista");

const callbackLista = (event) => {
  console.log(event.target);
};

addAnimals.addEventListener("click", callbackLista);

//--- -> Metódo interessante! Event.preventDefault()

const linkExterno = document.querySelector('a[href^="http"]');

const randLink = (event) => {
  event.preventDefault(); //Evita um corportamento default do Browser, como por exemplo: Reload ao enviar um formulário, acesso a um link...
};

linkExterno.addEventListener("click", randLink);

//---- Existem vários eventos inicias como o 'click', como listado abaixo:
const h1 = document.querySelector("h1");

function callback(event) {
  console.log(event.type, event);
}

h1.addEventListener("click", callback);
h1.addEventListener("mouseenter", callback);
window.addEventListener("scroll", callback);
window.addEventListener("resize", callback);
window.addEventListener("keydown", callback);

//É possível utilizar teclas do keyboard para eventos também!

const handleKeyboard = (event) => {
  if (event.key === "g" || "G") {
    document.body.classList.toggle("fullscreen");
  }
  console.log(event.key);
};

window.addEventListener("keydown", handleKeyboard);

//-> !* Importante: O "keydown" significa só a tecla que foi clicada. Não necessariamente "tecla para baixo". Anotando para não confundir.

//---- Eventos pt.2 ----

//O método addEventListener adiciona um evento apenas a um único elemento, independente de ser querySelectorAll. Então para resolver o problema, é necessário um forEach. Por isso, nem é possível utilizar um addEventListener em uma Node List de elementos.

//-> Teste inicial
const getAllImgs = document.querySelectorAll("img");

const lastCallback = (event) => {
  console.log(event.type);
};

//-> Partindo para a solução agora:

getAllImgs.forEach((item) => {
  item.addEventListener("click", lastCallback);
});

//-> Resumindo novamente o que rolou acima. Um grupo de elementos não podem ser adicionados normalmente a um event listener sem um forEach. Primeiro, é necessário interagir em um forEach com todos os itens para depois dar início a uma série de eventos Event Listener.

//---- ExercíciosssssssssssssSSSSSSSSSS ----

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const getAs = document.querySelectorAll("a");

const clicking = (event) => {
  event.preventDefault();
  getAs.forEach((item) => {
    item.classList.remove("ativo");
  });
  event.srcElement.classList.add("ativo");
};

getAs.forEach((item) => {
  item.addEventListener("click", clicking);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

// const getAll = document.querySelectorAll("body");

// const finalEvent = (event) => {
//   console.log(event.srcElement); //All OK AQUI! TO INDO BEM!
// };

// getAll.forEach((item) => {
//   item.addEventListener("click", finalEvent);
// });
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

const getAll = document.querySelectorAll("body");

const finalEvent = (event) => {
  console.log(event.srcElement.remove()); //All OK aqui!
};

getAll.forEach((item) => {
  item.addEventListener("click", finalEvent);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

const textAmplier = (event) => {
  const getText = document.querySelectorAll("html");
  if (event.key === "t" || "T") {
  }
  getText.forEach((item) => {
    item.classList.toggle("doctext");
  });
};

window.addEventListener("keydown", textAmplier);
