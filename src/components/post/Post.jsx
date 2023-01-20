import classes from "./Post.module.css";
import {
  MoreHoriz,
  FavoriteOutlined,
  FavoriteBorderOutlined,
  TextsmsOutlined,
  ShareOutlined
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import ProfilePicture from "../../components/profilePicture/ProfilePicture";
import CommentSection from "../commentSection/CommentSection";
import { useState, useContext, useEffect } from "react";
import Options from "../options/Options";
import Backdrop from "../backdrop/Backdrop";
import moment from "moment"
import useHttp from "../../hooks/useHttp";
import AuthContext from "../../context/AuthContext";
import { useSelector } from "react-redux";

const Post = (props) => {
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const { token, setLogedOut } = useContext(AuthContext);
  const { error, sendRequest: sendLikeRequest } = useHttp();
  const currentUeserId = useSelector(state => state.user._id.toString());

  const timeago = moment(new Date(props.post.createdAt)).fromNow();
  const hasOwnPost = props.post.owner === currentUeserId;

  useEffect(() => {
    if (props.post.likes.includes(currentUeserId)) {
      setLiked(true);
    }
    else {
      setLiked(false);
    }
  }, [props.post.likes, currentUeserId, setLiked]);

  const likeHandler = () => {
    sendLikeRequest({
      url : `/api/like/${props.post._id}`,
      method : "PUT",
      headers : {
        Authorization : token
      }
    }, (resData) => {
      props.post.likes = resData.likes;
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

  const showCommentHandler = () => {
    setShowComments(showComments => !showComments);
  }

  const showMenuHandler = () => {
    setShowOptions(showOptions => !showOptions && hasOwnPost);
  }

  const updateCommentCounter = (currentCommentCounter) => {
    props.post.commentCounter = currentCommentCounter;
  }

  return (
    <div className={classes.post}>
      <div className={classes.user}>
        <Link to={`/profile/${props.post.owner}`} className={classes.userInfo}>
          <ProfilePicture user={{_id: props.post.owner, hasProfilePicture: props.post.hasProfilePicture}} />
          <div className={classes.details}>
            <span className={classes.username}>{props.post.username.toUpperCase()}</span>
            <span className={classes.time}>{timeago}</span>
          </div>
        </Link>
        <div className={classes.menu}>
          { !showOptions && <MoreHoriz onClick={showMenuHandler} /> }
          { showOptions && <Backdrop onClose={showMenuHandler} /> }
          { showOptions && <Options delete={props.deletePost.bind(null, props.post._id.toString())} onClose={showMenuHandler} /> }
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
          <span>{`${props.post.likes.length} Likes`}</span>
        </div>
        <div onClick={showCommentHandler} className={classes.option}>
          <TextsmsOutlined className={classes.optionIcon} />
          <span>{`${props.post.commentCounter} Comments`}</span>
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
