//Boolean sera true ou false, 1 é true e 0 é false.

const possuiCarteiradetrabalho = true;

if (possuiCarteiradetrabalho) {
  console.log("Sim! True");
  const getH1 = document.querySelector(".teste");
  let x = 10; //Let dentro do escopo, só pode ser usado por aqui até ser confirmado que é true.
  console.log(getH1.textContent);
}

console.log("x"); //X not defined por que defini o X no escopo do IF acima. Ele só vai ser possível de acessar caso seja comprado que o mesmo seja verdadeiro.

//Geralmente serve para comprovar se algo é verdadeiro ou não.

if (possuiCarteiradetrabalho) {
  let x = 25;
  for (x = 25; x <= 120; x++) {
    console.log(x);
  }
}

//IF-ELSEIF-ELSE
//O if serve para gerar condições para um código ser executado. Caso seja uma coisa faça isso, caso não faça outra coisa.

if (possuiCarteiradetrabalho) {
  console.log("Possui");
} else if (possuiCarteiradetrabalho === false) {
  console.log("Falso.");
} //Verificação com booleano. Vai tentando até algo dar true, e indo e indo.

/////-------
var nome = "Marco";
if (nome) {
  console.log(nome);
} else {
  console.log("Não econtrado no BD");
}

//Operador de negação o "!", irá inverter um tipo de dado na hora de verificar se é true ou false. por exemplo -> if(!possuiCLT) <- SE NÃO POSSUI CLT faça isso, caso possua faça outra coisa

var clt = true;
if (!clt) console.log("Possui"); //Algo true retorna falso, devido a inversão.
else {
  console.log("Não possui");
}

console.log(!!""); //As duas exclamações servem para verificar se um valor é truthy ou falsy.

//Operadores de comparação --------------------
console.log(5 > 10); //5 MAIOR QUE 10? FALSE
console.log(10 >= 10); // 10 MAIOR OU IGUAL a 10? TRUE
console.log(10 > 8); //10 MAIOR que 8? TRUE
console.log(4 < 10); //4 MENOR do que 10? TRUE
console.log(2 < 1); //2 MENOR do que 1? FALSE

//Operadores de comparação com IGUAL (=) -----------
//Existe um comportamento peculiar quanto a isso. Em JavaScript, o funcionamento do == é um pouco diferente. Por exemplo: "10" == 10?: TRUE. O True ocorre devido a que o comparador não é tão restrito igual outras linguagens! Para que seja, é necessário um sinal de igual a mais entre os dois. "===". Exemplo: "10" === 10?: FALSE. Agora sim! A comparação dos tipos deu certo e sabamos que o 10 texto não é igual o 10 number. ***Inclusive é case sentitive. gato não é igual a Gato
//gato === GatO: Retorna FALSE

console.log(10 == 10); //Retorna TRUE. 10 Number é igual 10 number
console.log("10" == 10); //Retorna TRUE. 10 String é igual 10 number. (Isso acontece devido a verificação menos restrita)
console.log("10" === 10); //Retorna FALSE. 10 String não é igual 10 number com o verificador mais restrito.
console.log("10" != 10); //Retorna FALSE. o "!=" indica se algo é diferente de outro item. Nesse caso, não.
console.log("10" !== 10); //Retorna TRUE. o "!==" é a versão verificadora mais estreita de diferença.

var graduado = false;
if (!graduado) {
  console.log();
}

//--------------------------BOOLEAN E CONDICIONAIS pt.2------------------------------

//Operador && -> Serve para realizar a validação de dois itens dentro dos condicionais. Tipo: if(10>=10 && 10 < 11) -> Ambos retornam true, por que ambos são verdadeiros. Mas, se tiver apenas um falso dentro disso, a condicional retornará false.

if (5 >= 5 && 2 === 2 && 2 > 3) {
  //False por qe 2>3 é falso. Independente dos outros serem true.
  console.log("All true");
} else {
  console.log("Algum deu false!");
}

//-----------SWITCH---------------

var corFavorita = "Preto";

switch (corFavorita) {
  case "Azul":
    console.log("É azul!");
    break;
  case "Preto":
    console.log("É preto!");
    break;
  case "Vermelho":
    console.log("Vermelho");
    break;
  default: //<- Default é o else do switch. É essencial praticar isso.
    console.log("Puxei o default, não é nenhum.");
}

var idade = 11;
switch (idade) {
  case 35: //Caso seja 35, faça isso. Depois no break, quebre e vá para outro.
    console.log("Tem mais de 30!");
    break;
  case 20:
    console.log("É 20!");
    break;
  default: //<- Default é o else do switch. É essencial praticar isso.
    console.log("Error.");
}

var possuiGraduação = true;
switch (possuiGraduação) {
  case true:
    console.log("É truthy! Possui Graduação.");
    break;
  case false:
    console.log("Não possui! É false.");
    break;
  default:
    console.log("Error");
}

let getPlano = document.querySelectorAll(".btn1x, .btn2x, .btn3x, .btn4x"); //Pegar vários buttons com Doc. QuerySelectorAll tudo em uma única string

for (let i = 0; i < getPlano.length; i++) {
  getPlano[i].addEventListener("click", () => {
    switch (getPlano[i].textContent) {
      case "Basic":
        console.log("Pegou o plano Basic por R$11,90.");
        break;
      case "Plus":
        console.log("Pegou o plano Plus de R$17,90");
        break;
      case "Premium":
        console.log("Pegou o plano Premium de R$24,90");
        break;
      case "Premium++":
        console.log("Pegou o plano Premium++ de R$32,90");
        break;
      default:
        console.log("Plano não selecionado");
    }
  });
}

//--------------------------EXERCÍCIO Boolean e condicionais pt 2.---------------------

// Verifique se a sua idade é maior do que a de algum parente
let idadeDev = 19;
let idadeAmigo = 24;
if (idadeDev > idadeAmigo) {
  console.log("Idade maior.");
} else if (idadeDev === idadeAmigo) {
  console.log("É igual.");
} else {
  console.log("Idade menor.");
}
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?

var expressao = 5 - 2 && 5 - " " && 5 - 2; //True
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy

var nome = "Andre"; //Truthy
var idade = 28; //Truthy
var possuiDoutorado = false; //False

console.log(!!nome, !!idade, !!possuiDoutorado);
// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("O Brasil tem maior quantidade de pessoas");
} else {
  console.log("A china tem mais gente.");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso"); //-> Aparece false, por que "Gato" não é igual a "gato" (Case sensitive.) E 5 é maior que 2 mas os dois precisam ser válidos.
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão"); //-> Aparece true. A primeira condição é false, devido ao "Gato" não ser igual a "gato" com g minúsculo. E 5 é maior que dois. O operador é o OU (||), ou seja: Um precisa ser true para a condição toda ser true.
} else {
  console.log("Falso");
}
