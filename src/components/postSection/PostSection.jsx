import classes from './PostSection.module.css';
import Post from '../post/Post';

const PostSection = (props) => {
  return (
    <div className={classes.container}>
      {
        props.posts.map(post => {
          return <Post key={post.id} user={props.user} post={post} comments={props.comments} />
        })
      }
    </div>
  )
}

export default PostSection;
