import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements =
    props.posts.map( p => <Post message={p.message} likes={p.likesCount} /> );

  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div><textarea></textarea></div>
        <div><button>Add new post</button></div>
      </div>
      <div className={classes.posts}>

        {postsElements}

      </div>
    </div>
  );
}

export default MyPosts;