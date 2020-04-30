import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        New post
      </div>
      <div className={classes.posts}>
        <Post message='Hi, how are you?' likes='15' />
        <Post message='It is my first post'  likes='20' />

      </div>
    </div>
  );
}

export default MyPosts;