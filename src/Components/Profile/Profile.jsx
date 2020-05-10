import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = () => {
// debugger;
  return (
    <div className={classes.content}>

      <ProfileInfo />

      <MyPostsContainer />
        
    </div>
  );
}

export default Profile;