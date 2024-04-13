import { toast, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const toastOptions: ToastOptions = {
    autoClose: 2000,
    position: 'top-right',
}

export enum AlertToastType {
    INFO = 'info',
    SUCCESS = 'success',
    ERROR = 'error'
}

export const alertToast = (type: AlertToastType = AlertToastType.SUCCESS, message: string) => {
    const notify = () => toast[ type ](message, toastOptions)
    notify()
}
