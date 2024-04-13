import { MultiContainer } from '@/shared/ui/MultiContainer'
import { getReviews, MainPageWidget, Review } from '@/widgets/MainPageWidget'


const Page = async () => {
    const reviews: Review[] = await getReviews()

    return (
        <section>
            <MultiContainer>
                <MainPageWidget reviews={reviews} />
            </MultiContainer>
        </section>
    )
}

export default Page