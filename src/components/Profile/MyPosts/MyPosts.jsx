import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {


    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newText);
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    };
    return (
        <div>
            <h3>My Posts</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );

};


let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name='newText' component='textarea'/>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
        </form>
    )
}
AddNewPostForm = reduxForm({form: "profilePost"})(AddNewPostForm);
export default MyPosts;