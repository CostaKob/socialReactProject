const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE: 
            let text = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: text}]
            };
        default:
            return state;
    }
};

export const addMessageActionCreator = (newMessageBody) => ({
    type: ADD_MESSAGE,
    newMessageBody
});

export default dialogsReducer;