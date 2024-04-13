'use client'
import { FC, useEffect, useState } from 'react'
import { BasketProduct, Product } from '@/widgets/MainPageWidget'
import { CustomButton } from '@/shared/ui/CustomButton'
import { useBasketModel } from '@/entities/MainPage/BasketProductsList'
import { alertToast, AlertToastType } from '@/shared/lib/alertToast/alertToast'
import classes from './QuantityController.module.sass'


type Props = {
    product: Product
}


const QuantityController: FC<Props> = (props) => {

    const { product } = props

    const {
        basketProducts,
        addToBasketProducts,
        editBasketProduct,
        removeFromBasketProducts,
    } = useBasketModel()

    const [isFoundInBasket, setIsFoundInBasket] = useState<BasketProduct | null>(null)
    const { id, quantity } = isFoundInBasket ?? {}

    const handleClickBuy = () => {
        alertToast(AlertToastType.SUCCESS, 'Продукт добавлен в корзину!')
        addToBasketProducts(product)
    }

    const handleQuantityChange = (productId: number, newQuantity: number) => {
        if (!newQuantity) {
            alertToast(AlertToastType.SUCCESS, 'Товар удален из корзины!')
            setIsFoundInBasket(null)
            removeFromBasketProducts(productId)
        }
        else if (productId && newQuantity) {
            editBasketProduct(productId, newQuantity)
        }
    }

    const decreaseQuantity = () => {
        id && quantity && handleQuantityChange(id, quantity - 1)
    }

    const increaseQuantity = () => {
        id && quantity && handleQuantityChange(id, quantity + 1)
    }

    const findProduct = () => {
        basketProducts.map((newItem => {
            (newItem.id === product.id) && setIsFoundInBasket(newItem)
        }))
    }

    useEffect(() => {
        if (!basketProducts.length) setIsFoundInBasket(null)
        else findProduct()
    }, [product, basketProducts])

    return (
        <div className={classes.quantityController}>
            <p className={classes.price}>
                Цена: {product.price}₽
            </p>
            {isFoundInBasket ? (
                <div className={classes.quantityChanger}>
                    <CustomButton onClick={decreaseQuantity}>
                        -
                    </CustomButton>
                    <div className={classes.quantityInfo}>
                        {isFoundInBasket?.quantity ?? 0}
                    </div>
                    <CustomButton onClick={increaseQuantity}>
                        +
                    </CustomButton>
                </div>
            ) : (
                <CustomButton
                    className={classes.buyButton}
                    onClick={handleClickBuy}
                >
                    купить
                </CustomButton>
            )}
        </div>
    )
}

export default QuantityController