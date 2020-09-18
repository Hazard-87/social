import React from 'react';
import classes from './Posts.module.css';


const Posts = (props) => {

    let newCreatePost = React.createRef()

    let newPost = ()=> {
        let post = newCreatePost.current.value
        alert(post)
        newCreatePost.current.value = ''
    }

  return (
      <div className={classes.post}>
      <div className={classes.item}>
          <img src='https://www.meme-arsenal.com/memes/ae1d44253a861f53d95864dd37c55a78.jpg'/> {props.message}
      </div>
          <div className={classes.like}>
              <img src='https://img.icons8.com/cotton/2x/facebook-like.png' />
              {props.likesCount}
          </div>
          <div>
              <textarea className={classes.newComment} ref={newCreatePost} cols='50' rows='1' type="text" placeholder='Comments...'></textarea>
              </div>
              <div>
              <button className={classes.send} onClick={newPost}>Send</button>
          </div>
      </div>
  )
}

// class Posts extends React.Component {
//     newCreatePost = () => {React.createRef()}
//
//     newPost = ()=> {
//         let post = this.newCreatePost.current.value
//         alert(post)
//         this.newCreatePost.current.value = ''
//     }
//
//     render() {
//         return (
//             <div className={classes.post}>
//                 <div className={classes.item}>
//                     <img src='https://www.meme-arsenal.com/memes/ae1d44253a861f53d95864dd37c55a78.jpg'/> {this.props.message}
//                 </div>
//                 <div className={classes.like}>
//                     <img src='https://img.icons8.com/cotton/2x/facebook-like.png' />
//                     {this.props.likesCount}
//                 </div>
//                 <div>
//                     <textarea className={classes.newComment} ref={this.newCreatePost} cols='50' rows='1' type="text" placeholder='Comments...'></textarea>
//                 </div>
//                 <div>
//                     <button className={classes.send} onClick={this.newPost}>Send</button>
//                 </div>
//             </div>
//         )
//     }
// }

export default Posts;