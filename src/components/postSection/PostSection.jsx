import classes from './PostSection.module.css';
import CreatePost from '../createPost/CreatePost';
import Post from '../post/Post';
import { useState, useEffect, useContext } from 'react';
import useHttp from "../../hooks/useHttp";
import AuthContext from "../../context/AuthContext";
import { deleteElement } from '../../helper/deleteElement';

const PostSection = () => {
  const [posts, setPosts] = useState([]);
  const { error, sendRequest: fetchPosts } = useHttp();
  const { token, setLogedOut } = useContext(AuthContext);
  const { error: deletePostError, sendRequest: deletePostRequest } = useHttp()

  useEffect(() => {
    fetchPosts({
      url : "/api/post/timeline",
      headers : {
        Authorization : token
      }
    }, (resPosts) => {
      setPosts(resPosts);
    });
  }, [fetchPosts, setPosts, token]);
  
  useEffect(() => {
    if (error || deletePostError) {
      alert(error.message || deletePostError.message);
      if (error.message === "Please authenticate!" || deletePostError.message === "Please authenticate!") {
        setLogedOut();
      }
    }
  }, [error, deletePostError, setLogedOut]);

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
  
  const addPost = (post) => {
    setPosts(oldPosts => [post, ...oldPosts]);
  }

  return (
    <section className={classes.container}>
      <CreatePost addPost={addPost} />
      {
        posts.map(post => {
          return <Post key={post._id} deletePost={deletePost} post={post} />
        })
      }
    </section>
  )
}

export default PostSection;
