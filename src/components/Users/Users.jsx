import React from "react";
import styles from "./Users.module.css";
import userPhoto from "./../../assets/images/user.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= 50; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              onClick={(e) => {
                props.onPageChanged(p);
              }}
              className={props.currentPage === p ? styles.selectedPage : p}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => {
        return (
          <div key={u.id}>
            <div>
              <NavLink to={`${/profile/}${u.id}`}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt="avatar"
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>{u.name}</div>
            {/* <div>{`${u.location.city}, ${u.location.country}`}</div> */}
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  follow
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
