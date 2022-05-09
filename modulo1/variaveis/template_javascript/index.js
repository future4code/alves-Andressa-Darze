// Exercícios de interpretação de código

/*
    1. 10
       10 5

    2. 10 10 10

    3. p -> horasDia
       t -> salarioDia
*/

// Exercício de escrita de código

// (1)

let nome;
let idade;
console.log(typeof nome, typeof idade)

// undefined unddefined - Porque nós não definimos nem atribuímos valor às variáveis.

nome = prompt("Qual é o seu nome?")
idade = prompt("Quantos anos você tem?")

console.log(typeof nome, typeof idade)

//string string - O programa recebe as informações do prompt em formato de string, mesmo sendo números.

console.log("Olá",nome,", você tem",Number(idade),"anos")

// (2)

const perguntaAbacate = "Você gosta de abacate?"
const perguntaViolao = "Você toca violão?"
const perguntaEsporte = "Você pratica algum esporte?"

const respostaAbacate = prompt(perguntaAbacate)
const respostaViolao = prompt(perguntaViolao)
const respostaEsporte = prompt(perguntaEsporte)

console.log(perguntaAbacate,respostaAbacate)
console.log(perguntaViolao,respostaViolao)
console.log(perguntaEsporte,respostaEsporte)

// (3)

let a = 10
let b = 25

c = a
a = b
b = c

console.log("O novo valor de a é",a)
console.log("O novo valor de b é",b)

// DESAFIO

const num1 = prompt("Digite um número")
const num2 = prompt("Digite outro número")

// (1)
let resultado1 = Number(num1) + Number(num2)
console.log("O primeiro número somado ao segundo número resulta em:",resultado1)

// (2)
let resultado2 = Number(num1) * Number(num2)
console.log("O primeiro número multiplicado pelo segundo número resulta em:",resultado2)





