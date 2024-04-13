import { ChangeEvent } from 'react'
import {BasketProduct} from '@/widgets/MainPageWidget'

export type ShoppingCartModel = {
    phoneNumber: string
    phoneNumberError: boolean
}

export type ShoppingCartActions = {
    asyncOrderProducts: (products: BasketProduct[]) => void
    setPhoneNumberError: (phoneNumberError: boolean) => void
    setPhoneNumber: (event: ChangeEvent<HTMLInputElement>) => void
}