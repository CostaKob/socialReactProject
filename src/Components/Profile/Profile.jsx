import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
      </div>
      <div>
        Avatar + description
    </div>
      <MyPosts />
    </div>
  );
}

export default Profile;