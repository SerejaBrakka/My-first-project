let initialState = {
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
};
const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
