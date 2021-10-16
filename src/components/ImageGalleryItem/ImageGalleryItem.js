import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ id, webformatURL, largeImageURL }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        id={id}
        src={webformatURL}
        alt=""
        className={s.ImageGalleryItem__image}
        data-src={largeImageURL}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
