import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "./../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img
          src="https://img.championat.com/c/1200x900/news/big/r/k/vybiraem-idealnyj-gorod-dlya-gta-6_16245545132074035903.jpg"
          className={classes.banner}
        ></img>
      </div>
      <div className={classes.descriptionBlock}>
        <img className={classes.ava} src={props.profile.photos.large} />
        <div>
          <div>{props.profile.fullName}</div>
          <div> {props.profile.aboutMe}</div>
          <div className={classes.socialStyle}>
            <div>My Social</div>
            <div>Github : {props.profile.contacts.github}</div>
            <div>Github : {props.profile.contacts.vk}</div>
            <div>Github : {props.profile.contacts.instagram}</div>
          </div>
          <div>
            Find Job: <span>{props.profile.lookingForAJob ? "YES" : "NO"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
