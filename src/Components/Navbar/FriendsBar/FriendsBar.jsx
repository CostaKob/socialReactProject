
import React from 'react';
import classes from './../Navbar.module.css';

const FriendsBar = (props) => {
// debugger;
  return (
      <div className={classes.friendsBar}>
              <div>
                <img src={props.img} />
                <div>{props.name}</div>
                </div>
      </div>
          
  );
}

export default FriendsBar;