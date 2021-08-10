import {sendMessageAction} from "../../redux/state/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../assets/hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        messages: state.dialogPage.messages,
        newMessageText: state.dialogPage.newMessageText,
        dialogs: state.dialogPage.dialogs,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessageAction: (newMessage) => {
            dispatch(sendMessageAction(newMessage))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)