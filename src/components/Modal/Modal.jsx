import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {  ModalWindow, ModalOverlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseEsc); 
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseEsc); 
    document.body.style.overflow = 'visible';
  }

  handleCloseEsc = e => {
    if (e.code === 'Escape') {
      this.props.onClose(); 
    }
  };

  handleCloseBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose(); 
    }
  };

  render() {
    const { largeImageURL, tags } = this.props; 

    return createPortal(
      <ModalOverlay onClick={this.handleCloseBackdrop}>
        <ModalWindow>
          <img src={largeImageURL} alt={tags} width={1200} height={800} />
        </ModalWindow>
      </ModalOverlay>,
      modalRoot 
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;