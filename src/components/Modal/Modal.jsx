import { Overlay, ModalContainer } from "./Modal.styled";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({closeModal, url}) => {

   useEffect(() => {
    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            closeModal();
        }
    }
    if (url) {
        window.addEventListener('keydown', handleKeyDown);
    } 
    
    return () => {
        window.removeEventListener('keydown', handleKeyDown)
    }
   }, [url, closeModal]);
   
    

    const handleBackdropClick = e => {
        if(e.currentTarget === e.target) {
            closeModal();
        }
    }

    return createPortal(
            <Overlay onClick={handleBackdropClick}>
                <ModalContainer>
                    <img src={url} alt=""/>
                </ModalContainer>
            </Overlay>,
            modalRoot,
        )
    ;
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
}