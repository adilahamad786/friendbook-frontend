import classes from "./CommentSection.module.css";
import AddComment from "../addComment/AddComment";
import Comment from "../comment/Comment";
import { useState, useEffect, useContext } from "react";
import useHttp from "../../hooks/useHttp";
import AuthContext from "../../context/AuthContext";
import { deleteElement } from "../../helper/deleteElement";

function CommentSection(props) {
  const [comments, setComments] = useState([]);
  const { error, sendRequest: fetchComments } = useHttp();
  const { deleteCommentError, sendRequest: deleteCommentRequest } = useHttp();
  const { token, setLogedOut } = useContext(AuthContext);

  useEffect(() => {
    fetchComments({
      url: `/api/comment/post/${props.postId.toString()}`,
      headers: {
        Authorization: token
      }
    }, (comments) => {
      setComments(comments.reverse());
    });
  }, [fetchComments, props.postId, setComments, token]);

  useEffect(() => {
    if (error || deleteCommentError) {
      alert(error || deleteCommentError);
      if (error.message === "Please authenticate!" || error.deleteCommentError === "Please authenticate!") {
        setLogedOut();
      }
    }
  }, [error, deleteCommentError, setLogedOut]);

  const updateComments = (newComment, commentCounter) => {
    setComments(state => [newComment, ...state]);
    props.updateCommentCounter(commentCounter);
  };

  const deleteComment = (commentId) => {
    deleteCommentRequest({
      url: `/api/comment/remove/${commentId}`,
      method: "DELETE",
      headers: {
        Authorization: token
      }
    }, (resData) => {
      const newComments = deleteElement(comments, resData.commentId);
      setComments(newComments);
      props.updateCommentCounter(resData.commentCounter);
    });
  };

  return (
    <section className={classes.container}>
      <AddComment updateComments={updateComments} postId={props.postId} />
      <div className={classes.commentsContainer}>
        {comments.map((comment) => {
          return <Comment delete={deleteComment} key={comment._id} data={comment} />;
        })}
      </div>
    </section>
  );
}

export default CommentSection;
