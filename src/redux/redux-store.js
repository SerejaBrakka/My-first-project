import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import videosReducer from "./videos-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  videosPage: videosReducer,
  sidebar: sidebarReducer,
});

let store = legacy_createStore(reducers);

export default store;
