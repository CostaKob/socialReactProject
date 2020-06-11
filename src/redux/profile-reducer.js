import { usersAPI, profileApi } from '../api/api';
import { stopSubmit } from 'redux-form';

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';
const DELETE_POST = 'profile/DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE-PHOTO-SUCCESS';


let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: '15' },
        { id: 2, message: "It is my first post", likesCount: '20' },
        { id: 3, message: "Hi?", likesCount: '0' },
        { id: 4, message: "yo yo yo", likesCount: '12' }
    ],
    profile: null,
    status:""

};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostBody,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
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
            };
        case DELETE_POST:
        return {
            ...state,
            posts: state.posts.filter(p => p.id != action.postId)
        };
        case SAVE_PHOTO_SUCCESS:
        return {
            ...state,
            profile: {...state.profile, photos: action.photos}
        };
        default:
            return state;
    }
};

//action creators
export const addPostActionCreator = (newPostBody) => ({
    type: ADD_POST,
    newPostBody
});

export const setUserProfileActionCreator = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});

export const setStatusActionCreator = (status) => ({
    type: SET_STATUS,
    status
});

export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
});


export const deletePostActionCreator = (postId) => ({
    type: DELETE_POST,
    postId
});

// Thunks

export const getUserProfileThunk = (userId) => async (dispatch) => {

    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfileActionCreator(response.data));
};

export const getStatusThunk = (userId) => async (dispatch) => {

    const response = await profileApi.getStatus(userId)
    dispatch(setStatusActionCreator(response.data));
};

export const updateStatusThunk = (status) => async (dispatch) => {

    const response = await profileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusActionCreator(status));
    }
};

export const savePhoto = (file) => async (dispatch) => {

    const response = await profileApi.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    
    const userId = getState().auth.id;
    const response = await profileApi.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfileThunk(userId));
    }else{
        dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
};
export default profileReducer;