import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.image}>
        <img src="https://wallpaperaccess.com/full/124578.jpg" />
      </div>
      <div className={classes.descriptionBlock}>
        Avatar + description
      </div>
    </div>
  );
}

export default ProfileInfo;