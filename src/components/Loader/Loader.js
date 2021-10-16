import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function Loader() {
  return (
    <ul className="ImageGallery">
      <li className="ImageGalleryItem">
        <Skeleton height={260} />
      </li>
      <li className="ImageGalleryItem">
        <Skeleton height={260} />
      </li>
      <li className="ImageGalleryItem">
        <Skeleton height={260} />
      </li>
    </ul>
  );
}
