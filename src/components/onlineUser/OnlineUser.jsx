import classes from "./OnlineUser.module.css";

export const OnlineUser = (props) => {
  return (
    <div className={classes.user}>
      <div className={classes.userInfo}>
        <img src={props.user.img} alt="" />
        <div className={classes.online}></div>
        <span>{props.user.name}</span>
      </div>
    </div>
  );
};

export default OnlineUser;
