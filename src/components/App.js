import React from 'react';
import fetchImages from '../services/images-api';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';

export default class App extends React.Component {
  state = {
    searchQuery: '',
    images: [],
    status: 'idle',
    pageNumber: 1,
    showLoadMoreBtn: false,
    showModal: false,
    errorMessage: '',
    src: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    if (prevState.searchQuery !== searchQuery) {
      this.setState({ images: [], status: 'pending', pageNumber: 1 }, () =>
        this.generateSearchQueryResult(searchQuery, this.state.pageNumber),
      );
    }
  }

  generateSearchQueryResult = (searchQuery, pageNumber) => {
    fetchImages(searchQuery, pageNumber)
      .then(data => {
        if (data.hits.length === 0) {
          this.setState({
            status: 'rejected',
            errorMessage: 'No matches found :(',
          });
        } else {
          const totalPages = Math.ceil(data.total / 12);
          const usableImageKeysArr = data.hits.map(
            ({ id, webformatURL, largeImageURL }) => {
              return {
                id,
                webformatURL,
                largeImageURL,
              };
            },
          );

          this.setState(prevState => ({
            images: [...prevState.images, ...usableImageKeysArr],
            status: 'resolved',
            showLoadMoreBtn: totalPages === pageNumber ? false : true,
          }));

          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      })
      .catch(err => {
        this.setState({
          status: 'rejected',
          errorMessage: `There is an error: ${err}`,
        });
      });
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

  onLoadMore = () => {
    this.setState(
      prevState => ({
        pageNumber: prevState.pageNumber + 1,
        status: 'pending',
      }),
      () => {
        const { searchQuery, pageNumber } = this.state;
        this.generateSearchQueryResult(searchQuery, pageNumber);
      },
    );
  };

  render() {
    const { images, status, showLoadMoreBtn, errorMessage, showModal, src } =
      this.state;
    return (
      <>
        <Searchbar onSearch={this.onSearch} />
        {status === 'idle' && <p className="Msg">Enter search query :)</p>}
        {status === 'pending' && (
          <>
            {images.length !== 0 && <ImageGallery imagesArr={images} />}
            <Loader />
            <div className="loadMoreReplacer"></div>
          </>
        )}
        {status === 'rejected' && <p className="Msg">{errorMessage}</p>}
        {status === 'resolved' && (
          <>
            <ImageGallery imagesArr={images} onOpenModal={this.onOpenModal} />
            {showLoadMoreBtn && <Button onLoadMore={this.onLoadMore} />}
          </>
        )}
        {showModal && (
          <Modal onClose={this.onCloseModal}>
            <img src={src} alt="" />
          </Modal>
        )}
      </>
    );
  }
}
