import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (<div>
        <div>
            <img src='https://www.tokkoro.com/picsup/1440721-reflection.jpg'></img>
        </div>
        <div className={s.descriptionBlock}>
            description
        </div>
    </div>);
}
export default ProfileInfo;