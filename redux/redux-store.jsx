import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import friendReducer from "./friendReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as fomrReducer } from 'redux-form'
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    friendList: friendReducer,
    auth: authReducer,
    form: fomrReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;