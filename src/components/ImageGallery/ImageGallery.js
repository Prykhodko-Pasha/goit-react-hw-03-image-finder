import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ contactsArr, onDeleteContact }) {
  return (
    <ul className={s.ImageGallery}>
      {contactsArr.map(({ id, name, number }) => (
        <ImageGalleryItem
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  contactsArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
