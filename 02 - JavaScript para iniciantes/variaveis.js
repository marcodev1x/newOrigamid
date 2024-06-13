//São responsáveis por guardar dados na memória! Armazenam informações dentro de si e podem ser requisitadas depois.

var nome = "André Rafael"; //String - Var já não é tão usada hoje em dia.
var idade = 28; // Number
var possuiFaculdade = true; //Boolean TRUE-FALSE

//Conceito DRY - Don't reapat yourself. Não repita nomes de variáveis.
var preco = 30;
var qntComprada = 3;
var totalGetter = qntComprada * preco;
console.log(totalGetter);

//-------------------------

var sobrenome = "Antônio", //Variáveis criadas de uma maneira um pouco diferente.
  nomeDev = "Marco",
  idadeDev = 19;

//Variáveis podem iniciar com $, _ ou letras. Mas nunca números!
//Variáveis são case sensitive, ou seja, precisam ser escritas corretamente, sem diferença entre maíscula ou minúscula.
//FOCO EM USAR CAMEL CASE! Ex: variavelPrincipal, nomeAluno, adicionarAluno.
//JavaScript possui Hoisting, ou seja: Variáveis abaixo de chamados é impossível de acontecer. É necessário criar uma variável para em seguida poder chamá-la.

var time = "Palmeiras";
time = "Corinthians"; // É possível redefinir as variáveis declarando a mesma novamente, sem utilizar seu tipo (Var, const, let.)

//-----------EXERCÍCIO DA AULA------------------------------------------------

var developer = "Marco Antônio Mendes dos Santos"; //Nome desenvolvedor
var idadeDeveloper = 19; //Idade desenvolvedor
var comidaFavorita; //Declarando comida favorita sem valor
comidaFavorita = "Sushi Hot Crispy"; //Inserindo valor a comida favorita
var testandoVariavel; //Variavel prática 1
var $testandoVariavel; //Variavel prática 2
var _testandoVariavel; //Variavel prática 3
var testandoVariavelA; //Variavel prática 4
var testandoVariavelB; //Variavel prática 5
