// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/*

    (1) (a)
        "Matheus Nachtergaele"
        "Virginia Cavendish"
        {canal: "Globo", horario: "14h"}

    (2) (a)
        {nome: "Juca", idade: 3, raca: "SRD"}
        {nome: "Juba", idade: 3, raca: "SRD"}
        {nome: "Jubo", idade: 3, raca: "SRD"}

        (b) ela faz a cópia desse objeto (spread ou espalhamento)

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1.a)

const pessoa = {
    nome: "Andressa",
    apelidos: ["Dedê", "Dê", "Dessa"]
}

const ola = (objeto) => {
    
    const apresentacao = `Olá! Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}.`

    console.log(apresentacao)
}

ola(pessoa)

// // 1.b)

const novaPessoa = {
    ...pessoa,
    apelidos: ["Dedessa", "Dressa", "Azeite de dedê"]
}

ola(novaPessoa)

// 2.a)

const primeiraPessoa = {
    nome: "Andressa",
    idade: 25,
    profissao: "Estudante"
}

const segundaPessoa = {
    nome: "Bianca",
    idade: 19,
    profissao: "Artista"
}

// 2.b)

const funcao = (objeto) => {

    const array = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]

    console.log(array)
}

funcao(primeiraPessoa)
funcao(segundaPessoa)


// 3.a)

let carrinho = []

// 3.b)

const fruta1 = {
    nome: "Banana",
    disponibilidade: true
}

const fruta2 = {
    nome: "Abacate",
    disponibilidade: true
}

const fruta3 = {
    nome: "Jabuticaba",
    disponibilidade: true
}

// 3.c)

const adicionarAoCarrinho = (objetoFruta) => {

    carrinho.push(objetoFruta)
}

adicionarAoCarrinho(fruta1)
adicionarAoCarrinho(fruta2)
adicionarAoCarrinho(fruta3)

// 3.d)

console.log(carrinho)


// DESAFIOS

// (1)

const entrevista = () => {
    const nome = prompt("Qual o seu nome?")
    const idade = +prompt("Qual a sua idade?")
    const profissao = prompt("Qual a sua profissão?")

    const pessoa = {
        nome: nome,
        idade: idade,
        profissao: profissao
    }

    console.log(pessoa)
    console.log(typeof(pessoa))
}

entrevista()

// (2)

const filme1 = {
    nome: "Gênio indomável",
    ano: 1997
}

const filme2 = {
    nome: "Um sonho de liberdae",
    ano: 1994
}

const cinema = (objeto1, objeto2) => {

    const before = (objeto1.ano < objeto2.ano)
    const equal = (objeto1.ano === objeto2.ano)

    console.log(`
    O primeiro filme foi lançado antes do segundo? ${before}
    O primeiro filme foi lançado no mesmo ano do segundo? ${equal}`)

}

cinema(filme1,filme2)

// (3)

const estoque = (objetoFruta) => {
    
    objetoFruta.disponibilidade = !objetoFruta.disponibilidade

}

estoque(fruta1)
estoque(fruta2)
estoque(fruta3)

console.log(fruta1,fruta2,fruta3)
console.log(carrinho)
