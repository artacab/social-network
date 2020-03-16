import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: 'hello my dear', likesCount: 11},
        {id: 2, message: 'its veru beautiful', likesCount: 15}

    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newText,
                likesCount: 0
            };
            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

            return stateCopy;
        }

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state;
    }
}
export const addPostActionCreator = (newText) => ({type: ADD_POST, newText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));

}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }

}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if(response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile);
    if(response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    }
}
export default profileReducer;