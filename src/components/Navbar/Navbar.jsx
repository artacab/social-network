import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;