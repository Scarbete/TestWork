import { MultiContainer } from '@/shared/ui/MultiContainer'
import classes from './Header.module.sass'


const Header = () => {
    return (
        <header className={classes.header}>
            <MultiContainer className={classes.container}>
                <a
                    target={'_blank'}
                    href={'tg://resolve?domain=impxrfect'}
                    className={classes.mainTitle}
                >
                     made by @impxrfect
                </a>
            </MultiContainer>
        </header>
    )
}

export default Header