// Exercício 1
// a) O construtor serve para criar objetos da classe em questão com os valores dos atributos passados dentro dos parênteses.
// b) Somente uma vez.

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
       transactions: Transaction[]
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
       this.transactions = transactions
    }

    // c)
    public getCPF(): string {
        return this.cpf
    }
  
}

// const user1 : UserAccount = new UserAccount("292816693", "Andressa", 25, transaction1)

// c) Adicionando métodos púbicos que forneçam essa informação

// Exercício 2

class Transaction {
    private description: string;
    private value: number;
    private date: string

    constructor(
        description: string,
        value: number,
        date: string
    ) {
        this.description = description
        this.value = value
        this.date = date
    }

    public getDescription() : string {
        return this.description
    }

    public getValue(): number {
        return this.value
    }

    public getDate(): string {
        return this.date
    }
}

const transaction1: Transaction = new Transaction("Vôlei de praia", 220, "2022-09-05")
const transaction2 : Transaction = new Transaction("Conta de Luz", 135, "2022-04-16")

const user1 : UserAccount = new UserAccount("292816693", "Andressa", 25, [transaction1])
const user2 : UserAccount = new UserAccount("12345679050", "Manuel", 39, [transaction1, transaction2] )

// Exercício 3

class Bank {
    private accounts: UserAccount[]

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts
    }

    public getAccountByCPF(cpf : string) : UserAccount {
        const account = this.accounts.filter((account) => {
            return account.getCPF() === cpf
        })

        return account[0]
    } 
}

const bank1 : Bank = new Bank([user1, user2])

// console.log(bank1)

console.log(bank1.getAccountByCPF("292816693"))