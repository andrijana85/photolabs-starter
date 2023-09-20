import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = ({ isFavPhotoExists, showNotification }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
        <TopicList />
        <FavBadge isFavPhotoExists={isFavPhotoExists} showNotification={showNotification} />
    </div>
  )
}

export default TopNavigationBar;