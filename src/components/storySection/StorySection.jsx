import classes from "./StorySection.module.css";
import CreateStory from "../createStory/CreateStory";
import Story from "../story/Story";
import useHttp from "../../hooks/useHttp";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useSelector } from "react-redux";

const StorySection = (props) => {
  const { error, sendRequest: fetchStories } = useHttp();
  const { token, setLogedOut } = useContext(AuthContext);
  const [stories, setStories] = useState([]);
  const { story, username } = useSelector(state => state.user);

  useEffect(() => {
    fetchStories({
      url : "/api/user/story/timeline",
      headers : {
        Authorization : token
      }
    }, (stories) => {
      setStories(stories);
    })
  }, [fetchStories, token]);

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
      <CreateStory
        key={username}
        user={{
          story,
          username
        }}
      />
      {stories.map((story) => {
        return (
          <Story
            key={story._id}
            story={story}
          />
        );
      })}
    </section>
  );
};

export default StorySection;
