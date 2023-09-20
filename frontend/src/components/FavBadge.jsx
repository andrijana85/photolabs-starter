import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, showNotification}) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={showNotification} selected={true}/>
    </div>
  ) 
};

export default FavBadge;