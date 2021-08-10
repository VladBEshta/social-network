import React from 'react';
import Profile from "./Profile";
import {getProfileDataThunk, getProfileStatusThunk, updateProfileStatusThunk} from "../../redux/state/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../assets/hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (userId === undefined) {
            userId = this.props.loggedUserId
        }
        this.props.getProfileDataThunk(userId)
        this.props.getProfileStatusThunk(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                        updateStatus={this.props.updateStatus}/>
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
        updateStatus: updateProfileStatusThunk
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
