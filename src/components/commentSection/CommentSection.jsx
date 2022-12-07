import classes from "./CommentSection.module.css";
import AddComment from "../addComment/AddComment";
import Comment from "../comment/Comment";

const CommentSection = (props) => {
  return (
    <div className={classes.commentSection}>
      <AddComment key={props.user.id} user={props.user}/>
      <div className={classes.comments}>
        {props.comments.map((comment) => {
            return <Comment key={comment.id} data={comment} />;
        })}
      </div>
    </div>
  );
};

export default CommentSection;
