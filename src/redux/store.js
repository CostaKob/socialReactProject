import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";

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
            newMessageText: ""
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }
};

window.store = store;
export default store;