import classes from "./Story.module.css";

const Story = (props) => {
  const {username, storyUrl} = props.story;
  
  return (
    <div className={classes.story}>
      <img src={storyUrl} alt="Story" />
      <span>{username.toUpperCase()}</span>
    </div>
  );
};

export default Story;
