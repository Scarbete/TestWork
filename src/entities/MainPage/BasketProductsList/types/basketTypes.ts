import { BasketProduct, Product } from '@/widgets/MainPageWidget'

export type ShoppingCartState = {
    basketProducts: BasketProduct[]
}

export type ShoppingCartActions = {
    addToBasketProducts: (product: Product) => void
    clearBasketProducts: () => void
    editBasketProduct: (id: number, newQuantity: number) => void
    removeFromBasketProducts: (id: number) => void
}