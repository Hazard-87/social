import React from 'react';
import classes from './MyPosts.module.css';
import Posts from "../Posts/Posts";
import * as form from "redux-form";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validation/validators";
import {Textarea} from "../../common/FormsControls/FormsControl";


const MyPosts = React.memo(props => {
    let postElements = [...props.posts].reverse().map(post => <Posts message={post.post} likesCount={post.likesCount}/>)

    let addNewPost = (values) => {
        props.addPost(values.newPostBody)
        values.newPostBody = ''
    }
    return (
        <div>
            <div>
                <h1 className={classes.myPosts}>My posts</h1>
                <MyPostsReduxForm onSubmit={addNewPost}/>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    )
})

const maxLength = maxLengthCreator(15)

let MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={classes.newPost} component={Textarea} name={'newPostBody'}
                       placeholder={'Your post...'} validate={[required, maxLength]}/>
            </div>
            <div>
                <button className={classes.send}>Send</button>
            </div>
        </form>
    )
}

const MyPostsReduxForm = reduxForm({form: 'addPostForm'})(MyPostsForm)

export default MyPosts;