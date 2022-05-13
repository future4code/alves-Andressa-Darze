// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/*
    (1)
    (a) 10
        50

    (b) Não apareceria nada no console

    (2) 
    (a) Essa função pega um texto inserido pelo usuário e vê se contém a palavra cenoura ou não.
    (b) true
        true
        false

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// (1)

// (a)

const sobreMim = () => {
    console.log("Eu sou Andressa, tenho 25 anos, moro em Salvador e sou estudante.")
}

sobreMim()

// // (b)

const sobreMim2 = (nome, idade, cidade, profissao) => {

    resposta =  console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)

    return resposta
}

sobreMim2("Andressa", 25, "Salvador", "Estudante")

// (2)

// (a)

const funcaoA = (num1, num2) => {

    resultado = num1 + num2
    return resultado
}

console.log(funcaoA(1,3))

// (b)

const funcaoB = (num1, num2) => {

    resultado = num1 > num2
    return resultado
}

console.log(funcaoB(5,3))

// (c)

const funcaoC = (num) => {

    resultado = (num%2===0)
    return resultado
}

console.log(funcaoC(5))

// (d)

const funcaoD = (mensagem) => {

    tamanho = mensagem.length
    capsLK = mensagem.toUpperCase()
    resultado = `Tamaho: ${tamanho}; Letras maiúsculas: ${capsLK}`

    return resultado

}

console.log(funcaoD("Olá, meu nome é Andressa!"))

// (3)

const soma = (num1, num2) => num1 + num2
const sub = (num1, num2) => num1 - num2
const mult = (num1, num2) => num1 * num2
const div = (num1, num2) => num1 / num2

const numero1 = +prompt("Insira um número:")
const numero2 = +prompt("Insira outro número:")

console.log(`Números inseridos: ${numero1} e ${numero2}
Soma: ${soma(numero1,numero2)}
Diferença: ${sub(numero1,numero2)}
Multiplicação: ${mult(numero1,numero2)}
Divisão: ${div(numero1,numero2)}`)


// DESAFIO

console.log("DESAFIO")

// (1)

// (a)

const arrowA = (x) => {
    return console.log(x)
}

arrowA("Olá")

// (b)

const arrowB = (a,b) => {
    const soma = a + b
    arrowA(soma)
}

arrowB(2,3)

// (2)

console.log("PITÁGORAS")

const pitagoras = (a,b) => {
    hipotenusa = (a**2 + b**2)**(1/2)
    return hipotenusa
}

console.log(pitagoras(7,3))


