import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoListItem from "components/PhotoListItem";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({
  closeModal,
  selectedPhoto,
  toggleFavorite,
  isFavorite,
  openModal,
  favorites,
  photos,
  photoId,
}) => {
  const { urls, location, user, similar_photos} = selectedPhoto;
  const similarPhotos = Object.values(similar_photos);
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={closeModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* <div className="photo-details-modal__images">
      <PhotoListItem
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
        data={selectedPhoto}
        photoId={selectedPhoto.id}
        openModal={() => openModal(selectedPhoto)}
        similarPhotos={selectedPhoto.similar_photos}
      />
      </div> */}
      <div className="photo-details-modal__images">
      <PhotoFavButton
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
        photoId={photoId}
      />
      <img
        src={urls.regular}
        alt={`photo taken in ${location.city}, ${location.country}`}
        className="photo-details-modal__image"
        onClick={openModal}
      />

<div className="photo-details-modal__header photo-details-modal__photographer-details">
        <img
          src={user.profile}
          alt={`profile of ${user.name}`}
          className="photo-list__user-profile"
        />
          <div className="photo-details-modal__photographer-details">
          {user.name}
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
    <div className="photo-details-modal__images">
        <h3>Similar Photos</h3>
        
      <PhotoList
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
        photos={similarPhotos}
        openModal={openModal}
        className="photo-details-modal__images"
      />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
