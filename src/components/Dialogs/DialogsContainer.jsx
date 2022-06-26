import React from "react";
import { addAnswerActionCreator } from "../../redux/dialogs-reducer";
import { addNewMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(addNewMessageActionCreator(text))
    },
    addAnswer: () => {
      dispatch(addAnswerActionCreator()); 
    }
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
