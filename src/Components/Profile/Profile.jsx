import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div className={classes.image}>
        <img src="https://wallpaperaccess.com/full/124578.jpg" />
      </div>
      <div>
        Avatar + description
    </div>
      <MyPosts />
    </div>
  );
}

export default Profile;