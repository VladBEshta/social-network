import React from 'react';
import styles from "./Users.module.css"
import userAva from "../../assets/img/userPhoto.png"
import {NavLink} from "react-router-dom";
import {deleteFollow, postFollow} from "../../API/API";
import Paginator from "./Paginator";

const Users = ({currentPage,onPageChange, pageSize, totalItemsCount, ...props}) => {
    // let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    // let pagesCountArray = []
    // for (let u = 1; u <= pagesCount; u++) {
    //     pagesCountArray.push(u)
    // }
    return <div>
        {/*<div className={styles.pageLinks}>{pagesCountArray.map(p => <span*/}
        {/*    className={p === props.currentPage ? styles.selected : undefined}*/}
        {/*    onClick={() => {*/}
        {/*        props.onCurrentChange(p)*/}
        {/*    }}>{p}</span>)}*/}
        {/*</div>*/}
        <Paginator currentPage={currentPage} onPageChange={onPageChange}
                   pageSize={pageSize} totalItemsCount={totalItemsCount}/>
        {props.users.map(user => <div>
            <div key={user.id}>name:{user.name} userId:{user.id} </div>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img className={styles.imgSize} src={user.photos.small != null ? user.photos.small : userAva}
                         alt=''/>
                </NavLink>

            </div>
            <button
                disabled={props.inProgress.some(id => id === user.id)}
                onClick={() => {
                    props.toggleProgress(true, user.id)
                    if (user.followed) {
                        deleteFollow(user.id).then(data => {
                            if (data.resultCode === 0) {
                                props.follow(user.id)
                                props.toggleProgress(false, user.id)
                            }
                        });
                    } else postFollow(user.id).then(data => {
                        if (data.resultCode === 0) {
                            props.follow(user.id)
                            props.toggleProgress(false, user.id)
                        }
                    });
                }}>{user.followed ? 'unfollow' : 'follow'}
            </button>
        </div>)}
    </div>
}

export default Users