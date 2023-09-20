import React from 'react';
import { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from '../mocks/photos';

const HomeRoute = () => {
  const [favorites, setFavorites] = useState([]);
  //initialize showNotification to false
  const [showNotification, setShowNotification] = useState(false);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((photoId) => photoId !== id));
      console.log(favorites);
    } else {
      setFavorites([...favorites, id]);
      //set showNotification to true when a photo is added to favorites
      setShowNotification(true); 
    }
  }
   // check if photo is in favorites
  const isFavorite = (id) => favorites.includes(id);
  // check if there are photos in favorites
  const isFavPhotoExists = favorites.length > 0;

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExists={isFavPhotoExists} showNotification={showNotification}/>
      <PhotoList 
      favorites={favorites}
      toggleFavorite={toggleFavorite}
      isFavorite={isFavorite}
      photos = {photos}
      />
    </div>
  );
};

export default HomeRoute;
