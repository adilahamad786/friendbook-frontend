import classes from "./Comment.module.css";
import ProfilePicture from "../profilePicture/ProfilePicture";
import Backdrop from "../backdrop/Backdrop";
import Options from "../options/Options";
import { MoreHoriz } from "@mui/icons-material";
import { format } from "timeago.js";
import { useState } from 'react';
import { useSelector } from "react-redux";

const Comment = (props) => {
  const { _id: commentId, owner, hasProfilePicture, message, username, createdAt } = props.data;
  const [showOptions, setShowOptions] = useState(false);
  const currentUserId = useSelector(state => state.user._id.toString());

  const hasOwnComment = owner === currentUserId;

  const showMenuHandler = () => {
    setShowOptions(showOptions => !showOptions && hasOwnComment);
  }

  return (
    <div className={classes.user}>
      <div className={classes.userInfo}>
        <ProfilePicture className={classes.profilePicture} user={ {_id : owner, hasProfilePicture} }/>
        <div className={classes.message}>
          <div className={classes.owner}>
            <span>{username.toUpperCase()}</span>
            <span className={classes.time}>{format(createdAt)}</span>
          </div>
          <p>{message}</p> 
        </div>
      </div>
      <div className={classes.menu}>
          { <MoreHoriz onClick={showMenuHandler} /> }
          { showOptions && <Backdrop onClose={showMenuHandler} />  }
          { showOptions && <div className={classes.options}><Options id={commentId.toString()} delete={props.delete} onClose={showMenuHandler}/></div> }
        </div>
    </div>
  );
};

export default Comment;
