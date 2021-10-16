import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import imagesAPI from '../services/images-api';

export default class ImageFinder extends React.Component {
  state = {
    images: [],
    searchQuery: '',
    // error: '',
    status: 'pending',
  };

  componentDidUpdate(prevState) {
    const { searchQuery } = this.state;
    if (prevState.searchQuery !== searchQuery)
      this.setState({ status: 'pending' });

    imagesAPI
      .fetchImages(searchQuery, 1)
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
          data.hits.map(({ id, webformatURL, largeImageURL }) =>
            usableImageKeysArr.push({ id, webformatURL, largeImageURL }),
          );
          // console.log(usableImagesKeysArr);
          return this.setState({
            images: usableImageKeysArr,
            status: 'resolved',
          });
        }
      })
      .catch(err => {
        console.log("I've cathed error: ", err);
        this.setState({ status: 'rejected' });
      });
  }

  // componentDidUpdate(prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // countContats = () => this.state.contacts.length;

  // filteredContactsArr = () => {
  //   const { contacts, filter } = this.state;
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter),
  //   );
  // };

  // onAddContact = contact => {
  //   const isContactExist = this.state.contacts.filter(
  //     con => con.name.toLowerCase() === contact.name.toLowerCase(),
  //   );
  //   if (isContactExist.length === 0) {
  //     this.setState(prevState => ({
  //       contacts: [...prevState.contacts, contact],
  //     }));
  //   } else {
  //     alert(`${contact.name} is already in contacts.`);
  //   }
  // };

  onSearch = query => {
    this.setState({ searchQuery: query });
  };

  // onDeleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  render() {
    // let total = this.countContats();
    const { searchQuery, status } = this.state;

    // <Searchbar onSearch={this.onSearch} />
    if (status === 'idle') {
      return <p>Enter search query</p>;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <p>Error</p>;
    }
    if (status === 'resolved') {
      return <p>Ok</p>;
    }
  }
}
