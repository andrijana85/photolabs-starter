import { useState } from "react";
import { useReducer } from "react";

// const useAplicationData = () => {
//    // create a state variable to control the modal
//    const [favorites, setFavorites] = useState([]);
//    //initialize showNotification to false
//    const [showNotification, setShowNotification] = useState(false);
//    const [isModalOpen, setIsModalOpen] = useState(false);
//    const [selectedPhoto, setSelectedPhoto] = useState();
 
//    // const similarPhotos = photos.map((photo) => photo.similar_photos );
 
//    const openModal = (photo) => {
//      setIsModalOpen(true);
//      setSelectedPhoto(photo);
//      console.log(photo);
//    };
//    const closeModal = () => {
//      setIsModalOpen(false);
//    };
//    const toggleFavorite = (id) => {
//      if (favorites.includes(id)) {
//        setFavorites(favorites.filter((photoId) => photoId !== id));
//        console.log(favorites);
//      } else {
//        setFavorites([...favorites, id]);
//        //set showNotification to true when a photo is added to favorites
//        setShowNotification(true);
//      }
//    };
//    // check if photo is in favorites
//    const isFavorite = (id) => favorites.includes(id);
//    // check if there are photos in favorites
//    const isFavPhotoExists = favorites.length > 0;


const initialState = {
  favorites: [],
  isModalOpen: false,
  selectedPhoto: {},
  showNotification: false,
};

const ACTIONS = {
  OPEN_MODAL: "open-modal",
  CLOSE_MODAL: "close-modal",
  SELECT_PHOTO: "select-photo",
  TOGGLE_FAVORITE: "toggle-favorite",
  SHOW_NOTIFICATION: "show-notification",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.OPEN_MODAL:
      return { ...state, isModalOpen: true };
    case ACTIONS.CLOSE_MODAL:
      return { ...state, isModalOpen: false };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload };
    case ACTIONS.TOGGLE_FAVORITE:
      if (state.favorites.includes(action.payload)) {
        return {
          ...state,
          favorites: state.favorites.filter(
            (photoId) => photoId !== action.payload
          ),
        };
      } else {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
    case ACTIONS.SHOW_NOTIFICATION:
      return { ...state, showNotification: action.payload };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
 const useAplicationData = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { favorites, isModalOpen, selectedPhoto, showNotification } = state;

    const openModal = (photo) => {
      dispatch({ type: ACTIONS.OPEN_MODAL });
      dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
    }
    const closeModal = () => {
      dispatch({ type: ACTIONS.CLOSE_MODAL });
    }
    const toggleFavorite = (id) => {
      dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: id });
      dispatch({ type: ACTIONS.SHOW_NOTIFICATION, payload: true });
    }
    const isFavorite = (id) => favorites.includes(id);
    const isFavPhotoExists = favorites.length > 0;
    const setShowNotification = (value) => {
      dispatch({ type: ACTIONS.SHOW_NOTIFICATION, payload: value });
    }

   return {
     state,
     isFavorite,
     toggleFavorite,
     isFavPhotoExists,
     openModal,
     closeModal,
     setShowNotification,
   };
  }
  export default useAplicationData;


