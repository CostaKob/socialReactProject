import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

  return (
    <div className={classes.item}>
      <img src="https://arrowheadguys.com/wp-content/uploads/2018/11/avatar.jpg" />
      <div>{props.message}</div>
      <div>likes: {props.likes}</div>
      <div>
        <span>Like</span>
      </div>
    </div>
  );
}

export default Post;