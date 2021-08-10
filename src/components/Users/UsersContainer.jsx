import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    getUsersThunk,
    toggleFetching,
    toggleFollow,
    toggleProgress
} from "../../redux/state/users-reducer";
import {withAuthRedirect} from "../../assets/hoc/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onCurrentChange = (p) => {
        this.props.getUsersThunk(p, this.props.pageSize)

    }

    render() {
        return <div>
            {this.props.isFetching ? <span>Is loading....</span> : undefined}
            <Users totalItemsCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   follow={this.props.toggleFollow}
                   users={this.props.users}
                   onPageChange={this.onCurrentChange}
                   isFetching={this.isFetching}
                   inProgress={this.props.inProgress}
                   toggleProgress={this.props.toggleProgress}
            />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        inProgress: state.usersPage.inProgress,
        toggleProgress: state.usersPage.toggleProgress
    }
}

export default compose(
    connect(mapStateToProps, {
        toggleFollow,
        toggleFetching,
        toggleProgress,
        getUsersThunk
    }),
    withAuthRedirect,
)(UsersContainer)


