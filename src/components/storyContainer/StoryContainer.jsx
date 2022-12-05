import classes from './StoryContainer.module.css';

const StoryContainer = (props) => {
  return (
    <div className={classes.storyContainer}>
      {props.children}
    </div>
  )
}

export default StoryContainer;