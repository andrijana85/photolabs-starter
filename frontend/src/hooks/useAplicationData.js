import { useState } from "react";

const useAplicationData = () => {
   // create a state variable to control the modal
   const [favorites, setFavorites] = useState([]);
   //initialize showNotification to false
   const [showNotification, setShowNotification] = useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedPhoto, setSelectedPhoto] = useState();
 
   // const similarPhotos = photos.map((photo) => photo.similar_photos );
 
   const openModal = (photo) => {
     setIsModalOpen(true);
     setSelectedPhoto(photo);
     console.log(photo);
   };
   const closeModal = () => {
     setIsModalOpen(false);
   };
   const toggleFavorite = (id) => {
     if (favorites.includes(id)) {
       setFavorites(favorites.filter((photoId) => photoId !== id));
       console.log(favorites);
     } else {
       setFavorites([...favorites, id]);
       //set showNotification to true when a photo is added to favorites
       setShowNotification(true);
     }
   };
   // check if photo is in favorites
   const isFavorite = (id) => favorites.includes(id);
   // check if there are photos in favorites
   const isFavPhotoExists = favorites.length > 0;

   return {
     favorites,
     isFavorite,
     toggleFavorite,
     isFavPhotoExists,
     openModal,
     closeModal,
     isModalOpen,
     selectedPhoto,
     showNotification,
     setShowNotification,
   };
  };

  export default useAplicationData;

