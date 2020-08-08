import React from 'react';

type ModalProps = {
    onHide: any,
    show: boolean,
    children: any,
    title: string,
    className: string | undefined
}

const Modal = ({ show, onHide, children, title, className }: ModalProps) => {
    return (
        <div onClick={onHide} className={`my-modal-back ${show ? '' : 'hidden'}`}>
            <div onClick={ev => ev.stopPropagation()} className={`my-modal-body ${className}`}>
                <div className="my-modal-header">
                    {title}
                </div>
                <div>
                    {
                        children
                    }
                </div>
            </div>
        </div>
    );
}

export default Modal;