import classes from "./Story.module.css";

const Story = (props) => {
  return (
    <div className={classes.story}>
      <img
        src={props.user.story}
        alt="Story"
      />
      <span>{props.user.name}</span>
    </div>
  );
};

export default Story;
