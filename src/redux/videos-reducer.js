const UPDATE_NEW_COMMENT = "UPDATE-NEW-COMMENT";
const ADD_COMMENT = "ADD-COMMENT";

let initialState = {
  comments: [
    {
      id: 1,
      comment: "WOW,great",
    },
    { id: 2, comment: "YOHOOOY" },
    { id: 3, comment: "fooo" },
  ],
};

const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_COMMENT:
      state.newCommentText = action.newCommentText;
      return state;
    case ADD_COMMENT:
      let comment = {
        id: 3,
        comment: state.newCommentText,
      };
      state.comments.push(comment);
      state.newCommentText = "";
      return state;
    default:
      return state;
  }
};
export const addCommentActionCreator = () => {
  return {
    type: ADD_COMMENT,
  };
};
export const updateNewCommentActionCreator = (text) => {
  return {
    type: UPDATE_NEW_COMMENT,
    newCommentText: text,
  };
};
export default videosReducer;
