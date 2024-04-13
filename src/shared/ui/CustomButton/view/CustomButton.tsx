import { FC, HTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'
import classes from './CustomButton.module.sass'


type Props = {
    className?: string
    children: ReactNode
} & HTMLAttributes<HTMLButtonElement>


const CustomButton: FC<Props> = (props) => {

    const {
        className,
        children,
        ...otherProps
    } = props

    return (
        <button
            {...otherProps}
            className={classNames(classes.button, className)}
        >
            {children}
        </button>
    )
}

export default CustomButton