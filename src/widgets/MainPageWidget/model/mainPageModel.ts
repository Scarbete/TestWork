import { create } from 'zustand'
import { GetProductsArgs, MainPageModelActions, MainPageModelState } from '@/widgets/MainPageWidget'
import { BASE_URL } from '@/shared/variables/variables'

export const getReviews = async () => {
    try {
        const response = await fetch(`${BASE_URL}/reviews`, {
            next: {
                revalidate: 60
            }
        })
        return response.json()
    }
    catch (error) {
        return null
    }
}

export const getProducts = async ({ page, page_size }: GetProductsArgs) => {
    try {
        const response = await fetch(`${BASE_URL}/products?page=${page}&page_size=${page_size}`)
        return response.json()
    }
    catch (error) {
        return null
    }
}


export const useMainPageModel = create<MainPageModelState & MainPageModelActions>((setState, getState) => ({
    products: [],
    page: 1,
    page_size: 3,
    hasMore: true,
    setHasMore: (hasMore) => {
        setState({hasMore: hasMore})
    },
    fetchMoreProducts: async () => {
        const {page_size} = getState()
        const nextPage = await getProducts({ page: getState().page + 1, page_size: page_size })

        setState((state) => ({
            products: [
                ...state.products,
                ...nextPage.products
            ],
            page: state.page + 1,
        }))

        return nextPage
    },
}))