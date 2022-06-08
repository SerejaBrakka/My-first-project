import profileReducer from "./profile-reducer";
import videosReducer from "./videos-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _callSubscriber() {
    console.log("state was changed");
  },
  _state: {
    videosPage: {
      comments: [
        {
          id: 1,
          comment: "WOW,great",
        },
        { id: 2, comment: "YOHOOOY" },
        { id: 3, comment: "fooo" },
      ],
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Diman",
          src: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg",
        },
        {
          id: 2,
          name: "Sasha",
          src: "https://vraki.net/sites/default/files/inline/images/2_3.png",
        },
        {
          id: 3,
          name: "Masha",
          src: "https://static.wikia.nocookie.net/c2d922eb-d76e-4021-9d6f-90b1c33cefbe/scale-to-width/755",
        },
        {
          id: 4,
          name: "Vasya",
          src: " https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
        },
        {
          id: 5,
          name: "Dasha",
          src: " https://vjoy.cc/wp-content/uploads/2020/11/avatarki-dlya-tik-toka2.jpg",
        },
        {
          id: 6,
          name: "Petya",
          src: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9knn6xg6FC1bl3qY7kXfunQkJ4hfspy27Qg&usqp=CAU",
        },
      ],
      messages: [
        { id: 1, message: "how are you?" },
        { id: 2, message: "I am Learning!" },
        { id: 3, message: "WHAAT?!" },
        { id: 4, message: "YO" },
        { id: 5, message: "YO?!" },
        { id: 6, message: "BRAAAAAAAAAAAAH" },
      ],
    },
    profilePage: {
      posts: [
        { id: 1, message: "Hi,how are you?", likesCount: 10 },
        { id: 2, message: "HELLLOY", likesCount: 5 },
        { id: 3, message: "WHATAAAAAP", likesCount: 0 },
        { id: 4, message: "WOW", likesCount: 8 },
        { id: 5, message: "are you here?", likesCount: 1 },
      ],
    },
    sidebar: {
      friends: [
        {
          id: 1,
          name: "Diman",
          src: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg",
        },
        {
          id: 2,
          name: "Sasha",
          src: "https://vraki.net/sites/default/files/inline/images/2_3.png",
        },
        {
          id: 3,
          name: "Masha",
          src: "https://static.wikia.nocookie.net/c2d922eb-d76e-4021-9d6f-90b1c33cefbe/scale-to-width/755",
        },
        {
          id: 4,
          name: "Denis",
          src: "https://www.blast.hk/attachments/64804/",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.videosPage = videosReducer(this._state.videosPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
