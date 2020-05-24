const ADD_MESSAGE = 'addMessage';

export const addMessageCreator = (text) => {return { type: ADD_MESSAGE, text }};


let initState = {
    dialogsData: [
        { id: 1, name: "UserName 1" },
        { id: 2, name: "UserName 2" },
        { id: 3, name: "UserName 3" },
        { id: 4, name: "UserName 4" },
        { id: 5, name: "UserName 5" }],
    messageData: [
        { id: 1, message: "Hello 1", user: "me" },
        { id: 2, message: "Hello 2", user: "friend" },
        { id: 3, message: "Hello 3", user: "me" },
        { id: 4, message: "Hello 4", user: "friend" },
        { id: 5, message: "Hello 5", user: "me" }]
}

const messageReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 0,
                message: action.text
            };

            return {
                ...state,
                messageData: [...state.messageData, newMessage],
            }
        }
      
        default:
            return state;
    }
}

export const addMessage = (text) => {
    return (dispatch) => {
        dispatch(addMessageCreator(text));
    }
}

export default messageReducer;