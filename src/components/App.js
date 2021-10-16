import React from 'react';
// import imagesAPI from '../services/images-api';
import Searchbar from './Searchbar/Searchbar';
import MainInfo from './MainInfo/MainInfo';
// import s from './App.module.css';

export default class ImageFinder extends React.Component {
  state = {
    searchQuery: '',
  };

  onSearch = query => {
    this.setState({ searchQuery: query });
  };

  render() {
    // let total = this.countContats();
    const { searchQuery } = this.state;
    return (
      <>
        <Searchbar onSearch={this.onSearch} />
        <MainInfo searchQuery={searchQuery} />
      </>
    );
  }
}
