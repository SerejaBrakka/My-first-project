const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const ADD_ANSWER = "ADD-ANSWER";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANSWER:
      let newMessage = {
        id: 7,
        message: state.newMessageText,
      };
      return {
        ...state,
        newMessageText: "",
        messages: [...state.messages, newMessage],
      };

    case ADD_NEW_MESSAGE:
      return {
        ...state,
        newMessageText: action.newText,
      };

    default:
      return state;
  }
};
export const addAnswerActionCreator = () => {
  return {
    type: ADD_ANSWER,
  };
};

export const addNewMessageActionCreator = (text) => {
  return {
    type: ADD_NEW_MESSAGE,
    newText: text,
  };
};
export default dialogsReducer;
