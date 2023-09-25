import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({
  isFavorite,
  toggleFavorite,
  photos,
  openModal,
  similar_photos,
}) => {
  const photoList = photos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      toggleFavorite={toggleFavorite}
      isFavorite={isFavorite}
      data={photo}
      photoId={photo.id}
      openModal={() => openModal(photo)}
      similarPhotos={photo.similar_photos}
    />
  ));

  return <ul className="photo-list">{photoList}</ul>;
};

export default PhotoList;
