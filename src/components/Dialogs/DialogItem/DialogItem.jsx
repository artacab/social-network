import React from 'react';
import prof from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {

    return (<div className={prof.dialog + ' ' +prof.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>

    );
};

export default DialogItem;
