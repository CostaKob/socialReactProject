import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';




const MyPosts = (props) => {

  let postsElements =
    props.posts.map(p => <Post message={p.message} likes={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}>
          </textarea>
        </div>
        <div>
          <button onClick={addPost}>Add new post</button>
        </div>
      </div>
      <div className={classes.posts}>

        {postsElements}

      </div>
    </div>
  );
}

export default MyPosts;