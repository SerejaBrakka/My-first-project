import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import FriendItem from "../Friends/FriendsItem/FriendItem";
import p from "./../Friends/Friends.module.css";
import StoreContext from "../../storeContext";

const Navbar = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().sidebar;
        let friendsElement = state.friends.map((d) => (
          <FriendItem name={d.name} id={d.id} src={d.src} />
        ));
        return (
          <nav className={classes.nav}>
            <div className={classes.item}>
              <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={classes.item}>
              <NavLink to="/dialogs">Dialogs</NavLink>
            </div>
            <div className={classes.item}>
              <NavLink to="/news">News</NavLink>
            </div>
            <div className={classes.item}>
              <NavLink to="/music">Music</NavLink>
            </div>
            <div className={classes.item}>
              <NavLink to="/groups">Groups</NavLink>
            </div>
            <div className={classes.item}>
              <NavLink to="/videos">Videos</NavLink>
            </div>
            <div className={classes.item}>
              <NavLink to="/settings">Settings</NavLink>
            </div>
            <div className={classes.item}>
              <NavLink to="/friends">Friends</NavLink>
            </div>
            <div>
              <div className={p.friendElement}>{friendsElement}</div>
            </div>
          </nav>
        );
      }}
    </StoreContext.Consumer>
  );
};

export default Navbar;
