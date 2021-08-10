import React from 'react';
import NewPostContainer from "./NewPost/NewPostContainer";
import PostContainer from "./Post/PostContainer";
import ProfileInfo from "./ProfileInfo";
// import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHook from "./ProfileStatusWihHook";

const Profile = (props) => {
    return <div className="profile">
        <ProfileInfo profile={props.profile}/>
        <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus}/>
        <NewPostContainer store={props.store}/>
        <PostContainer store={props.store}/>
    </div>
}
export default Profile