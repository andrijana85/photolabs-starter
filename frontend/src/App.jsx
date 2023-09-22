import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useState } from "react";
import useAplicationData from "hooks/useAplicationData";
// Note: Rendering a single component to build components in isolation
const App = () => {
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
  } = useAplicationData();

  return (
    <div className="App">
      <HomeRoute
        isFavPhotoExists={isFavPhotoExists}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
        openModal={openModal}
        closeModal={closeModal}
        favorites={favorites}
        showNotification={showNotification}
        isModalOpen={isModalOpen}
        selectedPhoto={selectedPhoto}
      />
    </div>
  );
};

export default App;
