// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/* (1)

    a. undefined
    b. null
    c. 11
    d. 3
    e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    f. 9

    (2)

    SUBI NUM ÔNIBUS EM MIRROCOS 27
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// (1)

const nomeDoUsuario = prompt("Insira seu nome:")
const emailsDoUsuario = prompt("Insira seu e-mail:")

console.log(`O e-mail ${emailsDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeDoUsuario}!`)

// (2)

let array = ["Feijão", "Cozido", "Filé à parmegiana", "Lasanha", "Cuscuz"]

// a
console.log(array)
// b
console.log(`Essas são minhas comidas favoritas: \n ${array[0]} \n ${array[1]} \n ${array[2]} \n ${array[3]} \n ${array[4]}`)

// c
let comidaPreferida = prompt("Diga sua comida preferida:")

array[1] = comidaPreferida

console.log(array)

// (3)
// a
let listaDeTarefas = []

//b
const tarefa1 = prompt("Primeira tarefa:")
const tarefa2 = prompt("Segunda tarefa:")
const tarefa3 = prompt("Terceira tarefa:")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

//c
console.log(listaDeTarefas)

//d
const indice = Number(prompt("Digite o índice da tarefa que já realizou: 0, 1 ou 2"))

//e
listaDeTarefas.splice(indice,1)

//f
console.log(listaDeTarefas)

// DESAFIOS

// (1)

let frase = prompt("Insira uma frase:")

let array1 = frase.split(" ")
console.log(array1)

// (2)

let array2 = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

let index = array2.indexOf("Abacaxi")

console.log("Índice:",index,"Tamanho:",array2.length)





