import React from 'react';
import PropTypes from 'prop-types';
import { ImageItem } from '../ImageGalleryItem/ImageGalleryItem';
import {  ListImages } from './ImageGallery.styled';
export const ImageGallery = ({ images }) => {
  return (
    <ListImages>
      {images.map(image => (
        <ImageItem key={image.id} image={image} />
      ))}
    </ListImages>
  )
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;