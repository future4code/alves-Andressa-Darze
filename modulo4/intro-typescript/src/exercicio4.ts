function comparaDoisNumeros(num1:number, num2:number) : number {
    let diferenca = num1 - num2
    if(diferenca < 0) {
        return -diferenca
    } else {
        return diferenca
    }
}

console.log(comparaDoisNumeros(5, 3))