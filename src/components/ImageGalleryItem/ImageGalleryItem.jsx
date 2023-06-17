import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import { Item, Img } from './ImageGalleryItem.styled';

export const ImageItem = ({ image: { webformatURL, tags, largeImageURL } })=> {

const [showModal,setShowModal]=useState(false)

const toggleModal = () => {
   setShowModal(showModal=>!showModal);
   
  };
  
    return (
      <>
        <Item>
          <Img
            src={webformatURL}
            alt={tags} 
            onClick={toggleModal}
          />
          {showModal && (
            <Modal
              largeImageURL={largeImageURL}
              tags={tags} 
              onClose={toggleModal}
            />
          )}
        </Item>
      </>
    );
  }


ImageItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

// class ImageItem extends Component {
//   state = {
//     showModal: false,
//   };


//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal, 
//     }));
//   };

//   render() {
//     const { showModal } = this.state;
//     const { image:{webformatURL,tags,largeImageURL} } = this.props;
//     return (
//       <>
//         <Item>
//           <Img
//             src={webformatURL}
//             alt={tags} 
//             onClick={this.toggleModal}
//           />
//           {showModal && (
//             <Modal
//               largeImageURL={largeImageURL}
//               tags={tags} 
//               onClose={this.toggleModal}
//             />
//           )}
//         </Item>
//       </>
//     );
//   }
// }
// export default ImageItem;