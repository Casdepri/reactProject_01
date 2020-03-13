import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import friendReducer from "./friendReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    sidebar: sidebarReducer,
    friendList: friendReducer
});

let store = createStore(reducers);

export default store;