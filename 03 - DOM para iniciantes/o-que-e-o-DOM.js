//DOM consiste na possibilidade de poder manipular elementos do próprio DOM, que são elementos HTML e XML. Com o DOM, é possível alterar a estrutura, o estilo e o conteúdo de um elemento.

//-> Tudo está dentro do objeto "Window", que possui propriedades e funções. Saber bem utilizar o DOM é saber utilizar bem os métodos e propriedades fornecidos pelo objeto!

console.log(window.innerHeight); //Window é o objeto global do Browser, um objeto padrão pré-criado pelo navegador que fornece suporte ao JavaScript. Com o "window.InnerHeight" podemos averiguar o tamanho da tela do usuário.

//https://prnt.sc/BkPzVj9cUEVF Window é um objeto que possui propriedades e métodos, no quais podemos manipular pelo DOM. !*Nessa PRINT, digitei Window no console e retornou o objeot completo.

//-> É possui utilizar os métodos e propriedades acima para manipular o site como um tempo. Por exemplo, temos uma classe "Location", dentro do objeto Window que nos retorna dados de localização de servidor, porta, IP, link.

//-> Exemplo:

const getHref = window.location.href;
console.log(getHref); //Retorna o IP (Link) do site.

//-> Com isso podemos deixar o navegador interativo e útil para situações específicas. Por exemplo, queremos saber a página em que o usuário está! Então, utilizando a propriedade href acima podemos assim:

if (getHref === "http://127.0.0.1:5500/index.html")
  console.log("Página correta");
else if (getHref !== "http://127.0.0.1:5500/index.html")
  console.log("Error 404");

//Window -> Retorna elementos do Broswer, tamanho da tela, href, outros...
//Document -> Retorna elementos do documento HTML, section, h1.

//Selecionar itens do DOCUMENT

const getDOM = document.querySelector("h1"); //Seleciona o H1 (Ou os H1) dentro do Document
console.log(getDOM);

//É possível manipular itens do Document através do DOM, dessa maneira:

getDOM.addEventListener("click", () => {
  getDOM.innerText = "Clicou";
});

//----- O que é o DOM pt.2 -----

//-> O Element é o objeto pai de todos os elementos HTML que são requisitados pelo DOM, ou seja: Toda vez que fazemos um querySelector ou um GetDocument, aquele item herda propriedades e métodos do Element, como o classList, InnerHTML, InnerText, o .id...

console.log(getDOM.classList);
console.log(getDOM.classList[0]); //Pega a primeira classe do Element

//-> Existem vários tipos de utilitários do Node, como por exemplo:

console.log(getDOM.innerText); //-> Retorna o texto presente no elemento
console.log(getDOM.id); //-> Retorna o ID do elemento
console.log(getDOM.className); //-> Retorna o nome da classe do elemento
console.log(getDOM.offsetHeight); //-> Retorna a altura do elemento

//-> Também existem propriedades de evento com função callback

getDOM.addEventListener("click", () => {
  //Muda o texto ao clicar no título
  getDOM.innerText = "Clicou";
});

//---- Exercíciosss ----

// Retorne o url da página atual utilizando o objeto window

console.log(window.location.href); //All ok. Retorna o URL da página atual.

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const getAtivo = document.querySelector(".ativo");
console.log(getAtivo);
console.log(getAtivo.innerText); //All ok. Retornando o primeiro item com a classe "ativo".

// Retorne a linguagem do navegador

console.log(window.navigator.language); //All ok. Retornando a linguagem do navegador.

// Retorne a largura da janela
console.log(window.innerHeight); //All ok. Retornando a altura da janela do navegador.

//--- !* Importantíssimo aprender mais sobre o window. Window é o objeto pai que herda propriedades e métodos funcionais e interativos com o browser, com ele é possível saber dados como o link do site, a linguagem do navegador, tamanho da tela (Width & Heigth), geolocalização...
