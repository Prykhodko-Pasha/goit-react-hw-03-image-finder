import React from 'react';
// import imagesAPI from '../services/images-api';
import Searchbar from './Searchbar/Searchbar';
import MainInfo from './MainInfo/MainInfo';
import Modal from './Modal/Modal';
// import SkyLight from 'react-skylight';
// import s from './App.module.css';

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
    // console.dir(img.dataset.src);
    const largeSrc = img.dataset.src;
    console.dir(largeSrc);
    if (img.className.includes('ImageGalleryItem__image')) {
      this.setState({ showModal: true, src: largeSrc });
    }
  };

  onCloseModal = () => {
    // console.dir(img.dataset.src);
    // const largeSrc = img.dataset.src;
    // console.dir(largeSrc);
    // if (img.className.includes('ImageGalleryItem__image')) {
    this.setState({ showModal: false, src: '' });
    // }
  };

  render() {
    // let total = this.countContats();
    const { searchQuery, showModal, src } = this.state;
    // console.log(src);
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
