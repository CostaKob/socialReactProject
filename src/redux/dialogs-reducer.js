const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE: {

            let newMessage = {
                id: 7,
                message: state.newMessageText
            };

            let stateCopy = { ...state };
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = { ...state };
            stateCopy.newMessageText = action.message;
            return stateCopy;
        }

        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
});

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    message: text
});

export default dialogsReducer;