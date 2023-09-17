import React from "react";

import "../styles/PhotoListItem.scss";
import FavIcon from "./FavIcon";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = ({ id, location, urls, user, toggleFavorite, isFavorite, photoId}) => {
 return (
    <div className="photo-list__item">
      
    <PhotoFavButton 
      toggleFavorite = {toggleFavorite}
      isFavorite={isFavorite}
      photoId={photoId}
  />  
      <img 
      src={urls.regular} 
      alt={`photo taken in ${location.city}, ${location.country}`} 
      className="photo-list__image" 
      />
   
      <div className="photo-list__user-details">
      <img 
      src={user.profile} 
      alt={`profile of ${user.name}`} 
      className="photo-list__user-profile" 
      />
      <div className="photo-list__user-info">{user.name}
      <div className="photo-list__user-location">{location.city}, {location.country}
      </div>
      </div>
      </div>
    </div>
 )
};

export default PhotoListItem;
