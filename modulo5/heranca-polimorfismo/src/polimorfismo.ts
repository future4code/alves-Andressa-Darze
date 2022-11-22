// Exercício 1

export interface Client {
    name: string
    registrationNumber: number    
    consumedEnergy: number

    calculateBill(): number 
}

const client1 : Client = {
    name: "Adriano",
    registrationNumber: 1,
    consumedEnergy: 100,

    calculateBill: () => 2
}

// console.log(client1.name, client1.registrationNumber, client1.consumedEnergy, client1.calculateBill())

// Exercício 2

export abstract class Place {
    constructor(protected cep: string) {}
  
    public getCep(): string {
        return this.cep;
    }
}

// const place : Place = new Place("41820340")

// Exercício 3

export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      cep: string
    ) {
      super(cep);
    }
}

export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      cep: string
    ) {
      super(cep);
    }
}

export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      cep: string
    ) {
        super(cep);
    }
}

// const residence : Residence = new Residence(2, "23123123")
// const commerce : Commerce = new Commerce(12, "345231234")
// const industry : Industry = new Industry(7, "41750166")

// console.log(residence.getCep(), commerce.getCep(), industry.getCep())

// Exercício 4
class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ){
        super(residentsQuantity, cep)
    }

    public getCpf(): string {
        return this.cpf
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75
    }
}

// Exercício 5
class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ){
        super(floorsQuantity, cep)
    }

    public getCnpj(): string {
        return this.cnpj
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.53
    }
}

// Exercício 6
class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private nri: string,
        machinesQuantity: number,
        cep: string
    ){
        super(machinesQuantity, cep)
    }

    public getNri(): string {
        return this.nri
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
    }
}