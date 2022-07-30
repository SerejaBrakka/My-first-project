import { profileAPI } from "../api/api";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hi,how are you?", likesCount: 10 },
    { id: 2, message: "HELLLOY", likesCount: 5 },
    { id: 3, message: "WHATAAAAAP", likesCount: 0 },
    { id: 4, message: "WOW", likesCount: 8 },
    { id: 5, message: "are you here?", likesCount: 1 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 6,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, newPost],
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};
export const addPost = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewPostText = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};
export const getUserProfile = (userId) => {
  return (dispatch) => {
    return profileAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};
export const getStatus = (userId) => {
  return (dispatch) => {
    return profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};
export const updateStatus = (status) => {
  return (dispatch) => {
    return profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      } else alert("Something Wrong");
    });
  };
};
export default profileReducer;
