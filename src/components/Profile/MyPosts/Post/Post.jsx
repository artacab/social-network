import React from 'react';
import prof from './Post.module.css'
const Post = (props) => {
    return (
        <div className={prof.item}>
            <img
                src="https://images.wallpaperscraft.com/image/kitten_named_woof_cartoon_cat_drawing_63259_1920x1200.jpg"
                alt=""/>
            <div>
                {props.message}
                    Likes
                {props.likesCount}
            </div>
        </div>
    );
}

export default Post;