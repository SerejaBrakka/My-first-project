import React from "react";

const Post = (props) => {
  return (
    <div>
    
      <div>{props.message}</div>
      <span>
        <p>{props.like} Like</p>
        <button>Like</button>
        <button>Comment</button>
        <button>Repost</button>
      </span>
    </div>
  );
};

export default Post;
