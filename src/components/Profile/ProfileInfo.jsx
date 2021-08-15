import React from 'react';
import userPhoto from '../../../src/assets/img/userPhoto.png'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <div>isLoading...</div>
    }
    const avaSelected = (e) => {
        const ava = e.target.files
        if (ava.length) {
            props.saveAva(ava[0])
        }
    }
    return <div>
        <span>
            <img alt='profileAva'
                 src={props.profile.photos.large != null
                     ? props.profile.photos.large
                     : userPhoto}/>
        </span>
        <div>
            {props.isOwner && <input onChange={avaSelected} type="file"/>}
        </div>

        <div>name: {props.profile.fullName}</div>
    </div>
}
export default ProfileInfo