import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux/state';

let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <App state={state}
            dispatch={store.dispatch.bind(store)}
            friends={store.getState().sideBar.friends}
        />, document.getElementById('root'));
};


rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

