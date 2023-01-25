import classes from "./Story.module.css";

const Story = (props) => {
  const {username, storyLink} = props.story;
  
  return (
    <div className={classes.story}>
      <img src={storyLink} alt="Story" />
      <span>{username.toUpperCase()}</span>
    </div>
  );
};

export default Story;
