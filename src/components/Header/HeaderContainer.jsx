import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logoutTC} from "../../redux/state/auth-reducer";
import {withRouter} from "react-router-dom";


class HeaderContainer extends React.Component {


    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {logoutTC})(withRouter(HeaderContainer))