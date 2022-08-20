import { User } from "./types";

export const users : User[] = [
    {
        name: "Andressa",
        cpf: "86174640540",
        birthday: "26/04/1997",
        balance: 1000,
        extract: [
            {
                value: 50,
                date: "20/08/2022",
                description: "Aula de vôlei"
            },
            {
                value: 100 ,
                date: "19/08/2022",
                description: "Personal"
            }
        ],
        transaction: []
    },
    {
        name: "Adriano",
        cpf: "29272335515",
        birthday: "07/09/1963",
        balance: 3500,
        extract: [
            {
                value: 1200,
                date: "15/05/2022",
                description: "Mensalidade faculdade"
            }
        ],
        transaction: []
    }
]