import { FC } from 'react'
import { ReviewCard } from '@/features/MainPage/ReviewCard'
import classes from './ReviewList.module.sass'

type Props = {
    reviews: any[]
}

const ReviewList: FC<Props> = (props) => {

    const { reviews } = props

    return (
        <div className={classes.reviewList}>
            {reviews?.map((review, index) => (
                <ReviewCard
                    key={index}
                    review={review}
                />
            ))}
        </div>
    )
}

export default ReviewList