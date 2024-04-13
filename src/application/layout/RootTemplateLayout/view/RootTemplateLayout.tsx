import { FC, ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import { Header } from '@/widgets/Header'
import classes from './RootTemplateLayout.module.sass'


interface Props {
    children: ReactNode
}


const RootTemplateLayout: FC<Props> = props => {

    const { children } = props

    return (
        <html lang={'en'}>
            <body>
                <div className={classes.portal} id={'portal'}>
                    <ToastContainer />
                </div>
                <div className={classes.root}>
                    <Header />
                    <main>
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
}

export default RootTemplateLayout