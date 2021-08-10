import React, {useEffect, useState} from "react";
import style from './Post/Profile.module.css'


const ProfileStatusWithHook = (props) => {
    const [statusEditing, setStatusEditing] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(()=> {
        setStatus(props.status)
    }, [props.status])

    const toggleStatus = () => {
        setStatusEditing(!statusEditing)
        if (status) {
            props.updateStatus(status)
        }
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    if (!statusEditing) return <div
        className={style.statusContainer}
        onDoubleClick={toggleStatus}>
        {status || "Status is empty"}</div>
    else return <input autoFocus={true}
                       onBlur={toggleStatus}
                       className={style.statusContainer}
                       value={status}
                       onChange={onStatusChange}
                       type="text"/>
}

export default ProfileStatusWithHook