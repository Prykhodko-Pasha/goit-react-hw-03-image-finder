import React from 'react';
import fetchImages from '../../services/images-api';
import Loader from '../Loader/Loader';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';

export default class MainInfo extends React.Component {
  state = {
    images: [],
    status: 'pending',
    loadMore: false,
    pageNumber: 1,
  };

  componentDidUpdate(prevProps) {
    const { pageNumber } = this.state;
    const searchQuery = this.props.searchQuery;
    if (prevProps.searchQuery !== searchQuery) {
      this.setState({ images: [], status: 'pending', pageNumber: 1 });
      this.generateSearchQueryResult(searchQuery, pageNumber);
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  generateSearchQueryResult = (searchQuery, pageNumber) => {
    fetchImages(searchQuery, pageNumber)
      .then(data => {
        if (data.hits.length === 0) {
          console.log('Sorry!<br>No matches found...');
          //         new Noty({
          //   theme: 'nest',
          //   type: 'error',
          //   text: 'Sorry!<br>No matches found...',
          //   timeout: 3000,
          // }).show();
        } else {
          const usableImageKeysArr = [];
          const totalPages = Math.ceil(data.total / 12);

          data.hits.map(({ id, webformatURL, largeImageURL }) =>
            usableImageKeysArr.push({ id, webformatURL, largeImageURL }),
          );
          //   console.log(usableImageKeysArr);

          return this.setState(prevState => ({
            images: [...prevState.images, ...usableImageKeysArr],
            status: 'resolved',
            loadMore: totalPages === pageNumber ? false : true,
          }));
        }
      })
      .catch(err => {
        console.log("I've cathed error: ", err);
        this.setState({ status: 'rejected' });
      });
  };

  onLoadMore = () => {
    this.setState(
      prevState => ({
        pageNumber: prevState.pageNumber + 1,
        status: 'pending',
      }),
      () => {
        const searchQuery = this.props.searchQuery;
        const { pageNumber } = this.state;
        console.log(pageNumber);
        this.generateSearchQueryResult(searchQuery, pageNumber);
      },
    );
  };

  render() {
    const { images, status, loadMore } = this.state;

    // if (status === 'idle') {
    //   return <p>Enter search query</p>;
    // }
    if (status === 'pending') {
      return (
        <>
          {images.length !== 0 ? <ImageGallery imagesArr={images} /> : <></>}
          <Loader />
          <div className="loadMoreReplacer"></div>
        </>
      );
    }
    if (status === 'rejected') {
      return <p>Error</p>;
    }
    if (status === 'resolved') {
      return (
        <>
          <ImageGallery
            imagesArr={images}
            onOpenModal={this.props.onOpenModal}
          />
          {loadMore && <Button onLoadMore={this.onLoadMore} />}
        </>
      );
    }
  }
}
