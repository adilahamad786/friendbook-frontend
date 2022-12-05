import classes from "./FollowUser.module.css";
import RightbarButton from "../rightbarButton/RightbarButton";

const FollowUser = (props) => {
  return (
    <div className={classes.user}>
      <div className={classes.userInfo}>
        <img src={props.user.img} alt="" />
        <span>{props.user.name}</span>
      </div>
      <RightbarButton title="Follow" />
    </div>
  );
};

export default FollowUser;
