import classes from './ProfileOptions.module.css';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';
import useHttp from '../../hooks/useHttp';
import Cookies from 'js-cookie'

const ProfileOptions = () => {
  const { setLogedOut } = useContext(AuthContext);
  const { sendRequest } = useHttp();
  const token = Cookies.get('token');

  const onLogoutHandler = () => {
    sendRequest({ 
      url : '/api/user/logout',
      method : "POST",
      headers : {
      "Content-Type" : "application/json",
      "Authorization" : token
      }
    });

    setLogedOut();
  }

  return (
    <div className={classes.profileOptions}>
      <Link to='/profile/Adil'  className={classes.profileOptionsLink} ><button className={classes.profileOptionButton}>Profile</button></Link>
      <Link to='/profile/update'  className={classes.profileOptionsLink} ><button className={classes.profileOptionButton}>Update</button></Link>
      <Link to='/login' onClick={onLogoutHandler} className={classes.profileOptionsLink} ><button className={`${classes.profileOptionButton} ${classes.logoutButton}`}>Logout</button></Link>
    </div>
  );
}

export default ProfileOptions;