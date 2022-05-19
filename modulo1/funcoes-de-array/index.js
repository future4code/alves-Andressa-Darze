// EXERCÍCIOD DE INTERPRETAÇÃO DE CÓDIGO

/*
    1. 
    {nome: "Amanda Rangel", apelido: "Mandi"}  0  {nome: "Amanda Rangel", apelido: "Mandi"}, {nome: "Laís Petra", apelido: "Laura"},
    {nome: "Letícia Chijo", apelido: "Chijo"}
    {nome: "Laís Petra", apelido: "Laura"}  1  {nome: "Amanda Rangel", apelido: "Mandi"}, {nome: "Laís Petra", apelido: "Laura"},
    {nome: "Letícia Chijo", apelido: "Chijo"}
    {nome: "Letícia Chijo", apelido: "Chijo"}  2  {nome: "Amanda Rangel", apelido: "Mandi"}, {nome: "Laís Petra", apelido: "Laura"},
    {nome: "Letícia Chijo", apelido: "Chijo"}


    2.
        ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

    3. 
        [{nome:"Amanda Rangel", apelido: "Mandi"}, {nome: "Laís Petra", apelido: "Laura"}]

*/




// EXERCÍCIOS DE ESCRITA DE CÓDIGO


// ----- 1 -----

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
// ]

// 1.a)

// const callNomes = (item) => {
//     return item.nome
// }

// const soNomes = pets.map(callNomes)
// console.log(soNomes)


// // 1.b)

// const callSalsicha = (item) => {
//     return item.raca.toLowerCase() === "salsicha"
// }

// const soSalsicha = pets.filter(callSalsicha)
// console.log(soSalsicha)


// // 1.c)

// const callPoodles = (item) => {
//     return item.raca.toLowerCase() === "poodle"
// }

// const soPoodles = pets.filter(callPoodles)

// const callDescontoPoodles = (item) => {
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
// }

// const descontoPoodles = soPoodles.map(callDescontoPoodles)
// console.log(descontoPoodles)



// ----- 2 -----

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]


// // 2.a)

// const callNome = (item) => {
//     return item.nome
// }

// const nome = produtos.map(callNome)
// console.log(nome)

// // 2.b)

// const callDesconto = (item) => {
//     const novoItem = {
//         nome: item.nome,
//         precoDesconto: (item.preco * 0.95).toFixed(2)
//     }
//     return novoItem
// }

// const desconto = produtos.map(callDesconto)
// console.log(desconto)

// // 2.c)

// const callBebidas = (item) => {
//     return item.categoria.toLowerCase() === "bebidas" 
// }

// const bebidas = produtos.filter(callBebidas)
// console.log(bebidas)

// // 2.d)

// const callYpe = (item) => {
//     return item.nome.includes("Ypê")
// }

// const ype = produtos.filter(callYpe)
// console.log(ype)

// // 2.e)

// const novoCallYpe = (item) => {
//     return `Compre ${item.nome} por ${item.preco} reais!`
// }

// const novoYpe = ype.map(novoCallYpe)
// console.log(novoYpe)


// ----- DESAFIOS -----

// 1

// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
// ]

// // 1.a)

// const callNomePokemon = (item) => {
//     return item.nome
// }

// const nomePokemon = pokemons.map(callNomePokemon).sort()
// console.log(nomePokemon)

// // 1.b)

// const callTipos = (item, index, array) => {
//     return item.tipo
// }

// const tipos = pokemons.map(callTipos)
// const tiposUnicos = [...new Set(tipos)]
// console.log(tiposUnicos)

