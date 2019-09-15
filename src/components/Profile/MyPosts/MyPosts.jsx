import React from 'react';
import prof from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = () => {
    return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>OK</button>
    </div>
    <Post/>
    <Post/>
    <Post/>
    </div>
    );
}

export default MyPosts;