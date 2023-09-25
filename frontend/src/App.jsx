import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useState } from "react";
import useAplicationData from "hooks/useAplicationData";
// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    isFavPhotoExists,
    isFavorite,
    toggleFavorite,
    openModal,
    closeModal,
  } = useAplicationData();

  return (
    <div className="App">
      <HomeRoute
        isFavPhotoExists={isFavPhotoExists}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
        openModal={openModal}
        closeModal={closeModal}
        favorites={state.favorites}
        showNotification={state.showNotification}
        isModalOpen={state.isModalOpen}
        selectedPhoto={state.selectedPhoto}
        photos={state.photoData}
        topics={state.topicData}
      />
    </div>
  );
};

export default App;
