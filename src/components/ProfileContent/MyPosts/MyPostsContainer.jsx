import React from "react";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import { updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import StoreContext from "../../../storeContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().profilePage;
        let onAddPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };
        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={onAddPost}
            posts={state.posts}
            newPostText={state.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
