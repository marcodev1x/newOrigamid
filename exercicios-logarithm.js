let result = undefined;

function calcBigO(firstValue, finalValue) {
  const logarithm = 2;
  result = logarithm ** firstValue;
  if (result > finalValue) {
    console.log(
      "O valor é maior. Pode ser que seja isso mesmo, mas diminua o multiplicador e veja.",
    );
  } else if (result < finalValue) {
    console.log(
      "O resultado é menor do que o valor a ser chegado. Cresça o multiplicador.",
    );
  } else if (result === finalValue) {
    console.log("O resultado foi certeiro!");
  }

  console.log(result);
}

calcBigO(9, 256);

//Exercício autoral de verificação de logaritmo.

//Exercício de lista de 120 nomes num array. (BD simulator taker);

const arr = [];
for (let i = 1; i < 120; i++) {
  arr.push(i);
  //console.log(arr.length);
}

let arrMenor = arr[0];
let arrMaior = arr.length - 1;

function calculateArr() {
  const secretValue = parseInt(Math.random() * 100);
  console.log(secretValue);
  let binaryCalc = 100 / 2; //Como o máximo é 100, começamos pela metade (que é 50);
  const subFunc = () => {
    while (binaryCalc !== secretValue) {
      if (binaryCalc > secretValue) {
        console.log((binaryCalc = binaryCalc - 1));
      } else if (binaryCalc < secretValue) {
        console.log((binaryCalc = binaryCalc + 1));
      } else {
        console.log(`O número foi achado! E é: ${secretValue}`);
      }
    }
  };
  setTimeout(subFunc, 3000);
}

calculateArr();

//Final exercise, MEDIUM OK, por partes.
