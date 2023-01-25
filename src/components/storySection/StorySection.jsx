import classes from "./StorySection.module.css";
import CreateStory from "../createStory/CreateStory";
import Story from "../story/Story";
import useHttp from "../../hooks/useHttp";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";

const StorySection = () => {
  const { error, sendRequest: fetchStories } = useHttp();
  const { token, setLogedOut } = useContext(AuthContext);
  const [stories, setStories] = useState([]);

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
      <CreateStory />
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
