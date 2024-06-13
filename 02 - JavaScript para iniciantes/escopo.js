// --- Escopo de função

function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca no console
//console.log(carro); // Erro, carro is not defined

// --- Escopo de bloco
{
  let car = "BMW 325i";
  console.log(car); //Sendo LET e Const, a variável "existe" apenas dentro do escopo definido.
}

// console.log(car); //Se car fosse VAR, existiria. Mas como é Let, não existe. Por isso var não é recomendado nos dias de hoje. E se dentro de uma condicional e mesmo assim for false, a VAR é vazada para fora do bloco, porém em undefined.

//{} Cria um bloco de escopo.

{
  var idade = 19;
  const idadeConst = 19;
}

console.log(idade); //Pegável, por ser var.
// console.log(idadeConst); //Impegável, por ser const/let dentro de um bloco de escopo

//O mesmo de vazar acontece em um Loop FOR

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

console.log(i); //Vazando o i devido ao loop ter utilizado "VAR" no seu início.

for (let i = 0; i <= 20; i++) {
  console.log(i); //Com let, não vaza para fora do escopo de bloco e não pode ser reutilizado.
}

//---------- Diferença entre CONST e LET

const nome = "User";
// nome = "Marco"; //Erro, por que uma const não pode ser redeclarada com um novo valor abaixo. Esse é a principal diferença entre const e let.
let nomeLet = "User";
nomeLet = "Marco"; //Aqui ok, o valor é redeclarado.

//Mas, mudar propriedades e métodos em um objeto é possível!

const pessoa = {
  nome: "Marco",
};

pessoa.nome = "Marcos"; //Aqui altera, por que não está mexendo diretamente na variável.

console.log(pessoa.nome);

//Já o LET, permite a alteração do valor dessa variável, só não permite que ela seja redeclarada (Tipo: Let nome = "AAA" depois de umas 30 linhas let nome = "AAA")
let nomeLetter = "Nome";
nomeLetter = "NomeAlterado";

console.log(nomeLetter);

//O ideal é usar CONST e usar LET no que se altera de acordo com o decorrer do programa.

//---------- Exercícioooooossss -------------

// // Por qual motivo o código abaixo retorna com erros?
// {
//   var cor = 'preto';
//   const marca = 'Fiat';
//   let portas = 4;
// }
// console.log(var, marca, portas); //O erro ocorre por que a variável "var" não existe. Apenas a variável cor lá em cima. E também, as variáveis marca & porta são const e let, na qual não podem ser vazadas do escopo de bloco.

// Como corrigir o erro abaixo?
function somarDois(x) {
  const dois = 2; //Por ser um escopo de função, é possível declarar uma let ou const que tenha o mesmo nome, independente se já houver uma const dois em qualquer lugar do projeto. Dentro de um escopo ela só vai funcionar dentro daquele escopo.
  return x + dois;
}

function dividirDois(x) {
  //Por ser um escopo de função, é possível declarar uma let ou const que tenha o mesmo nome, independente se já houver uma const dois em qualquer lugar do projeto. Dentro de um escopo ela só vai funcionar dentro daquele escopo.
  const dois = 2;
  return x + dois;
}

console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
var numero = 50;

for (let numero = 0; numero < 10; numero++) {
  //Alterar o "var numero" que estava presente dentro desse For LOOP, no qual substituia o "var numero = 50" que estava acima do for loop, era repreenchido pelo valor 10 que é o valor do numero dentro desse loop.
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
