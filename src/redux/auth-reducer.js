import { authAPI } from "./../api/api.js";
let SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export let setAuthUserData = (id, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: {
      id,
      email,
      login,
      isAuth,
    },
  };
};
export let getAuthUserData = () => {
  return (dispatch) => {
    return authAPI.me().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};
export let login = (email, password, rememberMe) => {
  return (dispatch) => {
    return authAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
      } else {}
    });
  };
};
export let logout = () => {
  return (dispatch) => {
    return authAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
