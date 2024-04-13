import { create } from 'zustand'
import { SuccessOrderActions, SuccessOrderState } from '@/entities/SuccessOrderPopup'


export const localSuccessPopup = 'localSuccessPopup'


export const saveToLocal = (isShowPopupModal: boolean) => {
    typeof window !== 'undefined' && (
        localStorage.setItem(localSuccessPopup, JSON.stringify(isShowPopupModal))
    )
}


export const useSuccessOrderModel = create<SuccessOrderState & SuccessOrderActions>((setState, getState) => ({
    isShowPopupModal: false,
    setIsShowPopupModal: (isShowPopupModal) => {
        setState({
            isShowPopupModal: isShowPopupModal
        })
        saveToLocal(getState().isShowPopupModal)
    }
}))

const storedSuccessPopup = (
    typeof window !== 'undefined' &&
    JSON.parse(localStorage.getItem(localSuccessPopup) ?? 'false')
)

useSuccessOrderModel.setState({ isShowPopupModal: storedSuccessPopup })