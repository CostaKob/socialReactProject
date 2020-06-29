import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import classes from './Header.module.css';

class HeaderContainer extends React.Component {

  render() {
    return <div className={classes.header}>
      <Header {...this.props} />
    </div>
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, { logout })(HeaderContainer);