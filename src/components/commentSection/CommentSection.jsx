import classes from "./CommentSection.module.css";
import AddComment from "../addComment/AddComment";
import Comment from "../comment/Comment";
import { useState, useEffect, useContext } from "react";
import useHttp from "../../hooks/useHttp";
import AuthContext from "../../context/AuthContext";
import { deleteElement } from "../../helper/deleteElement";
import { replaceElement } from "../../helper/replaceElement";

function CommentSection(props) {
  const [comments, setComments] = useState([]);
  const { error, sendRequest: fetchComments } = useHttp();
  const { deleteCommentError, sendRequest: deleteCommentRequest } = useHttp();
  const { error: updateCommentError, sendRequest: updateCommentRequest } = useHttp();
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

  const updateComment = ({ commentId, message}) => {
    updateCommentRequest({
      url : `/api/comment/update/${commentId}`,
      method : "PATCH",
      headers : {
        Authorization : token,
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({ message })
    }, (updatedComment) => {
      const newComments = replaceElement(comments, updatedComment);
      setComments(newComments);
    });
  }
  
  useEffect(() => {
    if (error || deleteCommentError || updateCommentError) {
      alert(error || deleteCommentError || updateCommentError);
      if (error.message === "Please authenticate!" || error.deleteCommentError === "Please authenticate!" || error.updateCommentError === "Please authenticate!") {
        setLogedOut();
      }
    }
  }, [error, deleteCommentError, updateCommentError, setLogedOut]);

  const updateComments = (newComment, commentCounter) => {
    setComments(state => [newComment, ...state]);
    props.updateCommentCounter(commentCounter);
  };

  return (
    <section className={classes.container}>
      <AddComment updateComments={updateComments} postId={props.postId} />
      <div className={classes.commentsContainer}>
        {comments.map((comment) => {
          return <Comment update={updateComment} delete={deleteComment} key={comment._id} data={comment} />;
        })}
      </div>
    </section>
  );
}

export default CommentSection;
