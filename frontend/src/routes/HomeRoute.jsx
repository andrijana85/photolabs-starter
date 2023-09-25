import React from "react";
import { useState } from "react";
import "../styles/HomeRoute.scss";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

import PhotoDetailsModal from "./PhotoDetailsModal";

const HomeRoute = (props) => {
  const {
    isFavPhotoExists,
    isFavorite,
    toggleFavorite,
    openModal,
    closeModal,
    favorites,
    showNotification,
    isModalOpen,
    selectedPhoto,
    photos,
    topics,
  } = props;

  return (
    <div className="home-route">
      <TopNavigationBar
        isFavPhotoExists={isFavPhotoExists}
        showNotification={showNotification}
        topics={topics}
      />
      <PhotoList
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
        photos={photos}
        openModal={openModal}
        // similarPhotos={similarPhotos}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          favorites={favorites}
          closeModal={closeModal}
          selectedPhoto={selectedPhoto}
          openModal={openModal}
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
          photos={photos}
        />
      )}
    </div>
  );
};

export default HomeRoute;
