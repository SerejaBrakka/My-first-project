import React from "react";
import { addAnswerActionCreator } from "../../redux/dialogs-reducer";
import { addNewMessageActionCreator } from "../../redux/dialogs-reducer";
import StoreContext from "../../storeContext";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        let addAnswers = () => {
          store.dispatch(addAnswerActionCreator());
        };
      
        let newMessage = (text) => {
          store.dispatch(addNewMessageActionCreator(text));
        };
        return (
          <Dialogs
            updateNewMessageText={newMessage}
            addAnswer={addAnswers}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
