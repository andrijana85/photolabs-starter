import { useState } from "react";
import { useReducer, useEffect } from "react";

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
  photoData: [],
  topicData: [],
  selectedTopic: null,
};

const ACTIONS = {
  OPEN_MODAL: "open-modal",
  CLOSE_MODAL: "close-modal",
  SELECT_PHOTO: "select-photo",
  TOGGLE_FAVORITE: "toggle-favorite",
  SHOW_NOTIFICATION: "show-notification",
  SET_PHOTO_DATA: "set-photo-data",
  SET_TOPIC_DATA: "set-topic-data",
  GET_PHOTOS_BY_TOPICS: "get-photos-by-topics",
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

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, selectedTopic: action.payload };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};
const useAplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { favorites, isModalOpen, selectedPhoto, showNotification} = state;

  const openModal = (photo) => {
    dispatch({ type: ACTIONS.OPEN_MODAL });
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };
  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };
  const toggleFavorite = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: id });
    dispatch({ type: ACTIONS.SHOW_NOTIFICATION, payload: true });
  };
  const isFavorite = (id) => favorites.includes(id);
  const isFavPhotoExists = favorites.length > 0;
  const setShowNotification = (value) => {
    dispatch({ type: ACTIONS.SHOW_NOTIFICATION, payload: value });
  };

  //Fetch photos from the API
  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      });
  }, []);

  //Fetch topics from the API
  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      });
  }, []);

  useEffect(() => {
    if (state.selectedTopic) {
      console.log("Selected Topic:", state.selectedTopic);
      fetch(`http://localhost:8001/api/topics/photos/${state.selectedTopic}`)
        .then((response) => response.json())
        .then((photoByTopic) => {
          console.log(photoByTopic);
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoByTopic });
        });
    }
  }, [state.selectedTopic]);

  const getPhotosByTopics = (topic) => {
    dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: topic });
  };

  return {
    state,
    isFavorite,
    toggleFavorite,
    isFavPhotoExists,
    openModal,
    closeModal,
    setShowNotification,
    getPhotosByTopics
  };
};
export default useAplicationData;
