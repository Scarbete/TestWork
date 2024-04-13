import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import classes from './MultiContainer.module.sass'


type Props = {
    children: ReactNode
    className?: string
}


const MultiContainer: FC<Props> = props => {
    const { children, className } = props

    return (
        <div className={classNames(classes.container, className)}>
            {children}
        </div>
    )
}

export default MultiContainer