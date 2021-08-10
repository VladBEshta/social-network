import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return <div className="nav">
        <NavLink to='/profile' activeClassName = "activeNav">Profile</NavLink>
        <NavLink to='/dialogs' activeClassName = "activeNav">Dialogs</NavLink>
        <NavLink to='/news' activeClassName = "activeNav">News</NavLink>
        <NavLink to='/users' activeClassName = "activeNav">Users</NavLink>
        <NavLink to='/music' activeClassName = "activeNav">Music</NavLink>
        <NavLink to='/settings' activeClassName = "activeNav">Settings</NavLink>
    </div>
}
export default NavBar