import React from "react";
import Comment from "./Comment";
import v from "./Videos.module.css";

class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.onSendCommentClick = () => {
      this.props.addComment();
    };

    this.onNewCommentChange = (e) => {
      let text = e.target.value;
      this.props.updateNewComment(text);
    };
  }

  render() {
    let videosElement = this.props.comments.map((c) => {
      return <Comment comment={c.comment} key={c.id} />;
    });
    return (
      <div className="videoContent">
        <iframe
          src="https://www.youtube.com/embed/E7wJTI-1dvQ"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
        <div className={v.videosElement}>{videosElement}</div>
        <div>
          <textarea
            value={this.props.newCommentText}
            onChange={this.onNewCommentChange}
          />
        </div>
        <div>
          <button onClick={this.onSendCommentClick}>Send</button>
        </div>
      </div>
    );
  }
}

export default Videos;
