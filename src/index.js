import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// All Data comes from here

let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: '15' },
    { id: 2, message: "It is my first post", likesCount: '20' },
    { id: 3, message: "Hi?", likesCount: '0' },
    { id: 4, message: "yo yo yo", likesCount: '12' }
];

let dialogs = [
    { id: 1, name: 'Costa' },
    { id: 2, name: 'Darya' },
    { id: 3, name: 'Yuli' },
    { id: 4, name: 'Diana' },
    { id: 5, name: 'Vasya' },
    { id: 6, name: 'Petya' }
];

let messages = [
    { id: 1, message: "Hi, how are you ?" },
    { id: 2, message: "What's up ?" },
    { id: 3, message: "Hello world !" },
    { id: 4, message: "My name is Costa" },
    { id: 5, message: "Whaaaat!??" },
    { id: 6, message: "Yo yo yo!!" }
];

ReactDOM.render(<App myPosts={posts} dialogs={dialogs} messages={messages} />,document.getElementById('root'));
