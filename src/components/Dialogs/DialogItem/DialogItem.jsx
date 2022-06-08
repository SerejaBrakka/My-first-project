import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = `${/dialogs/}${props.id}`;
  return (
    <div className={classes.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
      <div className={classes.img}> <img src={props.src} /></div>
    </div>
  );
};
export default DialogItem;
