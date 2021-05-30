import React from "react";

const Modal = () => {
    return (
        <div
            className='modal fade show'
            id='exampleModal'
            tabindex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
            style={{ display: "block" }}>
            <div className='modal-dialog modal-xl'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <button
                            type='button'
                            className='btn-close'
                            data-bs-dismiss='modal'
                            aria-label='Close'></button>
                    </div>
                    <div className='modal-body d-flex justify-content-center'>
                        <img src='/assets/img/interstitiel.jpg' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
