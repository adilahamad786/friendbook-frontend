import { Link } from "react-router-dom";
import {
  MoreHoriz,
  FavoriteOutlined,
  FavoriteBorderOutlined,
  TextsmsOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import classes from "./Post.module.css";
import ProfilePicture from "../../components/profilePicture/ProfilePicture";
import CommentSection from "../commentSection/CommentSection";
import { useState } from "react";
import PostOptions from "../postOptions/PostOptions";
import Backdrop from "../backdrop/Backdrop";

const Post = (props) => {
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const likeHandler = () => {
    setLiked(liked => !liked)
  }

  const commentHandler = () => {
    setShowComments(showComments => !showComments)
  }

  const onClickHandler = () => {
    setShowOptions(showOptions => !showOptions)
  }

  return (
    <div className={classes.post}>
      <div className={classes.user}>
        <Link className={classes.userInfo}>
          <ProfilePicture image={props.post.profilePicture} />
          <div className={classes.details}>
            <span className={classes.username}>{props.post.username}</span>
            <span className={classes.time}>{props.post.time}</span>
          </div>
        </Link>
        <div className={classes.menu}>
          { !showOptions && <MoreHoriz onClick={onClickHandler}/> }
          { showOptions && <Backdrop onClose={onClickHandler} /> }
          { showOptions && <PostOptions onClose={onClickHandler} /> }
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.message}>
          <p>{props.post.message}</p>
        </div>
        <div className={classes.image}>
          <img
            src={props.post.image}
            alt="PostImage"
          />
        </div>
      </div>
      <div className={classes.options}>
        <div onClick={likeHandler} className={classes.option}>
          {liked ? <FavoriteOutlined className={classes.optionIcon} /> : <FavoriteBorderOutlined className={classes.optionIcon} />}
          <span>{`${props.post.countLikes} Likes`}</span>
        </div>
        <div onClick={commentHandler} className={classes.option}>
          <TextsmsOutlined className={classes.optionIcon} />
          <span>{`${props.post.countComments} Comments`}</span>
        </div>
        <div className={classes.option}>
          <ShareOutlined className={classes.optionIcon} />
          <span>{`${props.post.countShares} Share`}</span>
        </div>
      </div>
      {showComments && <CommentSection key="key" user={props.user} comments={props.comments} />}
    </div>
  );
};

export default Post;
