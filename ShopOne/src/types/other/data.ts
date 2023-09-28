export interface ProductsInterface {
    name: string,
    icon: string,
    price: string,
    rating: number,
    category?: string,
    reviews?: {
        name: string,
        score: number,
        comment: string
    }[],
    details?: string,
}

export type Categories = {
    [key: string]: {
        icon: string
    }
}