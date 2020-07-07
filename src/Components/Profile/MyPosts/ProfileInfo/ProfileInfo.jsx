import React, { useState } from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from '../../ProfileStatusWithHooks';
import userPhoto from '../../../../assets/images/user.png';
import { ProfileDataFormReduxForm } from './ProfileDataForm';

const ProfileInfo = ({ profile, updateStatusThunk, status, isOwner, savePhoto, saveProfile }) => {

  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelect = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  // not so good solution
  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div className={classes.profileInfoContainer}>
      <div className={classes.profileHeader}>
        <div className={classes.image}>
          <img src={profile.photos.large || userPhoto} />

        </div>
        {
          isOwner &&
            <div className={classes.editPhoto}>
              <input type={"file"} onChange={onMainPhotoSelect} />
            </div>
        }
      </div>
      {
        editMode
          ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
          : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />
      }
      <div className={classes.profileStatus}>
        <ProfileStatusWithHooks status={status} updateStatusThunk={updateStatusThunk} />
      </div>
      <hr />
    </div>
  );
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div className={classes.profileDataContainer}>
      {
        isOwner && <div><button onClick={goToEditMode}>Edit</button></div>
      }
      <div className={classes.profileData}>
        <div className={classes.nameAndAbout}>
          <h2>{profile.fullName}</h2>
          <p>{profile.aboutMe}</p>
        </div>
        <div className={classes.contacts}>
          <h2>My Contacts:</h2>
          {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
          })}
        </div>
      </div>
      <div className={classes.lookinForAJob}>
        <b>Looking for a job</b>:{profile.lookingForAJob ? "Yes!" : "No"}
      </div>
      {profile.lookingForAJob &&
        <div className={classes.lookinForAJob}>
          <b>My skills</b>:{profile.lookingForAJobDescription}
        </div>
      }
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={classes.contact}><a href={contactValue}><b>{contactTitle}</b></a></div>
  )
}

export default ProfileInfo;