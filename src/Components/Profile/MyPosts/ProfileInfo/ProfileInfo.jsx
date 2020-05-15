import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../../Common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={classes.row}>
        <div className={classes.column}>
          <img src={props.profile.photos.large} />
          <h2>{props.profile.fullName}</h2>
          <p>{props.profile.aboutMe}</p>
        </div>

        <div className={classes.column}>
          <h2>My Contacts:</h2>
          <ul>
            <li><a href={props.profile.contacts.website}>Website</a></li>
            <li><a href={props.profile.contacts.facebook}>Facebook</a></li>
            <li><a href={props.profile.contacts.twitter}>Twitter</a></li>
            <li><a href={props.profile.contacts.instagram}>Instagram</a></li>
          </ul>
  <div className={classes.lookinForAJob}>Looking for a job? {props.profile.lookingForAJobDescription}</div>
        </div>

      </div>

    </div>
  );
}

export default ProfileInfo;

{/* <div class={classes.descriptionBlock}>
  <img src={props.profile.photos.large} />
  <h1>Profile Name</h1>
  <p>{props.profile.aboutMe}</p>
  <p>Harvard University</p>
  <div>
    <a href="#"><i class="fa fa-dribbble"></i></a> 
    <a href="#"><i class="fa fa-twitter"></i></a>  
    <a href="#"><i class="fa fa-linkedin"></i></a>  
    <a href="#"><i class="fa fa-facebook"></i></a> 
  </div>
  <p><button>Contact</button></p>
</div> */}