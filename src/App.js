import React, { Suspense } from 'react';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { Route, withRouter, HashRouter, Switch, Redirect } from 'react-router-dom';
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
import Footer from './Components/Footer/Footer';
// import DialogsContainer from './Components/Dialogs/DialogsContainer';
// import ProfileContainer from './Components/Profile/ProfileContainer';
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));


class App extends React.Component {
  //global error handle
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert("Some error occured");
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors );
  }
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors );
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
          <Switch>
            <Route exact path='/' render={ () => <Redirect to={'/profile'} /> } />

            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />

            <Route path='/dialogs' render={withSuspense(DialogsContainer)} />

            <Route path='/users' render={() => <UsersContainer />} />

            <Route path='/news' render={() => <News />} />

            <Route path='/music' render={() => <Music />} />

            <Route path='/settings' render={() => <Settings />} />

            <Route path='/login' render={() => <Login />} />

            <Route path='*' render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
        <Footer/>
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
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  )
}

export default SamuraiJSApp;
