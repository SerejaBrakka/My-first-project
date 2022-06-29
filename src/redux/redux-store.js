import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import videosReducer from "./videos-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  videosPage: videosReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
});

let store = legacy_createStore(reducers);
window.store = store;
export default store;
