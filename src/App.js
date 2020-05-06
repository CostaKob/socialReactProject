import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar friends={props.state.sideBar.friends} />

        <div className='app-wrapper-content'>

          <Route path='/profile'
            render={() => <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />} />

          <Route path='/dialogs'
            render={() => <Dialogs
              state={props.state.dialogsPage}
              dispatch={props.dispatch} />} />

          <Route path='/news'
            render={() => <News />} />

          <Route path='/music'
            render={() => <Music />} />

          <Route path='/settings'
            render={() => <Settings />} />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
