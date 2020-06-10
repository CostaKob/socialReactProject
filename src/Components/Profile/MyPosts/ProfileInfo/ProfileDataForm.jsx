import React from 'react';
import { createField, Input, Textarea } from '../../../Common/FormsControls/FormsControls';
import classes from './ProfileInfo.module.css';
import { reduxForm } from 'redux-form';

const ProfileDataForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div><button>Save</button></div>
      <div> { createField("Full name", "fullName", [], Input) }</div>
      <div><b>About me:</b>{ createField("About Me", "aboutMe", [], Textarea) }</div>
      {/* <div>My Contacts:
        {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
      </div> */}
      <div className={classes.lookinForAJob}>
        <b>Looking for a job</b>: { createField("", "lookingForAJob", [], Input, {type: "checkbox"}) }
      </div>
        <div className={classes.lookinForAJob}>
          <b>My skills</b>:{ createField("My professional skills", "lookingForAJobDescription", [], Textarea) }
        </div>
    </form>
  )
}

export const ProfileDataFormReduxForm = reduxForm({form:'edit-profile'})(ProfileDataForm)