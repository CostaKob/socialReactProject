import React, { Suspense } from 'react';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { Route, withRouter } from 'react-router-dom';
import UsersContainer from './Components/Users/UsersContainer';
import Login from './Components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './Components/Common/Preloader/Preloader';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { withSuspense } from './hoc/withSuspense';
// import DialogsContainer from './Components/Dialogs/DialogsContainer';
// import ProfileContainer from './Components/Profile/ProfileContainer';
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));


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

          <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
          <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
          
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
const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SamuraiJSApp;
