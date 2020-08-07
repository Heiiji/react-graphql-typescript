import React from 'react';

type ModalProps = {
    onHide: any,
    show: boolean,
    children: any,
    title: string
}

const Modal = ({ show, onHide, children, title }: ModalProps) => {
    return (
        <div onClick={onHide} className={`my-modal-back ${show ? '' : 'hidden'}`}>
            <div onClick={ev => ev.stopPropagation()} className="my-modal-body">
                <div className="my-modal-header">
                    a title
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