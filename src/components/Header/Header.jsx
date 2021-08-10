import React from 'react';
import '../../App.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <div className="header">
        <div className="login">
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logoutTC}>Logout</button></div>
                : <NavLink to='/login'>Login</NavLink>}</div>
    </div>
}
export default Header