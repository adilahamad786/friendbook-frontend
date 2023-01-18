import classes from './UserPosts.module.css';
import Post from '../post/Post';
import { useState, useEffect, useContext } from 'react';
import useHttp from "../../hooks/useHttp";
import AuthContext from "../../context/AuthContext";
import { useParams } from 'react-router-dom';

const PostSection = () => {
  const userId = useParams().id;
  const [posts, setPosts] = useState([]);
  const { error, sendRequest: fetchPosts } = useHttp();
  const { token, setLogedOut } = useContext(AuthContext);

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
  
  useEffect(() => {
    if (error) {
      alert(error);
      if (error.message === "Please authenticate!") {
        setLogedOut();
      }
    }
  }, [error, setLogedOut]);

  return (
    <section className={classes.container}>
      {
        posts.map(post => {
          return <Post key={post._id} post={post} />
        })
      }
    </section>
  )
}

export default PostSection;
