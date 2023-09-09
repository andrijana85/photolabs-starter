import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = ({ id, location, imageSource, username, profile}) => {
 return (
    <div className="photo-list-item">
      
      <div className="photo-list-item__image-container">
        <img src={imageSource} alt={`photo taken in ${location.city}, ${location.country}`} className="photo-list-item__image" />
        <img src={profile} alt={`profile of ${username}`} className="photo-list-item__profile" />
      </div>
      <div className="photo-list-item__description">
      <div className="photo-list-item__username">{username}
      </div>
        <div className="photo-list-item__location">{location.city} {location.country}</div>
      </div>
    </div>
 )
};

export default PhotoListItem;
