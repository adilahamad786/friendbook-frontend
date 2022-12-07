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

const Post = (props) => {
  const [showComments, setShowComments] = useState(false);
  const [liked, setLiked] = useState(false);

  const likeHandler = () => {
    setLiked(!liked)
  }

  const commentHandler = () => {
    setShowComments(!showComments)
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
          <MoreHoriz/>
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
          {liked ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
          <span>{`${props.post.countLikes} Likes`}</span>
        </div>
        <div onClick={commentHandler} className={classes.option}>
          <TextsmsOutlined />
          <span>{`${props.post.countComments} Comments`}</span>
        </div>
        <div className={classes.option}>
          <ShareOutlined />
          <span>{`${props.post.countShares} Share`}</span>
        </div>
      </div>
      {showComments && <CommentSection key="key" user={props.user} comments={props.comments} />}
    </div>
  );
};

export default Post;
