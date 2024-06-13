const h1Query = document.querySelector("h1");

console.log(h1Query.innerHTML); //Retorna o texto do HTML COMPLETO, trazendo as tags e itens do element.

//É possível fazer alterações de itens com o innerHTML, alterando diretamente com o element, mudando tags entre outros.

h1Query.innerHTML = "<h1 class='titulo'>Novo título</h1>"; //Adicionado novo H1 por cima do H1 antigo, assim podemos manipular elementos por dentro do JavaScript.

console.log(h1Query.outerHTML); //Retorna o elemento HTML completo, tipo, atributos, itens text...

const animaisList = document.querySelector(".animais-lista");

console.log(animaisList.innerText); //Retorna apenas o texto dentro do HTML, removendo as tags.

//Transversing - Navegar pelo DOM utilizando suas propriedades e métodos.

console.log(animaisList.parentElement); //Retorna o pai do element - No caso uma section
console.log(animaisList.parentElement.parentElement); //Retorna o pai do pai do element. No caso, o body. Assim, pode prosseguir infinitamente. (Até acabar claro.)

//Next element sibling

console.log(animaisList.nextElementSibling); //Retorna o próximo elemento do elemento selecionado.

//Previous element sibling

console.log(animaisList.previousElementSibling); //Retorna o elemento anterior do elemento selecionado.

// Selection Childing - É possível selecionar filhos de uma seleção query com a propriedade children, parecido com uma seleção de item array.

console.log(animaisList.children[1]); //Retorna o segundo elemento filho.

console.log(animaisList.children[--animaisList.children.length]); //Retorna o último item no .length

//Node

console.log(animaisList.childNodes); //Retorna em árvore os elementos dentro de um element pai. O mais interessante é não utilizar essa parte do Node, queremos manipular como alvo principalmente os elementos HTML e não o Node.

//---- Traversing e manipulação pt.2 ----
const animais = document.querySelector(".animais");
const contato = document.querySelector("#contato");
const titleContato = contato.querySelector(".titulo");

// animais.appendChild(titleContato); //Joga um item selecionado (O titleContato) para a ultima posição presente em uma seleção anterior, que foi o animaisList.

contato.insertBefore(animais, titleContato); //Joga um item dentro do elemento pai (Contato), que é o animais list (evento 1) e que fica atrás de um ELEMENTO que necessariamente precisa estar dentro do elemento pai (Que é o contato, o elemento dentro do contato é o title contato)

const getli = document.querySelectorAll("li");
animais.insertBefore(getli[11], h1Query);

const mapa = document.querySelector(".mapa");

contato.insertBefore(h1Query, mapa);

//---- Criando elementos no DOM com JavaScript

const newElement = document.createElement("h1"); //Cria um novo element com o document.createElement('tipo');

newElement.innerText = "Titulo criado pelo JS"; //Adicionado texto ao element HTML;
newElement.setAttribute("class", "titulo"); //Adicionado uma class com setAttribute

contato.appendChild(newElement);

//---- Clonando elementos com NODE

const h1 = document.querySelector("h1");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const state = h1.cloneNode(true);
  animais.appendChild(state);
});

//------------ Exercíciosssssssssssssssssss -------------

// Duplique o menu e adicione ele em copy
const getMenu = document.querySelector(".menu");
const secondaryMenu = getMenu.cloneNode(true);

const getCopy = document.querySelector(".copy");

getCopy.append(getMenu);

// Selecione o primeiro DT da dl de Faq

const getFDL = document.querySelector("dl");
console.log(getFDL.children[0].innerHTML);

// Selecione o DD referente ao primeiro DT
const primeiroDT = document.querySelector("dt");
console.log(primeiroDT.nextElementSibling.innerHTML);

// Substitua o conteúdo html de .faq pelo de .animais

const getFAQ = document.querySelector("#faq");

getFAQ.innerHTML = animais.innerHTML;

getFAQ.setAttribute("class", "animais");
