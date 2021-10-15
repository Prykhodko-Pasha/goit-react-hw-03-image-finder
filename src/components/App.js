import React from 'react';
import Searchbar from './Searchbar/Searchbar';

export default class ImageFinder extends React.Component {
  state = {
    images: [],
    searchQuery: '',
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch(
      `https://pixabay.com/api/?q=${this.state.searchQuery}&page=1&key=22963299-57829f6e237632471c998bdfc&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(response => response.json())
      .then(data => {
        // console.log(data.hits);
        const usableImagesKeysArr = [];
        data.hits.map(({ id, webformatURL, largeImageURL }) =>
          usableImagesKeysArr.push({ id, webformatURL, largeImageURL }),
        );
        // console.log(usableImagesKeysArr);
        return this.setState({ images: usableImagesKeysArr });
      })
      .finally(() => this.setState({ loading: false }));
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

    return (
      <>
        <Searchbar onSearch={this.onSearch} />
        {/* </Section>
        <Section title="Contacts">
          {total > 0 ? (
            <>
              <ContactsSearch
                value={this.state.filter}
                onChange={this.onSearch}
              />
              <Contacts
                contactsArr={this.filteredContactsArr()}
                onDeleteContact={this.onDeleteContact}
              />
            </>
          ) : (
            <div className={s.wrapper}>
              <p className={s.text}>No contacts yet</p>
            </div>
          )}
        </Section> */}
      </>
    );
  }
}
