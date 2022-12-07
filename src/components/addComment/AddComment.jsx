import classes from "./AddComment.module.css";
import ProfilePicture from "../profilePicture/ProfilePicture";
import { SendOutlined } from "@mui/icons-material";

const AddComment = (props) => {
  return (
    <div className={classes.addComment}>
      <ProfilePicture image={props.user.profilePicture} />
      <form className={classes.commentForm}>
        <input type="text" />
        <button>
          <SendOutlined />
        </button>
      </form>
    </div>
  );
};

export default AddComment;
