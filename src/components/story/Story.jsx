import classes from "./Story.module.css";

const Story = (props) => {
  const image = `/api/user/story/${props.story._id}`;
  
  return (
    <div className={classes.story}>
      <img src={image} alt="Story" />
      <span>{props.story.username.toUpperCase()}</span>
    </div>
  );
};

export default Story;
