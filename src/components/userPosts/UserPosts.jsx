import classes from './UserPosts.module.css';
import Post from '../post/Post';
import { useState, useEffect, useContext } from 'react';
import useHttp from "../../hooks/useHttp";
import AuthContext from "../../context/AuthContext";
import { useParams } from 'react-router-dom';
import { deleteElement } from '../../helpers/deleteElement';
import { replaceElement } from '../../helpers/replaceElement';

const PostSection = () => {
  const userId = useParams().id;
  const [posts, setPosts] = useState([]);
  const { error, sendRequest: fetchPosts } = useHttp();
  const { token, setLogedOut } = useContext(AuthContext);
  const { error: deletePostError, sendRequest: deletePostRequest } = useHttp()
  const { error: updatePostError, sendRequest: updatePostRequest } = useHttp();

  useEffect(() => {
    fetchPosts({
      url : `/api/post/my-posts/${userId}`,
      headers : {
        Authorization : token
      }
    }, (resPosts) => {
      setPosts(resPosts);
    });
  }, [fetchPosts, userId, setPosts, token]);

  const deletePost = (postId) => {
    deletePostRequest({
      url: `/api/post/delete/${postId}`,
      method: "DELETE",
      headers: {
        Authorization: token
      }
    }, (resData) => {
      const newPosts = deleteElement(posts, resData.postId);
      setPosts(newPosts);
    });
  };

  const updatePost = ({ postId, formData}) => {
    updatePostRequest({
      url : `/api/post/update/${postId}`,
      method : "PATCH",
      headers : {
        Authorization : token
      },
      body : formData
    }, (updatedPost) => {
      const newPosts = replaceElement(posts, updatedPost);
      setPosts(newPosts);
    });
  }
  
  useEffect(() => {
    if (error || deletePostError || updatePostError) {
      alert(error || deletePostError || updatePostError);
      if (error.message === "Please authenticate!" || deletePostError.message === "Please authenticate!" || updatePostError === "Please authenticate!") {
        setLogedOut();
      }
    }
  }, [error, deletePostError, updatePostError, setLogedOut]);

  return (
    <section className={classes.container}>
      {
        posts.map(post => {
          return <Post key={post._id} deletePost={deletePost} updatePost={updatePost} post={post} />
        })
      }
    </section>
  )
}

export default PostSection;
