import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: "Привет, как дела?", likeCount: 123 },
                { id: 2, message: "Мой второй пост!", likeCount: 123 },
                { id: 3, message: "Это мой первый пост!", likeCount: 123 }],
            newPostText: ""
        },
        messagePage: {
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
                { id: 5, message: "Hello 5", user: "me" }],
            newMessageText: ""
        },
        sidebar: {
            links: [
                { id: 1, name: "Profile", path: "/profile" },
                { id: 2, name: "Message", path: "/dialogs" },
                { id: 3, name: "News", path: "/news" },
                { id: 4, name: "Music", path: "/music" },
                { id: 5, name: "Settings", path: "/settings" },
                { id: 6, name: "Friends", path: "/friends" }]
        },
        friendList: [
            { id: 1, name: "User 1", path: "/" },
            { id: 2, name: "User 2", path: "/" },
            { id: 3, name: "User 3", path: "/" }]
    },
    _callSubscriber() {
        console.log("ХОБА");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messageReducer(this._state.messagePage, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;

export default store;