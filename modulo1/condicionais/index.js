// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1.a) O código recebe um número introduzido pelo usuário e testa o resto da divisão desse número por 2 é zero ou não.

// 1.b) Numeros pares

// 1.c) Quaisquer outros números

// 2.a) O código serve para reconhecer a opção de fruta escolhda pelo usuário e dizer o seu valor respectivo.

// 2.b) "O preço da fruta Maçã é R$ 2.25"

// 2.c) Se não houvesse o break, o código não seria interrompido e a variável preco assumiria o valor de 5.

// 3.a) Está recebendo do usuário um número em formato de String e a transformando em Number.

/* 3.b) "Esse número passou no teste"
        "Essa mensagem é secreta!!!" --> ERREI!!! (TAMBÉM DÁ ERRO!)

        error -> não há variável "mensagem" declarada
*/

// 3.c) Haverá, pois a variável "mensagem" é declarada somente dento do bloco if. Como não é de escopo global, o console.log está tentando imprimir uma variável que não foi declarada hora nenhuma, logo resultará em erro.

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// (1)

// const idade = +prompt("Insira sua idade:")

// if(idade >= 18) {
//     console.log("Você pode dirigir")
// }
// else {
//     console.log("Você não pode dirigir")
// }

// (2)

// const turno = prompt("Escolha um turno: M, V ou N")

// if(turno.toUpperCase() === "M") {
//     console.log("Bom dia!")
// }
// else if(turno.toUpperCase() === "V") {
//     console.log("Boa tarde!")
// }
// else {
//     console.log("Boa noite!")
// }

// (3)

// switch (turno.toUpperCase()) {
//     case "M":
//         console.log("Bom dia!")
//         break
//     case "V":
//         console.log("Boa tarde!")
//         break
//     case "N":
//         console.log("Boa noite!")
//         break
//     default:
//         console.log("Opção inválida. Tente novamente.")
//         break

// }

// (4)

// const genero = prompt("Qual o gênero do filme?")
// const preco = +prompt("Qual o valor do ingresso?")

// if (genero.toLowerCase() === "fantasia" && preco < 15) {
//     console.log("Bom filme!")
// }
// else {
//     console.log("Escolha outro filme :(")
// }


// DESAFIOS

// (1) -- Reescrevi o código todo, lembrar de comentar o anterior!

// const genero = prompt("Qual o gênero do filme?")
// const preco = +prompt("Qual o valor do ingresso?")

// if (genero.toLowerCase() === "fantasia" && preco < 15) {

//     const lanche = prompt("Qual lanchinho vai comprar?")
//     console.log("Bom filme!")
//     console.log(`Aproveite seu/sua ${lanche}!`)
// }
// else {
//     console.log("Escolha outro filme :(")
// }

// (2)

const nome = prompt("Nome completo:")
const tipoJogo = prompt("Tipo de jogo: IN ou DO").toUpperCase()
const etapaJogo = prompt("Etapa do jogo: SF, DT ou FI").toUpperCase()
const categoria = +prompt("Categoria: 1, 2, 3 ou 4")
const numIngressos = +prompt("Quantidade de ingressos:")
let valorIngresso = 0


if(etapaJogo === "SF" && categoria === 1) {
    valorIngresso = 1320 
}
else if(etapaJogo === "SF" && categoria === 2) {
    valorIngresso = 880
}
else if(etapaJogo === "SF" && categoria === 3) {
    valorIngresso = 550
}
else if(etapaJogo === "SF" && categoria === 4) {
    valorIngresso = 220
}
else if(etapaJogo === "DT" && categoria === 1) {
    valorIngresso = 660
}
else if(etapaJogo === "DT" && categoria === 2) {
    valorIngresso = 440
}
else if(etapaJogo === "DT" && categoria === 3) {
    valorIngresso = 330
}
else if(etapaJogo === "DT" && categoria === 4) {
    valorIngresso = 170
}
else if(etapaJogo === "FI" && categoria === 1) {
    valorIngresso = 1980
}
else if(etapaJogo === "FI" && categoria === 2) {
    valorIngresso = 1320
}
else if(etapaJogo === "FI" && categoria === 3) {
    valorIngresso = 880
}
else if(etapaJogo === "FI" && categoria === 4) {
    valorIngresso = 330
}


const valorIngressoIn = 4.1 * valorIngresso

const totalDO = valorIngresso * numIngressos

const totalIN = valorIngressoIn * numIngressos


if(tipoJogo === "DO") {
    console.log(`
--- Dados da compra ---
Nome do cliente: ${nome}
Tipo de jogo: DO
Etapa do jogo: ${etapaJogo}
Categoria: ${categoria}
Quantidade de ingressos: ${numIngressos}
--- Valores ---
Valor do Ingresso: R$ ${valorIngresso}
Valor total: ${totalDO}
`)
}
else if(tipoJogo === "IN"){
    console.log(`
--- Dados da compra ---
Nome do cliente: ${nome}
Tipo de jogo: IN
Etapa do jogo: ${etapaJogo}
Categoria: ${categoria}
Quantidade de ingressos: ${numIngressos}
--- Valores ---
Valor do Ingresso: U$ ${valorIngressoIn.toFixed(2)}
Valor total: ${totalIN.toFixed(2)}
`)
}
else {
    console.log("Dados inválidos. Tentar novamente.")
}
