import classes from './ProfileOptions.module.css';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';

const ProfileOptions = () => {
  const { setLogedOut } = useContext(AuthContext);
  return (
    <div className={classes.profileOptions}>
      <Link to='/profile/Adil'  className={classes.profileOptionsLink} ><button className={classes.profileOptionButton}>Profile</button></Link>
      <Link to='/profile/update'  className={classes.profileOptionsLink} ><button className={classes.profileOptionButton}>Update</button></Link>
      <Link to='/login' onClick={setLogedOut} className={classes.profileOptionsLink} ><button className={`${classes.profileOptionButton} ${classes.logoutButton}`}>Logout</button></Link>
    </div>
  );
}

export default ProfileOptions;