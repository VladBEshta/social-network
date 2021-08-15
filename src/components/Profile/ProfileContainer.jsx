import React from 'react';
import Profile from "./Profile";
import {
    getProfileDataThunk,
    getProfileStatusThunk,
    saveAva,
    updateProfileStatusThunk
} from "../../redux/state/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../assets/hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    updateProfile () {
        let userId = this.props.match.params.userId
        if (userId === undefined) {
            userId = this.props.loggedUserId
        }
        this.props.getProfileDataThunk(userId)
        this.props.getProfileStatusThunk(userId)
    }
    componentDidMount() {
        this.updateProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
        this.updateProfile()
    }
    render() {
        return <Profile {...this.props}
                        isOwner = {!this.props.match.params.userId}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        saveAva = {this.props.saveAva}/>
    }
}

let mapStateToProps = (state) => {
    return {
        state,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        loggedUserId: state.auth.id
    }
}

export default compose(
    connect(mapStateToProps, {
        getProfileDataThunk,
        getProfileStatusThunk,
        saveAva,
        updateStatus: updateProfileStatusThunk
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
