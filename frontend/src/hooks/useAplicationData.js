import { useReducer, useEffect } from "react";

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
  const { favorites, isModalOpen, selectedPhoto, showNotification } = state;

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

  const getPhotosByTopics = (topic) => {
    console.log("Selected Topic:", topic);
    fetch(`http://localhost:8001/api/topics/photos/${topic}`)
      .then((response) => response.json())
      .then((photoByTopic) => {
        console.log(photoByTopic);
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoByTopic });
      });
  };

  return {
    state,
    isFavorite,
    toggleFavorite,
    isFavPhotoExists,
    openModal,
    closeModal,
    setShowNotification,
    getPhotosByTopics,
  };
};
export default useAplicationData;
