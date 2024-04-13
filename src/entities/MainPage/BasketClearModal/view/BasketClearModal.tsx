'use client'
import { CustomModal } from '@/shared/ui/CustomModal'
import { CustomButton } from '@/shared/ui/CustomButton'
import { useBasketModalModel } from '@/entities/MainPage/BasketClearModal'
import { useBasketModel } from '@/entities/MainPage/BasketProductsList'
import { AlertToastType, alertToast } from '@/shared/lib/alertToast/alertToast'
import classes from './BasketClearModal.module.sass'


const BasketClearModal = () => {

    const {
        isModalShow,
        setModalShow
    } = useBasketModalModel()

    const { clearBasketProducts } = useBasketModel()

    const handleCloseModal = () => {
        setModalShow(false)
    }

    const handleClearBasket = () => {
        alertToast(AlertToastType.SUCCESS, 'Корзина очищена!')
        clearBasketProducts()
        handleCloseModal()
    }

    return (
        <CustomModal
            className={classes.wrapper}
            contentClass={classes.modalContent}
            handleClose={handleCloseModal}
            open={isModalShow}
        >
            <div className={classes.top}>
                <button onClick={handleCloseModal}>
                    close
                </button>
            </div>
            <div className={classes.info}>
                <h2>Вы действительно хотите очистить корзину?</h2>
                <p>Все ваши продукты в корзине пропадут...</p>
            </div>
            <div className={classes.buttons}>
                <CustomButton onClick={handleClearBasket}>
                    Очистить корзину
                </CustomButton>
            </div>
        </CustomModal>
    )
}

export default BasketClearModal