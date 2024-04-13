import { FC } from 'react'
import { BasketProduct } from '@/widgets/MainPageWidget'
import classes from './BasketProductCard.module.sass'


type Props = {
    item: BasketProduct
}


const BasketProductCard: FC<Props> = (props) => {

    const {item} = props

    const productPrice = (item: BasketProduct): number => {
        if (item.price) return item.quantity * item.price
        else return 0
    }

    return (
        <div key={item.id} className={classes.product}>
            <p>Название: {item.title}</p>
            <p>Количевство: {item.quantity}x,</p>
            <p>Цена: {productPrice(item)}₽</p>
        </div>
    )
}

export default BasketProductCard