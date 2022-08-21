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
                date: "2022/05/13",
                description: "Aula de vôlei"
            },
            {
                value: 100 ,
                date: "2022/09/01",
                description: "Personal"
            }
        ]
    },
    {
        name: "Adriano",
        cpf: "29272335515",
        birthday: "07/09/1963",
        balance: 3500,
        extract: [
            {
                value: 1200,
                date: "2022/05/15",
                description: "Mensalidade faculdade"
            }
        ]
    }
]