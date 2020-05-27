import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

const MyPosts = (props) => {
  // debugger;
  let postsElements =
    props.posts.map(p => <Post message={p.message} likes={p.likesCount} key={p.id} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  const onSubmit = (values) => {
    props.addPost(values.newPostBody);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <AddPostFormRedux onSubmit={onSubmit} />
      <div className={classes.posts}>

        {postsElements}

      </div>
    </div>
  );
}

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newPostBody" placeholder='What on your mind?' />
      </div>
      <div>
        <button>Add new post</button>
      </div>
    </form>
  )
}

const AddPostFormRedux = reduxForm({form: "postAddPostForm"})(AddPostForm)

export default MyPosts;