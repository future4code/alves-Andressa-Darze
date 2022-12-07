// 1.a) Utilizando o comando process.argv[n], n >= 2

// 1.b)
const nome = process.argv[2]
const idade = process.argv[3]
// console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

// // 1.c)
// console.log(`Olá, ${nome}! Em sete anos, você terá ${Number(idade) + 7}.`)

const checking = () => {
    if(nome && idade) {
        return `Olá, ${nome}! Você tem ${idade} anos. Olá, ${nome}! Em sete anos, você terá ${Number(idade) + 7}.` 
    } else {
        return "Eram esperados 2 parâmetros"
    }
}

console.log(checking())
