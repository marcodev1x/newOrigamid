//Para facilitar o desenvolvimento no console developer do navegador, clique em cima de um elemento e no console digite "$0". O mesmo irá retornar o elemento atualmente clicado. Inclusive é possível visualizar isso no canto direito de um element.

const listaAnimais = document.querySelector(".animais-lista");

//-> Com um elemento selecionado, é possível visualizar suas dimensões com comandos simplificados. Exemplo:

console.log(listaAnimais.offsetHeight); //Informa o height mas não completo. Retorno: 370px. Se tiver um scroll, terá que usar outro. Que é o:

console.log(listaAnimais.scrollHeight); //Pega o valor completo + o scroll, assim temos certeza do valor. Retorno: 656px.\s

//-> Um dos passos usuais é adicionar o height numa variável para que seja possível trabalhar com o DOM e interações:

const heightTotally = listaAnimais.clientHeight; //All ok. Adicionado a uma variável.
console.log(heightTotally);

//É possível pegar a distância de um element do topo, da seguinte maneira.

const offTop = listaAnimais.offsetTop;
console.log(offTop);

//Também, é possível visualizar a distância até as bordas da página, tanto para a direita quanto para a esquerda.

const offLeft = listaAnimais.offsetLeft;
console.log(offLeft);

//GetBoundingClientRect(); Retorna o tamanho do elemento para todos os lados e as distâncias entre as pontas

const primeiroH2 = document.querySelector("h2");

const rect = primeiroH2.getBoundingClientRect(); //-> FACILITA A VIDAAAAAAAAAAAAAAAAAAAAAA!!!!!!!!

console.log(rect); //-> Retorna um OBJETO DOM com os valores requisitados que o getBoundingClient apresenta.

if (rect.top < 0) console.log("Passou do elemento"); //Verifica se passou do elemento, caso passe faça algo (...).

//É possível utilizar propriedades do WINDOW (Window é o elemento pai da página, vindo do Browser).

console.log(window.innerWidth); //Pega o tamanho da janela da página (Largura);
console.log(window.innerHeight); //Pega o tamanho da janela da página (Altura);

//É póssivel utilizar também um grupo de métodos e propriedades do WINDOW idênticos a um media querie. Assim, podemos verificar qual a tela do usuário para melhor responsividade!

const small = window.matchMedia("(max-width: 600px)").matches; //-> Ao ficar abaixo de 600 retorna true na Media Query List.

if (small) console.log("Menor que 600px");
else console.log("Maior que 600px");

console.log(small);

//---- EXERCÍCIOSSSSSS ----
// Verifique a distância da primeira imagem
// em relação ao topo da página

const distancyImg = document.querySelector("img");
console.log(distancyImg.offsetTop);

// Retorne a soma da largura de todas as imagens

const functionImg = () => {
  const calcImgs = document.querySelectorAll("img");
  let soma = 0;
  calcImgs.forEach((item) => {
    soma += item.offsetWidth;
  });
  console.log(soma);
};

window.onload = () => {
  functionImg();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const allLinks = document.querySelector("a");
console.log(allLinks.offsetHeight);
if (allLinks.offsetHeight > 48) console.log("Tem 48px");
else console.log("Não tem 48px");

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const addingMenuMobile = document.querySelector(".menu");

const quebraMenu = matchMedia("(max-width: 720px)").matches;
if (quebraMenu) {
  addingMenuMobile.setAttribute("class", "menu-mobile"); //All ok!
}
