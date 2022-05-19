// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/*
    1. O código representa uma estrutura de repetição que vai agregando à variável "valor" os valores do índice "i" sempre somados ao valor anterior desta. 
    O resultado impresso no console será: 10

    2.a) 19
         21
         23
         25
         27
         30

    2.b) Sim! Poderíamos usar o indexOf().
    
    3.  *
        **
        ***
        ****

*/



// EXERCÍCIOS DE ESCRITA DE CÓDIGO



// 1.

// const bichinhos = +prompt("Quantos bichinhos de estimação você tem?")

// if(bichinhos === 0) {
//     console.log("Que pena! Você pode adotar um pet!")
// }
// else if(bichinhos > 0) {
//     let nomesBichinhos = []
//     for(i = 0; i < bichinhos; i++) {
//         const nome = prompt("Nome dos bichinhos um por um:")
//         nomesBichinhos.push(nome)
//     }
//     console.log(nomesBichinhos)
// }
// else {
//     console.log("Tentativa inválida! Tente novamente!")
// }



// 2.


// let arrayOriginal = [20, 31, 12, 57, 10]

// const funcaoA = (array) => {
//     for(let elemento of array){
//         console.log(elemento)
//     }
// }
// funcaoA(arrayOriginal)

// const funcaoB = (array) => {
//     for(let elemento of array){
//         console.log(elemento/10)
//     }
// }
// funcaoB(arrayOriginal)

// const funcaoC = (array) => {
//     let newArray = []
//     for(let elemento of array){
//         if(elemento % 2 === 0){
//             newArray.push(elemento)
//         }
//     }
//     console.log(newArray)
// }
// funcaoC(arrayOriginal)

// const funcaoD = (array) => {
//     let newArray = []
//     for(i = 0; i < array.length; i++) {
//         let texto = `O elemento do índex ${i} é: ${array[i]}`
//         newArray.push(texto)
//     }
//     console.log(newArray)
// }
// funcaoD(arrayOriginal)

// const funcaoE = (array) => {
//     let maior = -Infinity
//     let menor = +Infinity

//     for(i = 0; i < array.length; i++){
//         if(maior < array[i]){
//             maior = array[i]
//         }
        
//         if(menor > array[i]){
//             menor = array[i]
//         }
//     }
//     console.log(`Maior número: ${maior}. Menor número: ${menor}.`)
// }
// funcaoE(arrayOriginal)




// DESAFIOS


// 1


// const numeroSorteado = +prompt("Insira o número que pensou:")

// console.log(numeroSorteado)

// console.log("Vamos jogar!")

// let numeroChutado = 0
// let tentativas = 0

// while(numeroChutado !== numeroSorteado) {

//     numeroChutado = +prompt("Chute um número!")

//     if(numeroChutado < numeroSorteado) {
//         console.log("Errou. O número escolhido é maior.")
        
//     }
//     else if(numeroChutado > numeroSorteado) {
//         console.log("Errou. O número escolhido é menor.")
        
//     }

//     tentativas += 1

//     console.log(`O número chutado foi: ${numeroChutado}`)

// }

// console.log("Acertou!!")
// console.log(`O número de tentativas foi: ${tentativas}`)



// 2


// const numeroSorteado = (100 * Math.random()).toFixed()

// console.log(`Número sorteado: ${numeroSorteado}`)

// console.log("Vamos jogar!")

// let numeroChutado = 0
// let tentativas = 0

// while(numeroChutado.toFixed() !== numeroSorteado) {

//     numeroChutado = +prompt("Chute um número!")

//     if(numeroChutado < numeroSorteado) {
//         console.log("Errou. O número escolhido é maior.")
        
//     }
//     else if(numeroChutado > numeroSorteado) {
//         console.log("Errou. O número escolhido é menor.")
        
//     }

//     tentativas += 1

//     console.log(`O número chutado foi: ${numeroChutado}`)

// }

// console.log("Acertou!!")
// console.log(`O número de tentativas foi: ${tentativas}`)


// Fiquei horas me batendo, pq o código só funciona direito quando ponho pra rodar numa página do navegador já com o console aberto. Aí vai imprimindo as comparações dos valores chutados de um em um. Mas se eu abrir no navegador o index.html e só depois abrir o console, Tudo que era pra ser impresso só aparece no final, ao acertar o número. Eu não sei o porquê ainda.
// Fora isso, o código foi tranquilo de alterar. Só tive que tomar cuidado na condição do while, pq se não colocar o toFixed() ele não reconhe o número como igual ao sorteado.

