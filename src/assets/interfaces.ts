export interface IShoppingList {
    id: number
    title: string
    products: IProduct[]
}
export interface IProduct {
    id: number
    title: string
    count: number
    price: number
    buyed: boolean
    measurement: string
}