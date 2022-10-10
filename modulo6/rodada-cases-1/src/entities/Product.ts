export interface IProductDB {
    id: string,
    name: string
}

export interface ITagProductDB {
    product_id: string,
    tag: string
}

export class Product {
    constructor(
        private id: string,
        private name: string,
        private tags: string[]
    ) {}

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getTags = () => {
        return this.tags
    }
}


export interface IProductsInputDTO {
    id: number,
    name: string,
    tags: string[]
}

export interface IInputDBDTO {
    products: IProductDB[],
    tags: ITagProductDB[]
}