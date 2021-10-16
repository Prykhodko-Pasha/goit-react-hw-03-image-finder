import React from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

export default class Searchbar extends React.Component {
  state = {
    query: '',
  };

  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  onChange = e => {
    this.setState({ query: e.currentTarget.value.trim() });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.query);
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={s.SearchForm__button}>
            <span className={s.SearchForm__button__label}>Search</span>
          </button>

          <input
            className={s.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChange}
          />
        </form>
      </header>
    );
  }
}
