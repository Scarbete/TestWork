
export type Review = {
    id?: number
    text?: string
}

export type Product = {
    id?: number
    description?: string
    image_url?: string
    price?: number
    title?: string
}

export type BasketProduct = {
    quantity: number
} & Product

export type NextPage = {
    amount: number
    page: number
    total: number
    products: Product[]
}

export type GetProductsArgs = {
    page?: number
    page_size?: number
}

export type MainPageModelState = {
    products: any[]
    page: number
    page_size: number
    hasMore: boolean
}

export type MainPageModelActions = {
    setHasMore: (hasMore: boolean) => void
    fetchMoreProducts: () => Promise<NextPage>
}