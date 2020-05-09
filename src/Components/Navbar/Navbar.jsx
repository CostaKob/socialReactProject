
import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FriendsBar from './FriendsBar/FriendsBar';

const Navbar = (props) => {

let friendsElements =
    props.friends.map( f => <FriendsBar name={f.name} id={f.id} img={f.img} /> );

  return (
      <nav className={classes.nav}>
        <div className={classes.item}>
          <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
        </div>
        <div className={classes.friendsBarHeader}>
          <h3>My Friends</h3>
        </div>
          <div className={classes.friendsBarContent}>
            {friendsElements}
          </div>
      </nav>
  );
}

export default Navbar;