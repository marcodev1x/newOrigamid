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
console.log('aaaaaaaaaaa')