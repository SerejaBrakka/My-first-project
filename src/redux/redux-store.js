import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunkMiddleWare from "redux-thunk";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import videosReducer from "./videos-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  videosPage: videosReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store;
export default store;
