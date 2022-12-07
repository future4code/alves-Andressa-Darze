// Exercício 1
class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }
    // Exercício 4
    public introduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`
    }
}

const user1: User = new User("001", "andressa@gmail.com", "Andressa Darzé", "andressa123")

// console.log(user1.getId())
// console.log(user1.getEmail())
// console.log(user1.getName())

// Exercício 2
class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

const customer1 : Customer = new Customer("002", "bianca@gmail.com", "Bianca", "bianca123", "123456789321654")

// Exercício 3
// console.log(customer1.getId())
// console.log(customer1.getEmail())
// console.log(customer1.getName())
// console.log(customer1.getCreditCard())
// console.log(customer1.purchaseTotal)
// Exercício 4
// console.log(customer1.introduceYourself())
