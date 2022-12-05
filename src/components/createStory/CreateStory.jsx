import classes from "./CreateStory.module.css";

const CreateStory = (props) => {
  return (
    <div className={classes.createStory}>
      <img
        src={props.user.story}
        alt="CreateStory"
      />
      <span>{props.user.name}</span>
      <div className={classes.add}>+</div>
    </div>
  );
};

export default CreateStory;
