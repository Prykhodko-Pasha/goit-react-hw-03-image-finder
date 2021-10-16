import React from 'react';
import s from './Button.module.css';

export default function Button({ onLoadMore }) {
  return (
    <button type="button" className={s.Button} onClick={onLoadMore}>
      Load more
    </button>
  );
}
