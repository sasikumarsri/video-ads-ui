import  { useRef, useEffect } from 'react';
import { Toast } from 'primereact/toast';
import ToastService from '../api/tosterService';

export default function TosterComponent() {
    const toast = useRef<Toast>(null);

    useEffect(() => {
        // Pass the toast reference to the service
        ToastService.setToastRef(toast.current);

        return () => {
            // Clean up reference when the component unmounts
            ToastService.setToastRef(null);
        };
    }, []);

    return (
        <div className="card">
            <Toast ref={toast} />
        </div>
    );
}
