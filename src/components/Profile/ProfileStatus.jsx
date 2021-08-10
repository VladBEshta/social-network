import React from "react";
import style from './Post/Profile.module.css'


class ProfileStatus extends React.Component {
    state = {
        statusEditing: false,
        status: this.props.status
    }
    toggleStatus = () => {
        this.setState({statusEditing: !this.state.statusEditing})
        if (this.state.status) {
            console.log(this.state.statusEditing, this.state.status)
            this.props.updateStatus(this.state.status)
        }
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }
    render() {
        if (!this.state.statusEditing) return <div
            className={style.statusContainer}
            onDoubleClick={this.toggleStatus}>
            {this.props.status || "Status is empty"}</div>
        else return <input autoFocus={true}
                           onBlur={this.toggleStatus}
                           className={style.statusContainer}
                           value={this.state.status}
                           onChange={this.onStatusChange}
                           type="text"/>
    }
}

export default ProfileStatus