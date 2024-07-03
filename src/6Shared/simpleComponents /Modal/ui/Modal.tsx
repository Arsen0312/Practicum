import React, { forwardRef } from 'react';
import cls from "./Modal.module.scss";

interface IModalProps {
    children: React.ReactElement,
    mode: boolean
}

const Modal = forwardRef<HTMLDivElement, IModalProps>(({ children, mode }, ref) => {
    return (
        <div className={mode ? cls.main : cls.none}>
            <div className={cls.bg}></div>
            <div className={cls.modal} ref={ref}>
                <div className={cls.wrapper}>
                    {children}
                </div>
            </div>
        </div>
    );
});

export default Modal;
