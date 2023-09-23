import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoListItem from "components/PhotoListItem";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({
  closeModal,
  selectedPhoto,
  toggleFavorite,
  isFavorite,
  openModal,
  favorites,
  photos,
}) => {
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={closeModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__image">
      <PhotoListItem
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
        data={selectedPhoto}
        photoId={selectedPhoto.id}
        openModal={() => openModal(selectedPhoto)}
        similarPhotos={selectedPhoto.similar_photos}
      />
      </div>
      <div className="photo-details-modal__images">
        <h3>Similar Photos</h3>
        
      <PhotoList
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
        photos={photos}
        openModal={openModal}
        className="photo-details-modal__images"
      />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
