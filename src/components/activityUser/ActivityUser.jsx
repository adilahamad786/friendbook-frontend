import classes from "./ActivityUser.module.css";

const ActivityUser = (props) => {
  return (
    <div className={classes.user}>
      <div className={classes.userInfo}>
        <img src={props.user.img} alt="ProfilePicture" />
        <p className={classes.message}>
          <span>{props.user.name}</span>
          {props.user.message}
        </p>
      </div>
      <span>{props.user.time}</span>
    </div>
  );
};

export default ActivityUser;
