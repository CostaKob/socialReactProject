import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = ({isAuth, login, logout}) => {

  return (
    <header className={classes.headerData}>
      <img src="http://gambolthemes.net/workwise-new/images/logo.png" />
      <div className={classes.headerSearch}>
        <input placeholder="Search..."/>
        <a href="#"><i className="fa">&#xf002;</i></a>
      </div>
      
      <div className={classes.loginBlock}>
        {isAuth
          ? <div>Hello, {login} <button onClick={logout}>Logout</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );

}

export default Header;