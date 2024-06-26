// Function basicamente é criada através do construtor function criada pelo objeto function da linguagem interna.

//Criando uma função:

function Nome(nome) {
  return nome;
}

console.log(Nome("Jettulio")); //Função retorna o nome que lhe é dado como pârametro durante sua criação e sua chamada um argumento.
console.log(Nome.length); //Retorna a quantidade de parâmetros na função, já que não está sendo chamada nem retornando nada.
console.log(Nome("Jhonyton").toUpperCase());

//Iniciando com métodos em functions.

//Método .call(), basicamente chama a função.

function dandoCall() {
  return console.log("Olá, usei o método call!");
}

dandoCall.call();

//Utilizando o .call() para utilizar o .this de objetos, retornando valores de fora do escopo function.

const carroType = {
  nome: "Ford Mustang ",
  ano: 2017,
};

function descricaoCarro() {
  console.log(this.nome + this.ano); //Utilizando o this. para manipular e retornar itens do objeto carroType
} //O this se diz respeito ao objeto pai da linguagem, o window.

descricaoCarro.call(carroType);

//Visualizando um exemplo (+-) real.
/*
function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
  this.element.classList.add(classe);
};

const ul = new Dom("ul");

ul.ativo("ativar");
*/
//

const frutas = ["Maçã", "Uva", "Pêra"];

Array.prototype.mostrarThis = function () {
  console.log(this);
};

Array.prototype.mostrarThis();

//Testando os métodos do prototype para trabalhar com arrays-like.

const LIs = document.querySelectorAll("li");

const filter = Array.prototype.filter.call(LIs, (item) => {
  return item.hasAttribute("class");
}); //Utilizando o Array.prototype num array like, assim não preciso transformá-lo para utilizar.

console.log(filter);

const carro = {
  marca: "Ford",
  modelo: "Mustang",
  ano: 2017,
};

function chamarCarro() {
  return console.log(this.marca, this.modelo, this.ano);
}

chamarCarro.call(carro);

//---- Functions II ----

//Método apply()

const numbers = [1, 2, 80, 90, 100, 900, 1000, 10, 80, 20, 40, 100, 80];

console.log(Math.max.call(null, numbers)); //Retorna NaN. Com o call, isso não é possível de realizar por que os números não podem ser convertidos assim, apenas com o apply().

console.log(Math.max.apply(null, numbers)); //Retorna 1000, que é o maior. Funciona como o call, primeiro passamos um objeto e depois o item que renderizamos.

//Método bind(). O bind torna o código reutilizável criando uma função encurtada que permite a polarização desta função para sua reutilização.

const setElement = document.querySelectorAll.bind(document); //Basicamente uma função construtora que permite a seleção de uma função.

const selectAllLi = setElement("li");

console.log(selectAllLi);

//O bind pode padronizar argumentos e torná-los comuns, por exemplo: Queremos que uma velocidade requisitada seja 100, mas precisamos definir os segundos (O 100 JÁ É DEFINIDO). Para isso, utilizamos o bind para definir o padrão.

const acelerarTempo = (velocidade, tempo) => {
  return `${velocidade} KM/H fez em ${tempo} segundos.`;
};

const calcular = acelerarTempo.bind(null, 100);

//Ford fez em;
console.log(calcular(25));

//Lamborghini fez em;
console.log(calcular(14));

//---- Fim Functions II ----

//---- Functions III ----

// ---------- E EXERCÍCIOSSSSSSSSSSS ----------

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const getPs = document.querySelectorAll("p");

const reduct = Array.prototype.reduce.call(
  getPs,
  (acc, item) => {
    //All ok
    return (acc += item.innerText.length); //All ok
  },
  0,
);

console.log(reduct);
// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function ReturnHtml(element) {
  element = document.querySelector(element);
  return {
    tag: element,
    classe: element.className,
    content: element.innerText,
  };
}

let infoP = new ReturnHtml("p"); //All ok

console.log(infoP);
// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

function createH1(content) {
  let element = document.createElement("h1");
  const obj = {
    tag: element,
    classe: (element.className = "titulo"),
    content: (element.innerText = content),
  };
  return obj;
}

let firstH1 = createH1("Este é um H1 criado e será inserido.");

const section = document.querySelector("section");

section.appendChild(firstH1.tag); //All ok
