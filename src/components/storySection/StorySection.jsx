import classes from "./StorySection.module.css";
import CreateStory from "../createStory/CreateStory";
import Story from "../story/Story";

const StorySection = (props) => {
  return (
    <div className={classes.container}>
      <CreateStory
        key={props.user.username}
        user={{
          story: props.user.story,
          name: props.user.username,
        }}
      />
      {props.stories.map((story) => {
        return (
          <Story
            key={story.id}
            user={{
              story: story.story,
              name: story.name,
            }}
          />
        );
      })}
    </div>
  );
};

export default StorySection;
