import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from "./Modal.module.css"

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount() {
        // console.log('Modal componentDidMount');
        window.addEventListener('keydown', this.handleKeyDown)
    
    }

    componentWillUnmount() {
        // console.log('Modal componentWillUnmount');
        window.removeEventListener('keydown', this.handleKeyDown);

    }

     handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');

      this.props.onClose();
    }
    };
    
    handleBackdropClick = event => {
        // console.log('Кликнули в бекдроп');
        // console.log('currentTarget: ', event.currentTarget);
        // console.log('target: ', event.target);

        if (event.currentTarget === event.target) {
      this.props.onClose();
    }
    }
    render() {
        const { children, source,el,getElem, largeImageURL } = this.props;
        return createPortal(
            <div className={s.Modal__backdrop} onClick={this.handleBackdropClick}>
                <div className={s.Modal__content}>
                    <img src={source}
                        alt="" />
                    {children}</div>
            </div>, modalRoot,
            
        )
    }
}

export default Modal;

