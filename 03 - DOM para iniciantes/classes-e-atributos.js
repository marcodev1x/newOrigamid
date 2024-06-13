const img = document.querySelector("img");
console.log(img.classList); //Verifica a lista de classes;

console.log(img.classList.add("ativo")); //Adiciona uma classe ativo. Geralmente para um evento de click ou hover.

console.log(img.classList.remove("firstClasss")); //Remove uma classe do element.

console.log(img.classList.toggle("ativo")); //Remove o ativo (Por que existe)

console.log(img.classList.toggle("ativo")); //Adiciona o ativo (Por que não existia mais)

if (img.classList.contains("ativo")) img.classList.add("azulOn"); //O Contains é um método booleano que retorna true or false, verifica se a classList contém um valor ou não.

//!* -> É possível sobescrever os valores de uma classList. Isso por que ele retorna uma string que pode ser mudada.

img.classList = "alterando"; //Agora a class é apenas "alterando"

//!* -> Na mesma ideia acima, é possível concatenar as strings sem ter essa substituição de valores.

img.classList = img.classList + " alterandoConcatenando"; //Agora o alterandoConcatenando tornou-se outro valor string.

//Podemos utilizar também o que aprendemos nas aulas de operadores "+=, *="...

img.classList += " operandoConcat"; //Tornou-se uma classe também.

console.log(img.classList); //Apenas verificando o estado atual.

//------ ATRIBUTTES

//- É possível verificar os atributos de um HTML element pelo JavaScript. Exemplo:

console.log(img.attributes);
console.log(img.attributes[0]); //É possível retornar como um array, utilizando o "[index]"

//-> É possível retornar também especificamente um atributo desejado. Por exemplo:

console.log(img.attributes.class); //Retorna a class;
console.log(img.attributes.id); //Retorna o ID;

//!* IMPORTANTÍSSIMO. Para retornar atributos com hífen ou caractéres específicos, é necessário realiza o push de uma maneira diferente. Por exemplo:

console.log(img.attributes["data-info"]); //Abre [] e adiciona o valor como string. Precisa ser idêntico!

//Apesar do Attributes ser importante, o essencial mesmo é o getAttribute e o setAttribute, o get puxa o valor do atributo selecionado e o set adiciona ao atributo selecionado.

console.log(img.getAttribute("class")); //Aqui retorna o atributo class. Vale lembrar que GET/SET é um método.

img.setAttribute("alt", "É uma raposa"); //Aqui adiciona um atributo ALT.
console.log(img.getAttribute("alt")); //Retornando o SET acima com GET aqui.

//-> Verificar se existe um atributo específico.

const possuiAtr = img.hasAttribute("alt"); //Retorna com o hasAttribute.
console.log(possuiAtr); //Retorna true por que existe.

//!* IMPORTANTÍSSIMO -> Existem algumas propriedades writable e readonly. Algumas podem ser sobescrevidas e outras sou apenas para leitura/visualização.

//---- Exercícios ----

// Adicione a classe ativo a todos os itens do menu
const getMenu = document.querySelectorAll(".menu a");
getMenu.forEach((item) => {
  item.setAttribute("class", "ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
getMenu.forEach((item) => {
  item.removeAttribute("class", "ativo");
});

getMenu[0].setAttribute("class", "ativo");

// Verifique se as imagens possuem o atributo alt

const getImgs = document.querySelectorAll("img");
getImgs.forEach((item) => {
  console.log(item.hasAttribute("alt"));
});

// Modifique o href do link externo no menu

const lastIdx = getMenu[getMenu.length - 1]; //All ok!
lastIdx.setAttribute("href", "#mudei");
