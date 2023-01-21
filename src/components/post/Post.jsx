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
import PostUpdate from "../postUpdate/PostUpdate";

const Post = (props) => {
  const { _id: postId, createdAt, owner: ownerId, hasProfilePicture, hasImage, username, message } = props.post;
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showUpdatePost, setShowUpdatePost] = useState(false);
  const { token, setLogedOut } = useContext(AuthContext);
  const { error: likeError, sendRequest: sendLikeRequest } = useHttp();
  const currentUeserId = useSelector(state => state.user._id.toString());

  const timeago = moment(new Date(createdAt)).fromNow();
  const hasOwnPost = ownerId === currentUeserId;
  const postImageLink = `/api/post/${postId}`;

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
      url : `/api/like/${postId}`,
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
    if (likeError) {
      alert(likeError);
      if (likeError.message === "Please authenticate!") {
        setLogedOut();
      }
    }
  }, [likeError, setLogedOut]);

  const showCommentHandler = () => {
    setShowComments(showComments => !showComments);
  }
  
  const updateCommentCounter = (currentCommentCounter) => {
    props.post.commentCounter = currentCommentCounter;
  }

  const showMenuHandler = () => {
    setShowOptions(showOptions => !showOptions && hasOwnPost);
  }

  const showUpdatePostOption = () => {
    setShowUpdatePost(state => !state);
  }

  const closeBackdrop = () => {
    setShowOptions(false);
    setShowUpdatePost(false);
  }

  return (
    <div className={classes.post}>
      <div className={classes.user}>
        <Link to={`/profile/${ownerId}`} className={classes.userInfo}>
          <ProfilePicture user={{_id: ownerId, hasProfilePicture}} />
          <div className={classes.details}>
            <span className={classes.username}>{username.toUpperCase()}</span>
            <span className={classes.time}>{timeago}</span>
          </div>
        </Link>
        <div className={classes.menu}>
          { !showOptions && <MoreHoriz onClick={showMenuHandler} /> }
          { showOptions && <Options update={showUpdatePostOption} delete={props.deletePost.bind(null, postId)} onClose={showMenuHandler} /> }
          { showUpdatePost && <div className={classes.postUpdate}><PostUpdate onClose={showUpdatePostOption} update={props.updatePost} image={{postId, hasImage}}/></div> }
          { (showOptions || showUpdatePost) && <Backdrop onClose={closeBackdrop} /> }
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.message}>
          <p>{message}</p>
        </div>
        <div className={classes.image}>
          { hasImage && <img
            src={postImageLink}
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
      {showComments && <CommentSection updateCommentCounter={updateCommentCounter} postId={postId}/>}
    </div>
  );
};

export default Post;
