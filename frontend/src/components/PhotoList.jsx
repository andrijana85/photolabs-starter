import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "mocks/photos";



const PhotoList = () => {

  const photoList = photos.map((photo) => (
    <PhotoListItem
   key = {photo.id}{...photo}
    />))
    
  return (
    <ul className="photo-list">
       {photoList}
    </ul>
  );
};

export default PhotoList;
