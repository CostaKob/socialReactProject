import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../Common/FormsControls/FormsControls';

const MyPosts = React.memo(props => {
  
  let postsElements =
    props.posts.map(p => <Post message={p.message} likes={p.likesCount} key={p.id} />);

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
});

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name="newPostBody"
         placeholder='What on your mind?' validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Add new post</button>
      </div>
    </form>
  )
}

const AddPostFormRedux = reduxForm({form: "postAddPostForm"})(AddPostForm)

export default MyPosts;