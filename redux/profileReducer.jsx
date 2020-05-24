import userAPI, { profileAPI } from "../API/API";

const ADD_POST = 'addPost';
const UPD_DEFAULT_TEXT_POST = 'updateDefaultTextPost';
const SET_USER_PROFILE = 'get_user_profile';
const TOGGLE_FETCHING = "toggle_fetching";
const SET_STATUS = 'set_status';
const UPDATE_SELF_PHOTO = 'update_self_photo';

export const addPostCreator = (text) => { return { type: ADD_POST, text } };
export const setUserProfile = (profile) => { return { type: SET_USER_PROFILE, profile } };
export const getUserStatusCreator = (status) => { return { type: SET_STATUS, status } };
export const updateUserStatusCreator = (status) => { return { type: SET_STATUS, status } };
export const toggleFetching = (fetch) => { return { type: TOGGLE_FETCHING, fetch } };
export const updateSelfPhotoCreator = (urlPhoto) => { return { type: UPDATE_SELF_PHOTO, urlPhoto } };

let initState = {
    userId: null,
    fullName: null,
    aboutMe: null,
    contacts: { vk: null, website: null },
    lookingForAJobDescription: null,
    postData: [
        { id: 1, message: "Привет, как дела?", likeCount: 123 },
        { id: 2, message: "Мой второй пост!", likeCount: 123 },
        { id: 3, message: "Это мой первый пост!", likeCount: 123 }],
    profile: null,
    urlPhoto: null,
    status: 'NOPE'
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 0,
                message: action.text,
                likeCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
            };

        case UPD_DEFAULT_TEXT_POST:
            return {
                ...state,
                newPostText: action.newText
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case TOGGLE_FETCHING:
            return {
                ...state, isFetching: action.fetch
            }
        case UPDATE_SELF_PHOTO: 
            return {
                ...state, profile: {...state.profile, photos: action.urlPhoto} 
            }

        default:
            return state;
    }
}

export const getProfile = (userId) => async (dispatch) => {
    dispatch(toggleFetching(true));
    let response = await userAPI.requestUsers(userId);
    dispatch(setUserProfile(response));
}
export const updateSelfPhoto = (urlPhoto) => async (dispatch) => {
    let response = await profileAPI.updateSelfPhoto(urlPhoto);
    console.log(response)
    if (response.data.data.resultCode === 0) {
        dispatch(updateSelfPhotoCreator(response.data.photos));
    }
}
export const addPostText = (text) => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        dispatch(addPostCreator(text));
    }
}
export const getUserStatus = (userId) => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        profileAPI.getUserProfile(`profile/status/` + userId)
            .then(data => {
                dispatch(updateUserStatusCreator(data));
            });
    }
}
export const updateUserStatus = (text) => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        profileAPI.updateUserStatus(text);
        dispatch(updateUserStatusCreator(text));
    }
}


export default profileReducer;