//Iniciando um objeto:
const carro = {
  marca: "Fiat",
  preco: 94000,
};

console.log(carro.marca);

//... Mas e se eu precisar que o carro e suas propriedades e métodos sejam diferentes? Por exemplo, que seja outro nome?

//Aprendendo constructor function (Construtor) em POO de JavaScript.

//Jeito de fora do mostrado na primeira aula ->

// class ItemVenda {
//   constructor(nome, descricao, preco, permission) {
//     //Params que virão no construtor, nome, descricao, preco. Após isso, dentro do escopo inseri o @this.nome = nome (params).
//     this.nome = nome;
//     this.descricao = descricao;
//     this.preco = preco;
//     this.permission = permission;
//   } //Params para construção;
// }

// const microfone = new ItemVenda("Fifine", "Microfone irado", 249.9);

// console.log(microfone.nome, microfone.descricao, microfone.preco);

//Jeito mostrado na aula ->

function Item(nome, descricao) {
  this.nome = nome;
  this.descricao = descricao;
}

const notebook = new Item("Acer Nitro 4.8", "Notebook vermelho SENSATIONAL");
console.log(notebook.nome, " ", notebook.descricao);
console.log("aaaaaaaaaaa");

//Aula 2 - Constructor function pt.2

//O this se diz referência ao construtor do objeto em si. O que quer dizer que:

function NewCar(nome, precoInit) {
  const taxa = 1.2;
  const precoFinal = precoInit * taxa; //Variáveis internas sem o this não entram no construtor.
  this.nome = nome;
  this.preco = precoFinal;
}

const hyundai = new NewCar("Hyundai Elentra GLS 2013", 61000);
console.log(hyundai.preco);

function editAll(tag, value) {
  const element = document.querySelectorAll(tag);
  element.forEach((item) => {
    item.innerHTML = value;
  });
}

function editOne(tag, value) {
  const element = document.querySelector(tag);
  element.innerHTML = value;
}

editAll("p", "Mudei tudo");
editOne("p", "Mudei apenas um");

//Moral da história: O THIS É NECESSÁRIO PARA SE COMUNICAR COM ITENS INTERNOS DO OBJETO.

//Selecionando element com objeto seletor

const seletor = {
  selector: "p",
  getP() {
    return document.querySelectorAll(this.selector);
  },
  addClass() {
    this.getP().forEach((item) => {
      item.classList.add("ativo");
    });
  },
};

//O método acima não é automatizado. Fazendo agora um automatizado e simples, onde podemos criar sempre uma nova
// variável baseada num objeto.

class selectorDiff {
  constructor(item) {
    this.item = item;
  }
  selecionarItemTodos() {
    return document.querySelectorAll(this.item);
  }
  addClass() {
    this.selecionarItemTodos().forEach((item) => {
      item.classList.add("ativo");
    });
  }
}

const addP = new selectorDiff("p");
addP.selecionarItemTodos();

//----Exercíciosssssssss----
// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nomePessoa, idade) {
  this.nomePessoa = nomePessoa;
  this.idade = idade;
  const andar = () => {
    console.log(`${this.nomePessoa} andou.`);
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const pessoaJuscelino = new Pessoa("Juscelino", 37);
const pessoaMaria = new Pessoa("Maria", 22);
const pessoaBruno = new Pessoa("Bruno", 27);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

class ElementicUse {
  constructor(element) {
    this.element = element;
  }
  getElement() {
    return document.querySelectorAll(this.element);
  }
  addClass(classeCss) {
    this.getElement().forEach((item) => {
      item.classList.add(classeCss);
    });
  }
  removeClass() {
    this.getElement().forEach((item) => {
      item.removeAttribute("class");
    });
  }
}

const Ps = new ElementicUse("p");
Ps.addClass("classePPrincipal");
Ps.removeClass();
