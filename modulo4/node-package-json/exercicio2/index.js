// 2
const operation = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

const calculator = () => {
    switch (operation) {
        case "add":
            return num1 + num2
        case "sub":
            return num1 - num2
        case "mult":
            return num1 * num2
        case "div":
            return num1 / num2
    }
}

if (operation && num1 && num2) {
    console.log("Resposta: ", calculator())
} else {
    console.log("Eram esperados 3 parâmetros")
}
