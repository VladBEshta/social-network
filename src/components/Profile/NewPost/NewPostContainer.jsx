import './../../../App.css'
import {addPostAction} from "../../../redux/state/profile-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newPost: state.profilePage.newPost
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPostAction : (newPostText) =>{
            dispatch(addPostAction(newPostText))
        },
    }
}


const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer