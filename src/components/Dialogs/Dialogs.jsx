import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

class Dialogs extends React.Component {
  constructor(props) {
    super(props);
    this.addAnswers = () => {
      this.props.addAnswer();
    };

    this.newMessage = (e) => {
      let text = e.target.value;
      this.props.updateNewMessageText(text);
    };
  }
  render() {
    let state = this.props.dialogsPage;

    let dialogsElement = state.dialogs.map((d) => (
      <DialogItem name={d.name} id={d.id} src={d.src} key={d.id} />
    ));
    let messagesElement = state.messages.map((m) => {
      return <Message message={m.message} key={m.id} />;
    });
    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>{dialogsElement}</div>
        <div className={classes.messages}>
          {messagesElement}
          <textarea onChange={this.newMessage} value={state.newMessageText} />
          <button onClick={this.addAnswers}>Add</button>
        </div>
      </div>
    );
  }
}

export default Dialogs;
