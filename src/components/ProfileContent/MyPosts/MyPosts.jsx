import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

class MyPosts extends React.Component {
  constructor(props) {
    super(props);
    this.onAddPost = () => {
      this.props.addPost();
    };

    this.onPostChange = (e) => {
      let text = e.target.value;
      this.props.updateNewPostText(text);
    };
  }
  render() {
    let postsElements = this.props.posts.map((p) => {
      return <Post message={p.message} key={p.id} like={p.likesCount} />;
    });
    return (
      <div className={classes.postsBlock}>
        <h3>My posts</h3>
        <div>
          <textarea
            onChange={this.onPostChange}
            value={this.props.newPostText}
          />
        </div>
        <div>
          <button onClick={this.onAddPost}>Add post</button>
        </div>
        <hr />
        <div className={classes.posts}>{postsElements}</div>
      </div>
    );
  }
}

export default MyPosts;
