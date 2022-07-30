import { connect } from "react-redux";
import { compose } from "redux";
import { addAnswer, updateNewMessageText } from "../../redux/dialogs-reducer";
import { withAuthRedirect } from "./../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(
  connect(mapStateToProps, {
    updateNewMessageText,
    addAnswer,
  }),
  withAuthRedirect
)(Dialogs);
