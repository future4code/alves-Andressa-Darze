export type Transaction = {
    value: number,
    date: string,
    description: string
}

export type User = {
    name: string, 
    cpf: string,
    birthday: string, // formato americano: yyyy/mm/dd
    balance: number,
    extract: Array<Transaction>
}