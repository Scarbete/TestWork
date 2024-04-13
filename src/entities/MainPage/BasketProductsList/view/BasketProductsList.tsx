import { FC } from 'react'
import { useBasketModel } from '@/entities/MainPage/BasketProductsList'
import { BasketProductCard} from '@/entities/MainPage/BasketProductCard'
import classes from './BasketProductsList.module.sass'


const BasketProductsList: FC = () => {

    const { basketProducts } = useBasketModel()

    return (
        <div className={classes.basketProductsList}>
            {basketProducts.length > 0
                ? basketProducts?.map(item =>
                    <BasketProductCard
                        key={item.id}
                        item={item}
                    />
                ) : (
                    <h2>Корзина пуста</h2>
                )
            }
        </div>
    )
}

export default BasketProductsList