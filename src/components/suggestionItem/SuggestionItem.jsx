import classes from "./SuggestionItem.module.css";
import UserItem from "../userItem/UserItem";
import FollowButton from "../followButton/FollowButton";

const SuggestionItem = (props) => {
  return (
    <div className={classes.container}>
      <UserItem user={props.user}/>
      <FollowButton userId={props.user._id} />
    </div>
  );
};

export default SuggestionItem;