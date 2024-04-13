import { FC } from 'react'
import { Product } from '@/widgets/MainPageWidget'
import { QuantityController } from '@/features/MainPage/QuantityController'
import Image from 'next/image'
import classes from './ProductCard.module.sass'


type Props = {
    product: Product
}


const ProductCard: FC<Props> = (props) => {

    const { product } = props

    return (
        <div className={classes.productCard}>
            <div className={classes.imageBox}>
                <Image
                    width={281}
                    height={366}
                    src={product.image_url ?? ''}
                    alt={product.title ?? ''}
                    unoptimized
                />
            </div>
            <h2 className={classes.name}>
                {product.title}
            </h2>
            <p className={classes.description}>
                {product.description}
            </p>
            <div className={classes.quantityController}>
                <QuantityController
                    product={product}
                />
            </div>
        </div>
    )
}

export default ProductCard