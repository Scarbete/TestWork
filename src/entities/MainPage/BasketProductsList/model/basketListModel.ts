import { create } from 'zustand'
import { alertToast, AlertToastType } from '@/shared/lib/alertToast/alertToast'
import { BasketProduct } from '@/widgets/MainPageWidget'
import { localBasketProducts } from '@/shared/variables/variables'
import { ShoppingCartActions, ShoppingCartState } from '@/entities/MainPage/BasketProductsList'


export const saveToLocalBasket = (products: BasketProduct[]) => {
    typeof window !== 'undefined' && (
        localStorage.setItem(localBasketProducts, JSON.stringify(products))
    )
}


export const useBasketModel = create<ShoppingCartState & ShoppingCartActions>((setState, getState) => ({
    basketProducts: [],
    addToBasketProducts: (product) => {
        const newProduct = {
            ...product, quantity: 1,
        }
        setState((state) => ({
            basketProducts: [...state.basketProducts, newProduct]
        }))
        saveToLocalBasket(getState().basketProducts)
    },
    clearBasketProducts: () => {
        setState({
            basketProducts: []
        })
        saveToLocalBasket(getState().basketProducts)
    },
    removeFromBasketProducts: (id) => {
        const newList = getState().basketProducts.filter(
            item => item.id !== id
        )
        setState({basketProducts: [...newList]})

        if (!getState().basketProducts.length) {
            alertToast(AlertToastType.SUCCESS, 'Корзина очищена!')
        }

        saveToLocalBasket(getState().basketProducts)
    },
    editBasketProduct: (id, newQuantity) => {
        const itemIndex = getState().basketProducts.findIndex(
            item => item.id === id
        )
        if (itemIndex !== -1) {
            const updatedBasketItems = [...getState().basketProducts]
            updatedBasketItems[itemIndex] = {
                ...updatedBasketItems[itemIndex],
                quantity: newQuantity,
            }
            setState({
                basketProducts: [...updatedBasketItems]
            })
            saveToLocalBasket(getState().basketProducts)
        }
    },
}))


const storedBasketProducts = (
    typeof window !== 'undefined' &&
    JSON.parse(localStorage.getItem(localBasketProducts) ?? '[]')
)

useBasketModel.setState({ basketProducts: storedBasketProducts })