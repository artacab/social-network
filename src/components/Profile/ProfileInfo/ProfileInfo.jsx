import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile ){
        return <Preloader/>
    }
    return (<div>
        <div>
            <img src='https://www.tokkoro.com/picsup/1440721-reflection.jpg'></img>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} alt=""/>
            description
        </div>
    </div>);
}
export default ProfileInfo;