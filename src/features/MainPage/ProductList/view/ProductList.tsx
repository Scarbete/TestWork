'use client'
import { NextPage, useMainPageModel } from '@/widgets/MainPageWidget'
import { useEffect } from 'react'
import { ProductCard } from '@/features/MainPage/ProductCard'
import { Loading } from '@/shared/ui/Loading'
import InfiniteScroll from 'react-infinite-scroll-component'
import classes from './ProductList.module.sass'


const ProductList = () => {

    const {
        products,
        hasMore,
        fetchMoreProducts,
        setHasMore
    } = useMainPageModel()

    const fetchNextPage = async () => {
        // Задержка выполнения на 3-5 секунд
        // чтобы можно было увидеть загрузку
        // await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 3000))

        const nextPage: NextPage = await fetchMoreProducts()

        if (!nextPage?.products?.length) {
            setHasMore(false)
        }
    }

    useEffect(() => {
        setHasMore(true)
    }, [products])

    return (
        <InfiniteScroll
            dataLength={products.length}
            next={fetchNextPage}
            hasMore={hasMore}
            loader={<Loading/>}
            className={classes.infiniteScrollBox}
        >
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </InfiniteScroll>
    )
}

export default ProductList