// 2.a) Entrada: array de números sortidos; Saída: maior número, menor número e a média de todos os números. 

function obterEstatisticas(numeros:number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// 1.b) numerosOrdenados: number[]; soma: number; maior, menor, media: number

// 1.c) 
type amostra = {
    numeros: number[],
    obterEstatisticas: {maior:number, menor:number, media:number}
}
