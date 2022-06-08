import React from "react";
import classes from "./ProfileInfo.module.css";


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://img.championat.com/c/1200x900/news/big/r/k/vybiraem-idealnyj-gorod-dlya-gta-6_16245545132074035903.jpg"
          className={classes.banner}
        ></img>
      </div>
      <div className={classes.descriptionBlock}>
        <img
          src="https://www.w3schools.com/howto/img_avatar2.png"
          className={classes.ava}
        ></img>
        + description
      </div>
    </div>
  );
};

export default ProfileInfo;
