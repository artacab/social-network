import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLenghthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";


const maxLength10 =  maxLenghthCreator(10)

const MyPosts = React.memo(props => {

        let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
        let newPostElement = React.createRef();
        let onAddPost = (values) => {
            props.addPost(values.newText);
        };
        let onPostChange = () => {
            let text = newPostElement.current.value;
            this.props.updateNewPostText(text);
        }
        return (
            <div>
                <h3>My Posts</h3>
                <AddNewPostForm onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        );
    }
);
let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name='newText' component={Textarea}
                           validate={[required, maxLength10]} placeholder="Post message"/>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
        </form>
    )
}
AddNewPostForm = reduxForm({form: "profilePost"})(AddNewPostForm);
export default MyPosts;