import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ imagesArr, onOpenModal }) {
  return (
    <ul className={s.ImageGallery} onClick={e => onOpenModal(e.target)}>
      {imagesArr.map(({ id, webformatURL, largeImageURL }, index) => (
        <ImageGalleryItem
          key={index}
          id={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  imagesArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  onOpenModal: PropTypes.func,
};
