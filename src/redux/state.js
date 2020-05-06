const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likesCount: '15' },
                { id: 2, message: "It is my first post", likesCount: '20' },
                { id: 3, message: "Hi?", likesCount: '0' },
                { id: 4, message: "yo yo yo", likesCount: '12' }
            ],
            newPostText: 'Costa from state'

        },
        dialogsPage: {
            messages: [
                { id: 1, message: "Hi, how are you ?" },
                { id: 2, message: "What's up ?" },
                { id: 3, message: "Hello world !" },
                { id: 4, message: "My name is Costa" },
                { id: 5, message: "Whaaaat!??" },
                { id: 6, message: "Yo yo yo!!" }
            ],
            dialogs: [
                { id: 1, name: 'Costa' },
                { id: 2, name: 'Darya' },
                { id: 3, name: 'Yuli' },
                { id: 4, name: 'Diana' },
                { id: 5, name: 'Vasya' },
                { id: 6, name: 'Petya' }
            ],
            newMessageText: "Message from the state"
        },
        sideBar: {
            friends: [
                { id: 100, name: 'Darya', img: 'https://www.kindpng.com/picc/b/163/1636340.png' },
                { id: 200, name: 'Diana', img: 'https://www.kindpng.com/picc/b/163/1636340.png' },
                { id: 300, name: 'Yuli', img: 'https://www.kindpng.com/picc/b/163/1636340.png' }
            ]
        }

    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // observer pattern 
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {

            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === 'ADD-MESSAGE') {

            let newMessage = {
                id: 7,
                message: this._state.dialogsPage.newMessageText
            };

            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.message;
            this._callSubscriber(this._state);

        }
    }
};

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
});

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    message: text
});

window.store = store;
export default store;