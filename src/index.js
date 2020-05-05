import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { addPost, updateNewPostText, subscribe } from './redux/state';
import state from './redux/state';

let rerenderEntireTree = () => {
    
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}/>,document.getElementById('root'));
};


rerenderEntireTree (state);
subscribe(rerenderEntireTree);

