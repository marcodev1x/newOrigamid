//Operadores de atrbuição são maneiras de atribuir a uma variável um valor de um cálculo de maneira simplificada. !*Exemplo: ***! Não se pode usar const aqui.

let xnum = 4;
let ynum = 2;
console.log((xnum += ynum)); //xnum = xnum + ynum (xnum agora equivale a 6);
console.log((xnum -= ynum)); //xnum = xnum - ynum (xnum agora equivale a 2);
console.log((xnum *= ynum)); //xnum = xnum * ynum (xnum agora equivale a 8);
console.log((xnum /= ynum)); //xnum = xnum / ynum (xnum agora equivale a 2);
console.log((xnum %= ynum)); //xnum = xnum % ynum (xnum agora equivale a 0);
console.log((xnum **= ynum)); //xnumnum = xnum ** Y (xnum agora equivale a 16).

//--- OPERADOR TERNÁRIO

const idade = 15;

const checkerIdade = idade > 18 ? "Pode beber" : "Não pode beber"; //Num ternário, não faz sentido trazer retornos de valores true/false. Isso por que a própria validação (idade > 18 ?) já informa se o valor é true ou false. O que faz mais sentido trazer é string, numeros, variáveis...
console.log(checkerIdade);

// --- IF ABREVIDO

if (idade > 18) console.log("Pode beber");
//Isso é valido apenas quando a validação é de apenas uma linha! Então, não é necessário utilizar chaves ({})
else console.log("Não pode beber");

//----- EXERCÍCIOOOOOOOOOSSSSSS -----
// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll); //All ok. Novo valor atribuído, total: 1500

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var darCredito;

function verifyClient(carro, casa) {
  if (carro && casa) return (darCredito = true);
  else return (darCredito = false);
}

verifyClient(true, true);
console.log(darCredito); //All ok. Feito deu um jeito um pouco diferente, farei de maneira ternária abaixo:

let temCarro = true;
let temCasa = true;
let oferecerCredito;

const verifyCredito =
  temCarro && temCasa ? (oferecerCredito = true) : (oferecerCredito = false);

console.log(oferecerCredito); //All ok. Versão ternário do curso.
