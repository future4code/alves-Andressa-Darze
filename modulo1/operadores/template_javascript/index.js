// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/* (1)

    a. false
    b. false
    c. true
    d. boolean




 (2)

    O que será recebido através do prompt será uma String. No entanto, ele faz a operação de soma sem transformar a String em Number.
    Se os números forem 23 e 12, por exemplo, o que será impresso é: 2312 e não 35.



 (3)

    sugestão:

    const soma = Number(primeiroNumero) + Number(segundoNumero)

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// (1)

let idadeSua = prompt("Insira sua idade:")
let idadeAmigo = prompt("Insira a idade do seu melhor amigo(a):")

console.log("Sua idade é maior que a do seu amigo?", Number(idadeSua) > Number(idadeAmigo))

console.log("Diferença de idade:", Number(idadeSua) - Number(idadeAmigo))

// (2)

//a
let numeroPar = prompt("Insira um número par:")

//b
console.log(Number(numeroPar)%2)

//c - Como qualquer número par é divisível por 2, todos os restos dão 0.

//d - Inserindo um número ímpar, será impresso o resto da divisão desse número por 2.

// (3)

let idadeAnosString = prompt("Insira sua idade em anos:")
let idadeAnos = Number(idadeAnosString)

let idadeMeses = console.log(12 * idadeAnos)
let idadeDias = console.log(365 * idadeAnos)
let idadeHoras = console.log(365 * 24 * idadeAnos)

// (4)

let numero1 = prompt("Insira um número:")
let numero2 = prompt("Insira outro número:")

let num1 = Number(numero1)
let num2 = Number(numero2)

console.log("O primeiro número é maior que o segundo?", num1>num2)
console.log("O primeiro número é igual ao segundo?", num1 === num2)
console.log("O primeiro número é divisível pelo segundo?", num1%num2===0)
console.log("O segundo número é divisível pelo primeiro?", num2%num1===0)
