import { create } from 'zustand'
import { ShoppingCartActions, ShoppingCartModel} from '@/entities/MainPage/ShoppingCart'
import { alertToast, AlertToastType } from '@/shared/lib/alertToast/alertToast'
import { $mainApi } from '@/shared/lib/axios/requester'
import { saveToLocalBasket, useBasketModel } from '@/entities/MainPage/BasketProductsList'
import { useSuccessOrderModel } from '@/entities/SuccessOrderPopup'


const localPhoneNumber = 'localPhoneNumber'


export const saveToLocalPhoneNumber = (phoneNumber: string) => {
    typeof window !== 'undefined' && (
        localStorage.setItem(localPhoneNumber, JSON.stringify(phoneNumber))
    )
}


export const useShoppingCartModel = create<ShoppingCartModel & ShoppingCartActions>((setState, getState) => ({
    phoneNumber: '',
    phoneNumberError: false,
    setPhoneNumberError: (phoneNumberError) => {
        setState({
            phoneNumberError: phoneNumberError
        })
    },
    setPhoneNumber: (event) => {
        setState({
            phoneNumber: event.target.value
        })
        saveToLocalPhoneNumber(getState().phoneNumber)
    },
    asyncOrderProducts: async (products) => {
        try {
            const phoneNumber = getState().phoneNumber
            const formattedPhoneNumber = `7${phoneNumber.replace(/\D/g, '').slice(1)}`

            const cart = products.map(item => ({
                id: item.id,
                quantity: item.quantity,
            }))

            const orderData = {
                phone: formattedPhoneNumber,
                cart: cart
            }

            const { data, status } = await $mainApi.post(`order`, orderData)

            if (status <= 204 && status >= 200 && data.success === 1) {
                alertToast(AlertToastType.SUCCESS, 'Заказ прошел успешно!')
                setState({
                    phoneNumber: '',
                })
                useBasketModel.setState({basketProducts: []})
                saveToLocalBasket(useBasketModel.getState().basketProducts)
                useSuccessOrderModel.getState().setIsShowPopupModal(true)
                saveToLocalPhoneNumber('')
            }
        }
        catch (error) {
            alertToast(AlertToastType.ERROR, 'Ошибка отправки заказа!')
        }
    }
}))

const storedPhoneNumber = (
    typeof window !== 'undefined' &&
    JSON.parse(localStorage.getItem(localPhoneNumber) ?? '')
)

useShoppingCartModel.setState({ phoneNumber: storedPhoneNumber ?? '' })