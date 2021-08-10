import React from 'react';
import userPhoto from '../../../src/assets/img/userPhoto.png'
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <div>isLoading...</div>
    }
    return <div>
        <span><img alt='profileAva' src={props.profile.photos.small!= null ? props.profile.photos.small : userPhoto }/></span>
        <div>name: {props.profile.fullName}</div>
    </div>
}
export default ProfileInfo