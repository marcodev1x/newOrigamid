//Funções em JS. Um dos principais itens do JavaScript, são blocos de códigos que podem ser chamados com apenas uma linha.

function calcArea(num) {
  return num * num; //Calcula a área de um quadrado. ->
}

console.log(calcArea(4)); //Chamando a function

//Começa por function -> nomeQualquer -> Parenteses -> Colchetes -> Dados

function areaQuadrado(lados) {
  return console.log(lados * lados);
}

areaQuadrado(8);

//---PI

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

//----Parâmetros e args

function imc(peso, altura) {
  //<- Parâmetros aqui, o peso e altura.
  const imc = peso / altura ** 2;
  return imc;
}

imc(80, 1.8); //<- Args, argumentos.

//-----Favorite color, nem sempre um parâmetro necessita de argumentos.
function favoriteColor(cor) {
  if (cor == "Azul") return "Você gosta de azul!";
  else if (cor == "Vermelho") return "Você gosta de vermelho!";
  else if (cor == "Preto") return "Você gosta de preto!";
  else return "Você não gosta de nada";
}

console.log(favoriteColor("Vermelho")); //<- Retorna "Você gosta de vermelho"
console.log(favoriteColor()); //<- Retorna "Você não gosta de nada."

//---- EVENTOS ----
const button = document.querySelector(".btn1x");
button.addEventListener("click", () => {
  //Tem dois eventos, o "click" é o primeiro e a função anônima é o próximo. Existem vários eventos como o click, mas com diferentes objetivos.
  console.log("Clicou");
});

//Também, é possível fazer um evento callback, QUE É UM EVENTO que ocorre após algo acontecer no site, como um click em algum lugar específico.

function chamarConsole() {
  console.log("Clicou em tudo!");
}

addEventListener("click", chamarConsole); //Um ponto interessante é que, no callback de evento, não é necessário o parênteses para chamar uma função. Apenas o chamarConsole sem o parênteses é reconhecível. !-> IMPORTANTE -> NÃO PODE UTILIZAR O PARENTESES SE NÃO NÃO FUNCIONA.

//----------------AULA FUNÇÕES pt.2------------

function calcAob(a, b) {
  console.log(a + b);
}

calcAob(4, 4);

console.log(calcAob(4, 4)); //Retorna undefined, por algum motivo difícil de entender, mas é devido a já existência do console.log dentro da função, que já deveria mostrar sem a necessidade do console.log (E acontece.)

const idadeChecker = document.querySelector("#idade");
const submiteIdade = document.querySelector("#submit");

submiteIdade.addEventListener("click", () => {
  const idade = idadeChecker.value; //Serve para pegar o valor inserido num input box
  if (idade < 18) {
    alert("Você não pode se registrar.");
  } else {
    alert("Bem vindo!");
  }
});

//--- FUNCTION COM RETURNS DIVERSOS (PRÁTICA RUIM) ---
function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Error";
  } else if (idade >= 60) {
    return "É idoso";
  } else {
    return "Não é idoso";
  }
}

console.log(terceiraIdade(70));

function paisesToGo(paises) {
  const totalPaises = 193;
  return `Faltam visitar ${totalPaises - paises} países`;
}

console.log(paisesToGo(40));

//----- É POSSÍVEL FAZER UMA FUNÇÃO DENTRO DE UMA FUNÇÃO.
let profission = "Product Designer Programmer";
function userDados() {
  let nome = "Marco Antônio Mendes dos Santos";
  let idade = 18;
  function outrosDados() {
    let idade = 19;
    return `${nome}, ${profission}, ${idade}`;
  }
  return outrosDados(); //<- Retorno dentro da função pai !(UserDados())!
}

console.log(userDados());

//----------------EXERCÍCIOSSSSSSSSSSSSS------------------------

// Crie uma função para verificar se um valor é Truthy

function checkTruthy(value) {
  if (!!value) {
    return "Valor é truthy";
  } else {
    return "Valor é falsy";
  }
}

console.log(checkTruthy("Teste")); //All ok

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

const calcQuadrado = (num) => {
  return 4 * num;
}; //All ok

console.log(calcQuadrado(4));
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

const userDeveloper = (nome, sobrenome) => {
  return `${nome} ${sobrenome}`;
};

console.log(userDeveloper("Marco Antônio", "Mendes dos Santos")); //All ok

// Crie uma função que verifica se um número é par
const verifyPar = (num) => {
  if (num % 2 == 0) return "É par";
  else return "É ímpar";
}; //All ok

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

const verifyType = (value) => {
  return typeof value;
};
console.log(verifyType(true)); //All ok

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

function chamando(nome) {
  addEventListener("scroll", () => {
    console.log(nome);
  });
}

chamando("Marco");

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`; //All ok
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
