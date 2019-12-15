import React from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src="https://avatars.mds.yandex.net/get-pdb/1909671/408e1419-9d03-4b41-a3ae-dfd3a0ce762b/s1200?webp=false"></img>
            <div className={style.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> :
                <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>);
};

export default Header;