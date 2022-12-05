import classes from './RightbarButton.module.css';

const RightbarButton = (props) => {
  return (
    <button className={classes.btn}>{props.title}</button>
  );
}

export default RightbarButton;
