import { addCommentActionCreator } from "../../redux/videos-reducer";
import { updateNewCommentActionCreator } from "../../redux/videos-reducer";
import Videos from "./Videos";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    comments: state.videosPage.comments,
    newCommentText: state.videosPage.newCommentText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addComment: () => {
      dispatch(addCommentActionCreator());
    },
    updateNewComment: (text) => {
      dispatch(updateNewCommentActionCreator(text));
    },
  };
};
const VideosContainer = connect(mapStateToProps, mapDispatchToProps)(Videos);
export default VideosContainer;
