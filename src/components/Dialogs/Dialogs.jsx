import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElement = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} src={d.src} />
  ));

  let addAnswers = () => {
    props.addAnswer();
  };

  let newMessage = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text)
  };

  let messagesElement = state.messages.map((m) => {
    return <Message message={m.message} />;
  });

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElement}</div>
      <div className={classes.messages}>
        {messagesElement}
        <textarea onChange={newMessage} value={state.newMessageText} />
        <button onClick={addAnswers}>Add</button>
      </div>
    </div>
  );
};

export default Dialogs;
