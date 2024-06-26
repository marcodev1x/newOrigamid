console.log(typeof Array.from !== "undefined");

if (typeof Array.fromfweqfwe !== "undefined") {
  console.log("Fazer isso 1");
} else {
  console.log("Fazer isso 2 else");
}

//Existem browsers que não seguem o padrão atual do JavaScript. Seja por sua idade ou outros fatores.
//Por isso, é importante entender que existem códigos nativos, hosts e de users.
//Os nativos são os nativos da linguagem, do próprio JavaScript e sua engine. Enquanto os hosts são entregues pelo navegador, como o HTMLElement, o NodeList... Ou seja:
//O JavaScript e seu código fica a mercê de que os navegadores entreguem esses hosts de maneira padrão para que o projeto rode como deveria!
//O "User" não é nada mais que objeto criados dentro do projeto de maneira avulsa, ou seja, qualquer objeto externo criado dentro do projeto.

//Uma "API" utiliza um programa que pode ter sua interação convergida com código, que depois, se necessário, será mostrado ao usuário. Por exemplo: Métodos e propriedades hosts do navegador
//Na verdade, são uma API do browser.

//---- Exercíciossssssss ----
// Liste 5 objetos nativos
console.log(Object); //Objeto nativo
console.log(String); //Objeto nativo
console.log(Number); //Objeto nativo
console.log(Array); //Objeto nativo
console.log(function () {}.prototype); //Objeto nativo

// Liste 5 objetos do browser
console.log(NodeList); //Objeto Host
console.log(HTMLCollection.prototype); //Objeto Host
console.log(document); //Objeto Host
console.log(document.querySelector("a")); //Objeto Host
console.log(HTMLUnknownElement); //Objeto Host

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if (typeof document.webkitHidden !== "undefined") {
}
