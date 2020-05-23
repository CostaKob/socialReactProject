import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
// debugger;
  return (
    <div className={classes.content}>

      <ProfileInfo profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk} />

      <MyPostsContainer />
        
    </div>
  );
}

export default Profile;