import React from 'react';
import NewPostContainer from "./NewPost/NewPostContainer";
import PostContainer from "./Post/PostContainer";
import ProfileInfo from "./ProfileInfo";

import ProfileStatusWithHook from "./ProfileStatusWihHook";

const Profile = (props) => {
    return <div className="profile">
        <ProfileInfo saveAva={props.saveAva}
                     isOwner={props.isOwner}
                     profile={props.profile}/>
        <ProfileStatusWithHook status={props.status}
                               updateStatus={props.updateStatus}/>
        <NewPostContainer store={props.store}/>
        <PostContainer store={props.store}/>
    </div>
}
export default Profile