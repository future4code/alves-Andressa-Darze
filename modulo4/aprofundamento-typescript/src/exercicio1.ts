// 1.d)
enum CoresDoArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELA = "Amarela",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}
// 1.a) o tipo Number não pode ser atribuido a uma String
const minhaString: string = "Olá, mundo!"
// 1.b) 
const meuNumero: number | string = 12
// 1.c)
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
} 

const obj1 : pessoa = {
    nome: "Andressa",
    idade: 25,
    corFavorita: CoresDoArcoIris.AZUL
}
const obj2 : pessoa = {
    nome: "Bianca",
    idade: 19,
    corFavorita: CoresDoArcoIris.ANIL
}
const obj3 : pessoa = {
    nome: "Rosana",
    idade: 42,
    corFavorita: CoresDoArcoIris.VERMELHO
}

console.log(obj1)