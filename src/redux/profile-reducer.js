import { usersAPI, profileApi } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: '15' },
        { id: 2, message: "It is my first post", likesCount: '20' },
        { id: 3, message: "Hi?", likesCount: '0' },
        { id: 4, message: "yo yo yo", likesCount: '12' }
    ],
    newPostText: '',
    profile: null,
    status:""

};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let text = state.newPostText;
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, { id: 5, message: state.newPostText, likesCount: 0 }]
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export const setUserProfileActionCreator = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});

export const setStatusActionCreator = (status) => ({
    type: SET_STATUS,
    status
});

// Thunks

export const getUserProfileThunk = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfileActionCreator(response.data));
    });
};

export const getStatusThunk = (userId) => (dispatch) => {
    profileApi.getStatus(userId).then(response => {
        dispatch(setStatusActionCreator(response.data));
    });
};

export const updateStatusThunk = (status) => (dispatch) => {
    profileApi.updateStatus(status).then(response => {
        if (response.data.resultCode === 0){
            dispatch(setStatusActionCreator(status));
        }
    });
};

export default profileReducer;