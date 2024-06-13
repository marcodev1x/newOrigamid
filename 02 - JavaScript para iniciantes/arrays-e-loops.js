const videoGames = ["PS5", "XBOX 360", "PS3", "Nintendo Switch"]; //Um array é uma maneira de adicionar diversos itens dentro de uma variável.
console.log(videoGames);

//--- Métodos e propriedades de um ARRAY ---

//Remove o ultimo item e retorna ele, fazendo a fila andar. No caso o Nintendo Switch.
console.log(videoGames.pop());

//Adiciona um item ao final da fila array.
console.log(videoGames.push("Atari"));

//Verificar a quantidade de itens de array [Geralmente utilizado em looping]
console.log(videoGames.length);

//Loop para array ->
for (let i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]); //-> Looping que imprime os video games | -> O for loop possui 3 partes, início, condição e incremento. let i = 0 (Início), i < videoGames.length (Condição) & i++ (incremento)
}

//Um looping incrementa com o i++ (i = i + 1) em uma variável de escopo até que a condição se torne false, quando for true o loop continua executando. Neste caso, quando o let i for menor que a quantidade de itens dentro do Array de videoGames, o loop deve continuar executando.

//Também é possível utilzar o while. Só é necessário criar a variável INDEX por fora do escopo do WHILE.
let i = 0;

while (i < videoGames.length) {
  console.log(videoGames[i]); //Mesma coisa que o FOR. Só é necessário declarar a variável do index fora do ESCOPO e incrementar no final do evento, com o I++ (Ou decrementar com i--).
  i++; //Nem sempre é necessário ser só com o I++, pode ser com: I = I + 2, por exemplo. Que incrementará de 2 em 2.
}

let indexWhile = 0;
while (indexWhile <= 24) {
  console.log(indexWhile);
  indexWhile = indexWhile + 2; //<- Incremento no Index com o I = I + 2 (Vai incrementando de dois em dois).
}

//----- Arrays e loops pt.2 --------

//Interagindo com arrays com loops:
const arr = [1, "Aob", 4, "Felipe Neto"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // ->O arr[i] é necessário já que é a mesma coisa que chamar um item do array isolado, tipo: arr[0], arr[1]. Basicamente chama o indice enquanto o incremento adiciona 1 ao mesmo, fazendo com que apareça os valores.
}

//É possível dar break também nos loops!

//Exemplo ->
for (let i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "PS3") {
    break;
  }
}

//ForEACH, a forma mais simples de executar um array. É mais simples por que simplifica o .length já o chamando dentro desse loop. Assim, como o nosso array utilizado tem 4 itens, nem precisamos informar para que o loop seja 4.
videoGames.forEach((i) => {
  console.log(i); //LOOP FOREACH simplificado para interagir com arrays e outros.
});

//Sintaxe - FOREACH: variavelArr.forEach((i)=>{ console.log(i) }) //-> Começa pela variável do array, depois com o método ForEach, que dentro do método necessita de uma função anônima. Nesse caso, arrow function com o parâmetro do i. Dentro do escopo, trás o console.log com base no parâmetro inserido na função anônima.

//----- EXERCÍCIOSSSSSS -----

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

const copasBR = [1959, 1962, 1970, 1994, 2002]; //Tempos de vitória de copa do mundo do Brasil
copasBR.forEach((item) => {
  console.log(item); //All ok
});

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

copasBR.forEach((item) => {
  console.log(`O Brasil ganhou a copa em ${item}`); //All ok
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "Pera") break; //All ok. Aparentemente não funciona com FOREACH
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

const ultimaFruta = frutas[frutas.length - 1]; //Serve para adicionar o último valor de um array a uma variável. Inicia o length, que calcula a quantidade de item dentro do array e subtrai -1, no qual resulta no último item do array. No caso, ele calcula todo o valor e depois diminui menos 1, resultado em "Melância".
console.log(ultimaFruta);
