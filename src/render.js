import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { addPost } from './redux/state';

// addPost('Samurai');

export let rerenderEntireTree = (state) => {
    
    ReactDOM.render(
        <App state={state}
             addPost={addPost} />,document.getElementById('root'));
};



