import React from "react";
import { addCommentActionCreator } from "../../redux/videos-reducer";
import { updateNewCommentActionCreator } from "../../redux/videos-reducer";
import StoreContext from "../../storeContext";
import Videos from "./Videos";

const VideosContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().videosPage;

        let onSendCommentClick = () => {
          store.dispatch(addCommentActionCreator());
        };

        let onNewCommentChange = (text) => {
          store.dispatch(updateNewCommentActionCreator(text));
        };

        return (
          <Videos
            addComment={onSendCommentClick}
            updateNewComment={onNewCommentChange}
            comments={state.comments}
            newCommentText={state.newCommentText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default VideosContainer;
