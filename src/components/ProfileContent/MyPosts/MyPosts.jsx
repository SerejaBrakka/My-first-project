import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => {
    return <Post message={p.message} like={p.likesCount} />;
  });

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea onChange={onPostChange} value={props.newPostText} />
      </div>
      <div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <hr />
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
