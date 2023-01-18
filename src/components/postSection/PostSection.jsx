import classes from './PostSection.module.css';
import CreatePost from '../createPost/CreatePost';
import Post from '../post/Post';
import { useState, useEffect, useContext } from 'react';
import useHttp from "../../hooks/useHttp";
import AuthContext from "../../context/AuthContext";

const PostSection = () => {
  const [posts, setPosts] = useState([]);
  const { error, sendRequest: fetchPosts } = useHttp();
  const { token, setLogedOut } = useContext(AuthContext);

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
    if (error) {
      alert(error);
      if (error.message === "Please authenticate!") {
        setLogedOut();
      }
    }
  }, [error, setLogedOut]);
  
  const addPost = (post) => {
    setPosts(oldPosts => [post, ...oldPosts]);
  }

  return (
    <section className={classes.container}>
      <CreatePost addPost={addPost} />
      {
        posts.map(post => {
          return <Post key={post._id} post={post} />
        })
      }
    </section>
  )
}

export default PostSection;
