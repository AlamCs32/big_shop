import { toast } from 'react-toastify'


export let toastSuccess = (message) => {
    toast.success(message, { position: toast.POSITION.BOTTOM_CENTER, theme: "dark", autoClose: 1000 })
}

export let toastError = (message) => {
    toast.error(message, { position: toast.POSITION.BOTTOM_CENTER, theme: "dark", autoClose: 1000 })
}