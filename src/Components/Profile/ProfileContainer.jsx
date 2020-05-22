import React from 'react';
import Profile from './Profile';
import { getUserProfileThunk } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    // Here we place all the side effects
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 8157;
    }
    this.props.getUserProfileThunk(userId);
  }
  render() {

    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

export default compose(
  connect(mapStateToProps, { getUserProfileThunk }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);