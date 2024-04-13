'use client'
import { CustomModal } from '@/shared/ui/CustomModal'
import { useSuccessOrderModel } from '@/entities/SuccessOrderPopup'
import { CustomButton } from '@/shared/ui/CustomButton'
import classes from './SuccessOrderPopup.module.sass'


const SuccessOrderPopup = () => {

    const {
        isShowPopupModal,
        setIsShowPopupModal
    } = useSuccessOrderModel()

    const handleClosePopup = () => {
        setIsShowPopupModal(false)
    }

    return (
        <CustomModal
            open={isShowPopupModal}
            handleClose={handleClosePopup}
            className={classes.wrapper}
            contentClass={classes.modalContent}
        >
            <div className={classes.top}>
                <h2>Заказ выполнен</h2>
                <button onClick={handleClosePopup}>
                    Закрыть
                </button>
            </div>
            <div className={classes.info}>
                <h2>Поздравляем вы успешно совершили заказа товаров!</h2>
                <p>В скором времени мы с вами свяжемся...</p>
            </div>
            <div className={classes.bottom}>
                <CustomButton onClick={handleClosePopup}>
                    Принять
                </CustomButton>
            </div>
        </CustomModal>
    )
}

export default SuccessOrderPopup