import React from "react";
import classes from "./Videos.modules.css";
import Comment from "./Comment";


const Videos = (props) => {
  let videosElement = props.comments.map((c) => {
    return <Comment comment={c.comment} />;
  });

  let onSendCommentClick = () => {
    props.addComment()
  };

  let onNewCommentChange = (e) => {
    let text = e.target.value;
    props.updateNewComment(text);
  };

  return (
    <div className="videoContent">
      <iframe
        src="https://www.youtube.com/embed/E7wJTI-1dvQ"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
      <div>{videosElement}</div>
      <div>
        <textarea
          value={props.newCommentText}
          onChange={onNewCommentChange}
        />
      </div>
      <div>
        <button onClick={onSendCommentClick}>Send</button>
      </div>
    </div>
  );
};

export default Videos;
