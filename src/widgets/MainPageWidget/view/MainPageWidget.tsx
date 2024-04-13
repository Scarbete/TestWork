import { FC } from 'react'
import { Review } from '@/widgets/MainPageWidget'
import { ReviewList } from '@/features/MainPage/ReviewList'
import { ProductList } from '@/features/MainPage/ProductList'
import { BasketClearModal } from '@/entities/MainPage/BasketClearModal'
import { SuccessOrderPopup } from '@/entities/SuccessOrderPopup'
import { ShoppingCart } from '@/entities/MainPage/ShoppingCart'


type Props = {
    reviews: Review[]
}


const MainPageWidget: FC<Props> = (props) => {

    const { reviews } = props

    return (
        <div>
            <BasketClearModal/>
            <SuccessOrderPopup/>
            <ReviewList reviews={reviews} />
            <ShoppingCart />
            <ProductList />
        </div>
    )
}

export default MainPageWidget