import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import {setUserProfileActionCreator} from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount () {
    // Here we place all the side effects
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 8157;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    .then(response => {
        // this.props.toggleIsFetching(false);
        this.props.setUserProfileActionCreator(response.data);
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