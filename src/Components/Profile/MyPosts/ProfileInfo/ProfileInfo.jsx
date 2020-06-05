import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../../Common/Preloader/Preloader';
import ProfileStatus from '../../ProfileStatus';
import ProfileStatusWithHooks from '../../ProfileStatusWithHooks';

const ProfileInfo = ({ profile, updateStatusThunk, status }) => {
  if (!profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={classes.row}>
        <div className={classes.column}>
          <img src={profile.photos.large} />
          <h2>{profile.fullName}</h2>
          <p>{profile.aboutMe}</p>
          <div><ProfileStatusWithHooks status={status} updateStatusThunk={updateStatusThunk} /></div>
        </div>
        <div className={classes.column}>
          <h2>My Contacts:</h2>
          <ul>
            <li><a href={profile.contacts.website}>Website</a></li>
            <li><a href={profile.contacts.facebook}>Facebook</a></li>
            <li><a href={profile.contacts.twitter}>Twitter</a></li>
            <li><a href={profile.contacts.instagram}>Instagram</a></li>
          </ul>
          <div className={classes.lookinForAJob}>Looking for a job? {profile.lookingForAJobDescription}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;