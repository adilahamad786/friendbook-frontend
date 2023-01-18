import classes from "./CommentSection.module.css";
import AddComment from "../addComment/AddComment";
import Comment from "../comment/Comment";
import { useState, useEffect, useContext } from "react";
import useHttp from "../../hooks/useHttp";
import AuthContext from "../../context/AuthContext";

const CommentSection = (props) => {
  const [comments, setComments] = useState([]);
  const { error, sendRequest: fetchComments } = useHttp();
  const { token, setLogedOut } = useContext(AuthContext);

  useEffect(() => {
    fetchComments({
      url : `/api/comment/post/${props.postId.toString()}`,
      headers : {
        Authorization : token
      }
    }, (comments) => {
      setComments(comments.reverse());
    })
  }, [fetchComments, props.postId, setComments, token]);

  useEffect(() => {
    if (error) {
      alert(error);
      if (error.message === "Please authenticate!") {
        setLogedOut();
      }
    }
  }, [error, setLogedOut]);

  const updateComments = (newComment) => {
    setComments(state => [newComment, ...state]);
    props.updateCommentCounter();
  }

  return (
    <section className={classes.container}>
      <AddComment updateComments={updateComments} postId={props.postId}/>
      <div className={classes.commentsContainer}>
        {comments.map((comment) => {
            return <Comment key={comment._id} data={comment} />;
        })}
      </div>
    </section>
  );
};

export default CommentSection;
