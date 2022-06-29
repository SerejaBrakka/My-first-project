import { addAnswer } from "../../redux/dialogs-reducer";
import { updateNewMessageText } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
// let mapDispatchToProps = (dispatch) => {
//   return {
//     updateNewMessageText: (text) => {
//       dispatch(addNewMessageActionCreator(text));
//     },
//     addAnswer: () => {
//       dispatch(addAnswerActionCreator());
//     },
//   };
// };

const DialogsContainer = connect(mapStateToProps, {
  updateNewMessageText,
  addAnswer,
})(Dialogs);

export default DialogsContainer;
