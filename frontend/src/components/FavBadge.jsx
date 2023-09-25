import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExists, showNotification}) => {
  console.log(isFavPhotoExists);
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={isFavPhotoExists} selected={true}/>
    </div>
  ) 
};

export default FavBadge;