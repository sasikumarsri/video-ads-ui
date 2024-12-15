import { Toast } from 'primereact/toast';

let toastRef: Toast | null = null;

export interface ToastMessage {
    severity: 'success' | 'info' | 'warn' | 'error' | 'secondary' | 'contrast';
    summary: string;
    detail: string;
    life?: number; // Optional: specify the duration
}

const ToastService = {
    setToastRef: (ref: Toast | null) => {
        toastRef = ref;
    },
    show: (message: ToastMessage) => {
        if (toastRef) {
            toastRef.show(message);
        } else {
            console.warn('Toast reference is not set. Ensure the Toast component is mounted and connected.');
        }
    },
};

export default ToastService;
