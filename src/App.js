import React from 'react';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { Route, withRouter } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import Login from './Components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './Components/Common/Preloader/Preloader';



class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />

        <div className='app-wrapper-content'>

          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />

          <Route path='/dialogs' render={() => <DialogsContainer />} />

          <Route path='/users' render={() => <UsersContainer />} />

          <Route path='/news' render={() => <News />} />

          <Route path='/music' render={() => <Music />} />

          <Route path='/settings' render={() => <Settings />} />

          <Route path='/login' render={() => <Login />} />

        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({

  initialized: state.app.initialized

})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
