const comidaFavorita = "Sushi";
const newComidaFavorita = "SUSHIII";

// Ambos acima, são a mesma coisa. Apenas para mostrar com a string feita de maneira simplificada
// Herda o prototype do objeto String, que vem com propriedades e métodos herdados.
// Propriedades e métodos como: length, toLowerCase(), toUpperCase(), charAt().

console.log(comidaFavorita.length); //Retorna a quantidade de valores numa String

console.log(comidaFavorita[0]); //Retorna uma letra de acordo com o index. Nesse caso, o "S".

console.log(comidaFavorita[comidaFavorita.length - 1]); //Macete para retornar o último valor de uma String ou seja lá o que for. Nesse caso, o "i".

console.log(comidaFavorita.charAt(0)); //Mesma coisa do "[0]". Como o nome diz: Caracter Em... Nesse caso, retorna "S".

//Manipulando String concat

console.log(comidaFavorita + newComidaFavorita); //Maneira default de concatenar String. Retorno: SushiSUSHIII

console.log(comidaFavorita.concat(newComidaFavorita)); //Método de concatenação.

//Retornos booleanos com métodos verificadores de "Inclue..."

console.log(comidaFavorita.includes("Sus")); //Retorna true, devido ao "Sus"hi.

//Retornos booleanos com métodos verificadores de "Começa com... Termina com..."

console.log(newComidaFavorita.endsWith("HIII")); //Retorna true, devido a string ser SUS"HII".

//IMPORTANTISSIMO! SLICE
//Corta a string de acordo com os valores inicais e finais.
const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

console.log(transacao1.slice(0, 3)); //Corta os itens do index 0 ao 3, mostrando no console os mesmos. Nesse caso "DEP".
console.log(transacao2.slice(-5)); //Utilizando um valor negativo no inddex, retorna no caminho invertido, ou seja: "Cedor" (De fornecedor, no final da frase).
console.log(transacao3.slice(-transacao3.length)); //Retorna a STRING completa

//Método de verificar "Qual o index desse valor?"
const instrumento = "Guitarra";

console.log(instrumento.indexOf("t")); //Nesse caso, retorna 3.
console.log(instrumento.indexOf("G")); //Nesse caso, retorna 0 (Primeiro valor).

//PadStart & PadEnd

const preco = "R$ 99,00";

console.log(preco.padStart(26, "...")); // O 26 é a quantidade que desejo aumentar a string, ou seja: Será 26 - o valor já existente (De "R$ 99,00", que é 8.) Foram criados 18 ".". no início da String.

//Aula - String pt.2

//Método repeat, repete uma string num valor determinado ->
const fruit = "Banana";
console.log(fruit.repeat(8));

let preco = "R$ 1200,43";
preco = preco.replace(",", "."); // 'R$ 1200.43'

//Exercíciossssssssssssssss
// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let contadorTaxa = 0;
let contadorRecebs = 0;

transacoes.forEach((item) => {
  const onlyNums = +item.valor.replace("R$ ", "");
  if (item.descricao.includes("Taxa")) {
    contadorTaxa += onlyNums;
  } else if (item.descricao.includes("Recebimento")) {
    contadorRecebs += onlyNums;
  }
});

console.log(contadorTaxa);
console.log(contadorRecebs);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

const newArr = transportes.split(";");
newArr.forEach((item) => {
  console.log(item);
});
// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split("span").join("a");
console.log(html);
// Retorne o último caracter da frase
const frase = "Melhor do ano!";
console.log(frase[frase.length - 1]);

// Retorne o total de taxas
const transacoesX = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let totalTax = 0;

transacoesX.forEach((item) => {
  item = item.toLowerCase();
  item = item.trim();
  if (item.includes("taxa")) {
    totalTax++;
  }
});

console.log(totalTax);
