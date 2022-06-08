const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
  
let initialState = {
  posts: [
    { id: 1, message: "Hi,how are you?", likesCount: 10 },
    { id: 2, message: "HELLLOY", likesCount: 5 },
    { id: 3, message: "WHATAAAAAP", likesCount: 0 },
    { id: 4, message: "WOW", likesCount: 8 },
    { id: 5, message: "are you here?", likesCount: 1 },
  ]
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.newPostText = "";
      state.posts.push(newPost);
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
export default profileReducer;