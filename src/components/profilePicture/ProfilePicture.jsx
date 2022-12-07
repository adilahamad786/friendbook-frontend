import classes from './ProfilePicture.module.css';

const ProfilePicture = (props) => {
  return (
    <img className={classes.profile} src={props.image} alt="ProfilePicture" />
  );
}

export default ProfilePicture;
