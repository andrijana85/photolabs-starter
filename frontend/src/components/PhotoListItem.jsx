import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = ({ id, location, urls, user}) => {
 return (
    <div className="photo-list__item">
      <img 
      src={urls.regular} 
      alt={`photo taken in ${location.city}, ${location.country}`} 
      className="photo-list__image" 
      />
   
      <div className="photo-list__user-details">
      <img 
      src={user.profile} 
      alt={`profile of ${user.username}`} 
      className="photo-list__user-profile" 
      />
        <div className="photo-list__user-info">{user.username}
        <div className="photo-list__user-location">{location.city}, {location.country}
        </div>
        </div>
      </div>
    </div>
 )
};

export default PhotoListItem;
