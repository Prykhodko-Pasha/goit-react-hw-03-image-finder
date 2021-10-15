import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({
  id,
  name,
  number,
  onDeleteContact,
}) {
  return (
    <li className={s.ImageGalleryItem}>
      <img src="" alt="" className={s.ImageGalleryItem__image} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
