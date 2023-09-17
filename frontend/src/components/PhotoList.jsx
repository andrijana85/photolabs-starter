import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";



const PhotoList = ({isFavorite, toggleFavorite, photos}) => {

  const photoList = photos.map((photo) => (
    <PhotoListItem
      key = {photo.id}{...photo}
      toggleFavorite={toggleFavorite}
      isFavorite={isFavorite}
      data={photo}
      photoId={photo.id}
    />))
    
  return (
    <ul className="photo-list">
       {photoList}
    </ul>
  );
};

export default PhotoList;
