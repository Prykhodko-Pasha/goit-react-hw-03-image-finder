import React from 'react';
import Skeleton from 'react-loading-skeleton';
import s from '../ImageGallery/ImageGallery.module.css';

export default function Loader() {
  return (
    <ul className={s.ImageGallery}>
      <li>
        <Skeleton height={260} />
      </li>
      <li>
        <Skeleton height={260} />
      </li>
      <li>
        <Skeleton height={260} />
      </li>
      <li>
        <Skeleton height={260} />
      </li>
      <li>
        <Skeleton height={260} />
      </li>
      <li>
        <Skeleton height={260} />
      </li>
      <li>
        <Skeleton height={260} />
      </li>
      <li>
        <Skeleton height={260} />
      </li>
      <li>
        <Skeleton height={260} />
      </li>
      <li>
        <Skeleton height={260} />
      </li>
      <li>
        <Skeleton height={260} />
      </li>
      <li>
        <Skeleton height={260} />
      </li>
    </ul>
  );
}
