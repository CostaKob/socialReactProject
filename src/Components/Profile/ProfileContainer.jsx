import React from 'react';
import Profile from './Profile';
import { getUserProfileThunk, updateStatusThunk, getStatusThunk } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    // Here we place all the side effects
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfileThunk(userId);
    this.props.getStatusThunk(userId);
  }
  render() {

    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatusThunk={this.props.updateStatusThunk} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status:state.profilePage.status
});

export default compose(
  connect(mapStateToProps, { getUserProfileThunk, getStatusThunk, updateStatusThunk }),
  withRouter
)(ProfileContainer);