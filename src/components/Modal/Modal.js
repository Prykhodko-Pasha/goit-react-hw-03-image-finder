import React from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

export default class Modal extends React.Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={s.Overlay} onClick={this.onClickBackdrop}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>
    );
  }
}
