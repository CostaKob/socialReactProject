import React from 'react';
import Profile from './Profile';
import { getUserProfileThunk, updateStatusThunk, getStatusThunk, savePhoto, saveProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.loggedinUserId;
      if(!userId){
        this.props.history.push('/login'); // not so good solution, better to do redirect in the jsx
      }
    }

    this.props.getUserProfileThunk(userId);
    this.props.getStatusThunk(userId);
  }

  componentDidMount() {
    // Here we place all the side effects
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId != prevProps.match.params.userId){
      this.refreshProfile();
    }
  }

  render() {
    return (
      <div>
        <Profile {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatusThunk={this.props.updateStatusThunk}
          isOwner={ !this.props.match.params.userId }
          savePhoto={this.props.savePhoto} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  loggedinUserId: state.auth.id,
  isAuth: state.auth.isAuth
});

export default compose(
  connect(mapStateToProps, { getUserProfileThunk, getStatusThunk, updateStatusThunk, savePhoto, saveProfile }),
  withRouter
)(ProfileContainer);