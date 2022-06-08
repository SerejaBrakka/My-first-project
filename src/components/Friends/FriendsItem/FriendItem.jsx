import React from "react";

import classes from "./../Friends.module.css";

const FriendItem = (props) => {
  return (
    <div className={classes.friend}>
      <img src={props.src} />
    <p>{props.name}</p>
    </div>
  );
};
export default FriendItem;
