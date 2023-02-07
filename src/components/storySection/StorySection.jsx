import classes from "./StorySection.module.css";
import CreateStory from "../createStory/CreateStory";
import Story from "../story/Story";
import useHttp from "../../hooks/useHttp";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";

const StorySection = () => {
  const [stories, setStories] = useState([]);
  const { token, setLogedOut } = useContext(AuthContext);
  const { error: fetchStoriesError, sendRequest: fetchStories } = useHttp();

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
    if (fetchStoriesError) {
      alert(fetchStoriesError.message);
      if (fetchStoriesError.errorType === "unauthorized") {
        setLogedOut();
      }
    }
  }, [fetchStoriesError, setLogedOut]);

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
