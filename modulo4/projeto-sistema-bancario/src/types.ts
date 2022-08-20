export type Transaction = {
    name: string,
    cpf: string,
    value: number
} 
export type Extract = {
    value: number,
    date: string,
    description: string
}

export type User = {
    name: string, 
    cpf: string,
    birthday: string, // formato americano: yyyy/mm/dd
    balance: number,
    extract: Array< Extract>
    transaction: Array<Transaction>
}