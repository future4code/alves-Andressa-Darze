function apresentation(name:string, birthDate:string) : string {
    const dateArray = birthDate.split("/")
    const date = dateArray[0]
    const month = dateArray[1]
    const year = dateArray[2]

    return `Olá! Me chamo ${name}, nasci no dia ${date} do mês ${month} do ano de ${year}`
}

console.log(apresentation("Andressa", "26/04/1997"))