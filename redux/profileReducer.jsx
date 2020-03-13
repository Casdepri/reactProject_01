const ADD_POST = 'addPost';
const UPD_DEFAULT_TEXT_POST = 'updateDefaultTextPost';

export const addPostCreator = () => {
    return { type: ADD_POST }
};

export const updatePostCreator = (text) => {
    return { type: UPD_DEFAULT_TEXT_POST, newText: text }
};

let initState = {
    postData: [
        { id: 1, message: "Привет, как дела?", likeCount: 123 },
        { id: 2, message: "Мой второй пост!", likeCount: 123 },
        { id: 3, message: "Это мой первый пост!", likeCount: 123 }],
    newPostText: ""
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 0,
                message: state.newPostText,
                likeCount: 0
            };

            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };

        case UPD_DEFAULT_TEXT_POST: {
            return {
                ...state,
                newPostText: action.newText                
            };
        }

        default:
            return state;
    }
}

export default profileReducer;