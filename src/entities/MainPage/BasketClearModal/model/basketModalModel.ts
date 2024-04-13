import { create } from 'zustand'
import { BasketModalActions, BasketModalState } from '@/entities/MainPage/BasketClearModal'


export const useBasketModalModel = create<BasketModalState & BasketModalActions>((setState) => ({
    isModalShow: false,
    setModalShow: (isModalShow) => {
        setState({isModalShow: isModalShow})
    }
}))