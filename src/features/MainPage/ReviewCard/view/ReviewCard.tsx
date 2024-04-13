import { FC } from 'react'
import { Review } from '@/widgets/MainPageWidget'
import classes from './ReviewCard.module.sass'


type Props = {
    review: Review
}


const ReviewCard: FC<Props> = (props) => {

    const { review } = props

    const removeScripts = (html: string) => {
        return html.replace(
            /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ''
        )
    }

    const cleanText = removeScripts(review.text ?? '')

    return (
        <div
            className={classes.reviewCard}
            dangerouslySetInnerHTML={{ __html: cleanText }}
        />
    )
}

export default ReviewCard