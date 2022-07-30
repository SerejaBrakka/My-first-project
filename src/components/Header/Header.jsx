import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src="https://st.depositphotos.com/2547675/3009/i/450/depositphotos_30094505-stock-photo-time-clock.jpg"></img>
      <div className={classes.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login}- <button onClick={props.logout}>LogOut</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
