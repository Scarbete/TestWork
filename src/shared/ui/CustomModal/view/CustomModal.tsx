'use client'
import { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import classes from './CustomModal.module.sass'

interface Props {
    children: ReactNode,
    open: boolean,
    handleClose: () => void,
    className?: string,
    contentClass?: string,
    style?: CSSProperties
}


const CustomModal: FC<Props> = props => {
    const { children, open, handleClose, className, contentClass, style } = props
    const [ mounted, setMounted ] = useState<boolean>(false)
    const timer = useRef<NodeJS.Timeout>()

    useEffect(() => {
        if (typeof window !== 'undefined') {
            clearTimeout(timer.current)

            if (!open) {
                timer.current = setTimeout(() => setMounted(false), 300)
                document.body.style.overflow = 'auto'
            }
            else {
                setMounted(true)
                document.body.style.overflow = 'hidden'
            }
        }
    }, [ open ])

    if (typeof window === 'undefined') return null

    return !mounted ? <></> : createPortal(
        <>
            <div
                className={
                    classNames(
                        classes.background,
                        {[classes.open]: open},
                        {[classes.closed]: !open}
                    )
                }
                onClick={event => {
                    event.stopPropagation()
                    handleClose()
                }}>
            </div>
            <div
                className={
                    classNames(
                        classes.wrapper,
                        className,
                        {[classes.open]: open},
                        {[classes.closed]: !open},
                    )
                }
                style={style}
            >
                <div className={classNames(classes.content, contentClass)}>
                    {children}
                </div>
            </div>
        </>,
        document.querySelector('#portal') || document.body
    )
}

export default CustomModal