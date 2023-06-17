import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {  ModalWindow, ModalOverlay } from './Modal.styled';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ largeImageURL, tags , onClose}) => {
  
  useEffect(() => {
    const handleCloseEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
  
    window.addEventListener('keydown', handleCloseEsc);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleCloseEsc);
      document.body.style.overflow = 'visible';
    }
  }, [onClose]);
  
    const handleCloseBackdrop = e => {
      if (e.currentTarget === e.target) {
        onClose();
      }
    };
    return createPortal(
      <ModalOverlay onClick={handleCloseBackdrop}>
        <ModalWindow>
          <img src={largeImageURL} alt={tags} width={1200} height={800} />
        </ModalWindow>
      </ModalOverlay>,
      modalRoot 
    );
  }


Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleCloseEsc); 
//     document.body.style.overflow = 'hidden';
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleCloseEsc); 
//     document.body.style.overflow = 'visible';
//   }

//   handleCloseEsc = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose(); 
//     }
//   };

//   handleCloseBackdrop = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose(); 
//     }
//   };

//   render() {
//     const { largeImageURL, tags } = this.props; 

//     return createPortal(
//       <ModalOverlay onClick={this.handleCloseBackdrop}>
//         <ModalWindow>
//           <img src={largeImageURL} alt={tags} width={1200} height={800} />
//         </ModalWindow>
//       </ModalOverlay>,
//       modalRoot 
//     );
//   }
// }
// export default Modal;