import Post from "./Post";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        post : state.profilePage.posts
    }
}
const mapDispatchToProps = () => {
    return {

    }
}


const PostContainer = connect( mapStateToProps, mapDispatchToProps )(Post)

export default PostContainer