import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {


    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };
    return (
        <div>
            <h3>My Posts</h3>
            <div className={s.postsBlock}>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>OK</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    );


};

export default MyPosts;