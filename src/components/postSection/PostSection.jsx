import classes from './PostSection.module.css';
import Post from '../post/Post';

const PostSection = (props) => {
  return (
    <section className={classes.container}>
      {
        props.posts.map(post => {
          return <Post key={post.id} user={props.user} post={post} comments={props.comments} />
        })
      }
    </section>
  )
}

export default PostSection;
