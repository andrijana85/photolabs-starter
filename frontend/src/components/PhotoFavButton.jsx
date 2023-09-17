import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({isFavorite, toggleFavorite, photoId}) {
  const [selected, setSelected] = useState(false);

  const handleClick = useCallback(() => {
    setSelected((selected) => !selected);
  }, []);

  return (
    <div className="photo-list__fav-icon" onClick={() => toggleFavorite(photoId)} >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorite(photoId)} />
      </div>
    </div>
  );
}

export default PhotoFavButton;