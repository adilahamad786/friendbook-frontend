import classes from "./Post.module.css";
import {
  MoreHoriz,
  FavoriteOutlined,
  FavoriteBorderOutlined,
  TextsmsOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import ProfilePicture from "../../components/profilePicture/ProfilePicture";
import CommentSection from "../commentSection/CommentSection";
import { useState, useContext, useEffect } from "react";
import PostOptions from "../postOptions/PostOptions";
import Backdrop from "../backdrop/Backdrop";
import { format } from "timeago.js";
import useHttp from "../../hooks/useHttp";
import AuthContext from "../../context/AuthContext";
import { useSelector } from "react-redux";

const Post = (props) => {
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentsCounter, setCommentsCounter] = useState(props.post.commentsCounter)
  const [showOptions, setShowOptions] = useState(false);
  const { token, setLogedOut } = useContext(AuthContext);
  const { error, sendRequest: sendLikeRequest } = useHttp();
  const { sendRequest: sendLikeStatusRequest } = useHttp();
  const { _id: userId } = useSelector(state => state.user);

  const hasOwnPost = props.post.owner === userId.toString();

  useEffect(() => {
    sendLikeStatusRequest({
      url : `/api/like/status/${props.post._id}`,
      headers : {
        Authorization : token
      }
    }, (resStatus) => {
      setLiked(resStatus.likeStatus);
    })
  }, [sendLikeStatusRequest, token, props]);

  const likeHandler = () => {
    sendLikeRequest({
      url : `/api/like/${props.post._id}`,
      method : "PUT",
      headers : {
        Authorization : token
      }
    }, (resData) => {
      props.post.likesCounter = resData.likesCounter;
      setLiked(resData.hasLiked);
    });
  }

  useEffect(() => {
    if (error) {
      alert(error);
      if (error.message === "Please authenticate!") {
        setLogedOut();
      }
    }
  }, [error, setLogedOut]);

  const commentHandler = () => {
    setShowComments(showComments => !showComments);
  }

  const onClickHandler = () => {
    setShowOptions(showOptions => !showOptions && hasOwnPost);
  }

  const updateCommentCounter = () => {
    setCommentsCounter(state => ++state);
  }

  return (
    <div className={classes.post}>
      <div className={classes.user}>
        <Link to={`/profile/${props.post.owner}`} className={classes.userInfo}>
          <ProfilePicture user={{_id: props.post.owner, hasProfilePicture: props.post.hasProfilePicture}} />
          <div className={classes.details}>
            <span className={classes.username}>{props.post.username.toUpperCase()}</span>
            <span className={classes.time}>{format(new Date(props.post.createdAt))}</span>
          </div>
        </Link>
        <div className={classes.menu}>
          { !showOptions && <MoreHoriz onClick={onClickHandler} /> }
          { showOptions && <Backdrop onClose={onClickHandler} /> }
          { showOptions && <PostOptions onClose={onClickHandler} /> }
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.message}>
          <p>{props.post.message}</p>
        </div>
        <div className={classes.image}>
          { props.post.hasImage && <img
            src={`/api/post/${props.post._id}`}
            alt="PostImage"
          /> }
        </div>
      </div>
      <div className={classes.options}>
        <div onClick={likeHandler} className={classes.option}>
          {liked ? <FavoriteOutlined className={classes.optionIcon} /> : <FavoriteBorderOutlined className={classes.optionIcon} />}
          <span>{`${props.post.likesCounter} Likes`}</span>
        </div>
        <div onClick={commentHandler} className={classes.option}>
          <TextsmsOutlined className={classes.optionIcon} />
          <span>{`${commentsCounter} Comments`}</span>
        </div>
        <div className={classes.option}>
          <ShareOutlined className={classes.optionIcon} />
          <span>Share</span>
        </div>
      </div>
      {showComments && <CommentSection updateCommentCounter={updateCommentCounter} postId={props.post._id}/>}
    </div>
  );
};

export default Post;
