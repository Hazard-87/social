import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    if (!props.profile.photos) {
        props.profile.photos = ''
    }

    return (
        <header className={classes.header}>
            <img src='http://pngimg.com/uploads/vkontakte/vkontakte_PNG31.png'/>
            <div className={classes.login}>
                {props.isAuth
                    ? <div><span>{props.login}</span>
                        <button onClick={props.logout}>log out</button>
                    </div>
                    : <NavLink to={'/login'}>login</NavLink>}
            </div>
        </header>
    )
}

export default Header