import React, { useState } from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = ({isAuth, login, logout}) => {

  return (
    <header className={classes.header}>
      <img src="http://www.wpkixx.com/html/winku-dark/images/logo2.png" />
      <div className={classes.loginBlock}>
        {isAuth
          ? <div>Hello, {login} <button onClick={logout}>Logout</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );

}

export default Header;