import React from 'react';
import prof from './../Dialogs.module.css';

const Message = (props) => {

    return(
        <div className={prof.message}>
            {props.message}
        </div>
    );
};

export default Message;
