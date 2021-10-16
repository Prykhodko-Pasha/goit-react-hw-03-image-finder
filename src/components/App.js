import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import MainInfo from './MainInfo/MainInfo';
import Modal from './Modal/Modal';

export default class ImageFinder extends React.Component {
  state = {
    searchQuery: '',
    showModal: false,
    src: '',
  };

  onSearch = query => {
    this.setState({ searchQuery: query });
  };

  onOpenModal = img => {
    if (img.className.includes('ImageGalleryItem__image')) {
      this.setState({ showModal: true, src: img.dataset.src });
    }
  };

  onCloseModal = () => {
    this.setState({ showModal: false, src: '' });
  };

  render() {
    const { searchQuery, showModal, src } = this.state;
    return (
      <>
        <Searchbar onSearch={this.onSearch} />
        <MainInfo searchQuery={searchQuery} onOpenModal={this.onOpenModal} />
        {showModal && (
          <Modal onClose={this.onCloseModal}>
            <img src={src} alt="" />
          </Modal>
        )}
      </>
    );
  }
}
