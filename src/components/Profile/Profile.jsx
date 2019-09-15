import React from 'react';
import prof from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
    return (<div className={prof.content}>
    <div>
    <img src='https://www.tokkoro.com/picsup/1440721-reflection.jpg'></img>
    </div>
    <div>
    AVA+DESCRIPTION
    </div>
    <MyPosts/>
  </div>);
}

export default Profile;