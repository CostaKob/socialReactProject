import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import {setUserProfileActionCreator} from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {
  componentDidMount () {
    // Here we place all the side effects
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 8157;
    }
    profileAPI.getProfile(userId)
    .then(data => {
        this.props.setUserProfileActionCreator(data);
    });
  }
  render() {
    return (
      <div>
        <Profile { ...this.props } profile={this.props.profile} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {setUserProfileActionCreator}) (WithUrlDataContainerComponent);