import React from 'react';
import { createField, Input, Textarea } from '../../../Common/FormsControls/FormsControls';
import classes from './ProfileInfo.module.css';
import { reduxForm } from 'redux-form';
import errorStyle from '../../../Common/FormsControls/FormsControls.module.css';

const ProfileDataForm = ({ profile, handleSubmit, error }) => {
  return (
    <form className={classes.column} onSubmit={profile, handleSubmit}>
      <div>
        <button>Save</button>
      </div>

      {error && <div className={errorStyle.formSummaryError}>{error}</div>}

      <div><b>My Name:</b> {createField("Full name", "fullName", [], Input)}</div>
      <div><b>About me:</b>{createField("About Me", "aboutMe", [], Textarea)}</div>
      <div>My Contacts:
        {Object.keys(profile.contacts).map(key => {
        return <div key={key}>
          {key}: {createField(key, "contacts." + key, [], Textarea)}
        </div>
      })}
      </div>
      <div className={classes.lookinForAJob}>
        <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div className={classes.lookinForAJob}>
        <b>My skills</b>:{createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
      </div>
    </form>
  )
}

export const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)