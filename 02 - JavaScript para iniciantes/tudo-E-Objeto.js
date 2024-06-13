const nome = "Marco";
console.log(nome.includes("B")); //Descobre se existe o valor dentro da variável;
console.log(nome.length); //Descobre a quantidade de itens/caracteres dentro da variável;

// Métodos e propriedades abaixo. Para o JS em si e o DOM.

// Aqui estão alguns dos principais métodos e propriedades no JavaScript:

// 1. **Métodos de Array**
//     - push(): Adiciona um novo elemento ao final de um array.
//     - pop(): Remove o último elemento de um array.
//     - shift(): Remove o primeiro elemento de um array.
//     - unshift(): Adiciona um novo elemento ao início de um array.
//     - slice(): Retorna uma cópia de uma parte de um array.
//     - splice(): Altera o conteúdo de um array, adicionando novos elementos enquanto remove elementos antigos.
// 2. **Métodos de String**
//     - charAt(): Retorna o caractere no índice especificado.
//     - concat(): Combina o texto de duas strings e retorna uma nova string.
//     - indexOf(): Retorna o índice da primeira ocorrência de um valor especificado em uma string.
//     - replace(): Substitui um valor especificado por outro valor em uma string.
//     - split(): Divide uma string em um array de substrings.
// 3. **Métodos de Objeto**
//     - hasOwnProperty(): Retorna um booleano indicando se o objeto possui a propriedade especificada.
//     - toString(): Retorna uma string representando o objeto.
// 4. **Propriedades de Funções**
//     - length: Retorna o número de argumentos esperados pela função.
//     - name: Retorna o nome da função.
// 5. **Propriedades de Números**
//     - MAX_VALUE: Retorna o maior número possível em JavaScript.
//     - MIN_VALUE: Retorna o menor número possível em JavaScript.
//     - NaN: Representa "Não é um número".

// Aqui estão alguns dos principais métodos e propriedades no JavaScript:

// Sim, existem muitos outros métodos e propriedades em JavaScript. Aqui estão mais alguns:

// NOVOS LISTADOS PELA Ai

// 1. **Métodos de Array**
//     - sort(): Organiza os elementos de um array em ordem alfabética.
//     - reverse(): Inverte a ordem dos elementos de um array.
//     - join(): Une todos os elementos de um array em uma string.
//     - filter(): Cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.
//     - map(): Cria um novo array com os resultados da chamada de uma função para cada elemento do array.
// 2. **Métodos de String**
//     - toUpperCase(): Converte uma string para maiúsculas.
//     - toLowerCase(): Converte uma string para minúsculas.
//     - trim(): Remove espaços em branco do início e / ou fim de uma string.
//     - substring(): Retorna a parte de uma string entre os índices inicial e final, ou até o final da string.
// 3. **Métodos de Objeto**
//     - keys(): Retorna um array contendo os nomes das propriedades do objeto.
//     - values(): Retorna um array com os valores das propriedades do objeto.
// 4. **Propriedades de Funções**
//     - constructor: Retorna uma referência à função que criou a instância do objeto.
// 5. **Propriedades de Números**
//     - NEGATIVE_INFINITY: Representa o valor infinito negativo.
//     - POSITIVE_INFINITY: Representa o valor infinito positivo.

//     Aqui estão alguns dos principais métodos e propriedades do DOM (Document Object Model) em JavaScript:

//     1. **Métodos do DOM**
//         - getElementById(): Retorna o elemento que possui o ID atribuído.
//         - getElementsByClassName(): Retorna uma coleção de todos os elementos filhos que possuem o nome da classe especificada.
//         - getElementsByTagName(): Retorna uma coleção de todos os elementos no documento com o nome da tag especificada.
//         - querySelector(): Retorna o primeiro elemento que corresponde a um seletor CSS especificado.
//         - querySelectorAll(): Retorna todos os elementos no documento que correspondem a um seletor CSS específico, como um objeto NodeList.
//         - createElement(): Cria um novo elemento HTML.
//         - appendChild(): Adiciona um novo nó filho ao final de um nó.
//         - insertBefore(): Insere um novo nó filho antes de um nó filho existente.
//         - replaceChild(): Substitui um nó filho em um elemento.
//         - removeChild(): Remove um nó filho de um elemento.
//         - addEventListener(): Adiciona um manipulador de eventos a um elemento.
//         - removeEventListener(): Remove um manipulador de eventos de um elemento.
//     2. **Propriedades do DOM**
//         - innerHTML: Define ou retorna o conteúdo HTML de um elemento.
//         - innerText: Define ou retorna o conteúdo de texto de um nó e seus descendentes.
//         - outerHTML: Define ou retorna o HTML de um elemento e seus descendentes.
//         - textContent: Define ou retorna o conteúdo de texto de um nó e seus descendentes.
//         - parentNode: Retorna o nó pai de um nó.
//         - parentElement: Retorna o elemento pai do elemento.
//         - childNodes: Retorna uma coleção de nós filhos de um nó.
//         - children: Retorna uma coleção de elementos filhos de um elemento.
//         - firstChild: Retorna o primeiro nó filho de um nó.
//         - lastChild: Retorna o último nó filho de um nó.
//         - attributes: Retorna uma coleção de todos os atributos do nó.
//         - className: Define ou retorna o valor do atributo class de um elemento.
//         - id: Define ou retorna o valor do atributo id de um elemento.
//         - style: Usado para manipular estilos CSS de um elemento.

//-> Para selecionar um item em JavaScript dentro do HTML

const button = document.querySelector(".btn"); //Query selector é um seletor CSS, para classes.

button.addEventListener("click", () => {
  console.log("Click click click");
});

button.classList; //Verifica as classes num HTML
button.classList.add("Class"); //Adiciona uma classe com ClassList.add

console.log(button);

//--------------- Exercícios --------------
// nomeie 3 propriedades ou métodos de strings
const nomePai = "Marcos";
console.log(nomePai.charAt(0)); //MÉTODO -> (POR TER QUE USAR O ()) Pega um caracter com base no número de índice fornecido. Nesse caso M é o 0.
console.log(nomePai.length); //Propriedade -> Verifica a quantidade de itens/caracteres numa variável.
console.log(nomePai.replace("Mar", "Ter")); //MÉTODO -> Você pode substituir (Como diz o nome, Replace) caracteres da sua String através de um selecionador. Nesse caso, escolhi mudar o "Mar" por "Ter", ficando Tercos.

// nomeie 5 propriedades ou métodos de elementos do DOM

const buttonRepeat = document.querySelector(".btn"); //Método selecionador do DOM, este serve para o CSS.
console.log(buttonRepeat);
const buttonRepeat2x = document.getElementById("btn"); //Método selecionador por ID do item HTML.
console.log(buttonRepeat2x);
console.log(buttonRepeat2x.textContent); //Propriedade que lê o texto do conteúdo presente no HTML. -> Retorna "Clique"
console.log(
  buttonRepeat2x.addEventListener("click", () => {
    //Método do DOM que permite adicionar um evento dentro do HTML, caso clique, ou scrolle ou faça outras coisas de evento.
    console.log("Clicou");
  })
);
console.log(buttonRepeat2x.attributes); //Propriedade que mostra os valores de atributos presentes no HTML (Style, href, id, class...).

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

const clipboard = new ClipboardJS(".sending");
