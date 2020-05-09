import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
// debugger;
  return (
    <div className={classes.content}>

      <ProfileInfo />

      <MyPostsContainer store={props.store} />
        
    </div>
  );
}

export default Profile;