import React from 'react';
import { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from '../mocks/photos';

const HomeRoute = () => {
  const [favorites, setFavorites] = useState([]);
  
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((photoId) => photoId !== id));
      console.log(favorites);
    } else {
      setFavorites([...favorites, id]);
    }
  }

  const isFavorite = (id) => favorites.includes(id);

  return (
    <div className="home-route">
      <TopNavigationBar />
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
