import React from "react";
import { addPost } from "../../../redux/profile-reducer";
import { updateNewPostText } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     updateNewPostText: (text) => {
//       dispatch(updateNewPostTextActionCreator(text));
//     },
//     addPost: () => {
//       dispatch(addPostActionCreator());
//     },
//   };
// };

const MyPostsContainer = connect(mapStateToProps, {
  updateNewPostText,
  addPost,
})(MyPosts);

export default MyPostsContainer;
