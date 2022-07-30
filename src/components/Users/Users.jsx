import { NavLink } from "react-router-dom";
import userPhoto from "./../../assets/images/user.png";
import styles from "./Users.module.css";

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
              key={p.toString()}
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
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
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
