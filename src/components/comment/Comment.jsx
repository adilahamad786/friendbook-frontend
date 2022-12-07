import classes from "./Comment.module.css";
import ProfilePicture from "../profilePicture/ProfilePicture";

const Comment = (props) => {
  return (
    <div className={classes.user}>
      <div className={classes.userInfo}>
        <ProfilePicture image={props.data.profilePicture} />
        <div className={classes.message}>
          <span>{props.data.name}</span>
          <p>{props.data.message}</p> 
        </div>
      </div>
      <span>{props.data.time}</span>
    </div>
  );
};

export default Comment;
