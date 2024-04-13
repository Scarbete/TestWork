'use client'
import { FC, FormEventHandler } from 'react'
import { CustomButton } from '@/shared/ui/CustomButton'
import { BasketProductsList, useBasketModel } from '@/entities/MainPage/BasketProductsList'
import { MultiContainer } from '@/shared/ui/MultiContainer'
import { useBasketModalModel } from '@/entities/MainPage/BasketClearModal'
import { useShoppingCartModel } from '@/entities/MainPage/ShoppingCart'
import { phoneNumberMask } from '@/shared/variables/variables'
import { alertToast, AlertToastType } from '@/shared/lib/alertToast/alertToast'
import InputMask from 'react-input-mask'
import classNames from 'classnames'
import classes from './ShoppingCart.module.sass'


const ShoppingCart: FC = () => {
    const { basketProducts } = useBasketModel()
    const { setModalShow } = useBasketModalModel()

    const {
        phoneNumber,
        phoneNumberError,
        setPhoneNumber,
        asyncOrderProducts,
        setPhoneNumberError
    } = useShoppingCartModel()

    const openModal = () => {
        if (basketProducts.length) {
            setModalShow(true)
        }
    }

    const isValidPhoneNumber = (phoneNumber: string): boolean => {
        const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/
        return phoneRegex.test(phoneNumber)
    }

    const orderSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        if (!basketProducts.length) {
            setPhoneNumberError(false)
            alertToast(AlertToastType.ERROR, 'Корзина пуста!')
        }
        else if (isValidPhoneNumber(phoneNumber)) {
            setPhoneNumberError(false)
            asyncOrderProducts(basketProducts)
        }
        else {
            setPhoneNumberError(true)
            alertToast(AlertToastType.ERROR, 'Вы не правильно указали номер!')
        }
    }

    return (
        <div className={classes.shoppingCartBox}>
            <MultiContainer className={classes.container}>
                <div className={classes.shoppingCart}>
                    <h3 className={classes.title}>Добавленные товары</h3>
                    <CustomButton
                        className={classes.clearBasketButton}
                        onClick={openModal}
                    >
                        Очистить корзину
                    </CustomButton>
                    <BasketProductsList />
                    <form className={classes.orderForm} onSubmit={orderSubmit}>
                        <InputMask
                            mask={phoneNumberMask}
                            maskChar="_"
                            placeholder="+7 (___) ___-__-__"
                            value={phoneNumber}
                            onChange={setPhoneNumber}
                            className={classNames(
                                classes.inputClass,
                                {[classes.inputClass__Error]: phoneNumberError}
                            )}
                        />
                        <CustomButton>
                            заказать
                        </CustomButton>
                    </form>
                </div>
            </MultiContainer>
        </div>
    )
}

export default ShoppingCart