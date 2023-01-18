import classes from "./Comment.module.css";
import ProfilePicture from "../profilePicture/ProfilePicture";
import { format } from "timeago.js";

const Comment = (props) => {
  const { owner, hasProfilePicture, message, username, createdAt } = props.data;

  return (
    <div className={classes.user}>
      <div className={classes.userInfo}>
        <ProfilePicture className={classes.profilePicture} user={ {_id : owner, hasProfilePicture} }/>
        <div className={classes.message}>
          <span>{username.toUpperCase()}</span>
          <p>{message}</p> 
        </div>
      </div>
      <span>{format(createdAt)}</span>
    </div>
  );
};

export default Comment;
