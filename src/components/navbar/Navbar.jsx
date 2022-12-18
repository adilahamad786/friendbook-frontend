import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import {
  HomeOutlined,
  DarkModeOutlined,
  WbSunnyOutlined,
  NotificationsOutlined,
  EmailOutlined,
  GridViewOutlined,
  PersonOutlined,
  SearchOutlined,
  Close,
} from "@mui/icons-material";
import ProfileOptions from "../profileOptions/ProfileOptions";
import Backdrop from "../backdrop/Backdrop";
import ShowContext from "../../context/ShowContext";
import SearchResultCart from "../searchResultCart/SearchResultCart";
import useInput from "../../hooks/useInput";

const Navbar = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const { show, setShow } = useContext(ShowContext);
  const [showSearch, setShowSearch] = useState(false);
  const {
    value: searchText,
    isValid: searchTextIsValid,
    setValue: setSearchText,
    setFocus: setSearchTextFieldFocus,
    reset
  } = useInput((value) => value.length > 0);

  const setShowHandler = () => {
    setShowSearch((oldValue) => !oldValue);
    reset();
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.left}>
        <Link to="/" className={classes.logo}>
          <span>Friendbook</span>
        </Link>
        <Link to="/" className={classes.homeIconLink}>
          <HomeOutlined />
        </Link>
        <div className={classes.themeIcon} onClick={changeTheme}>
          {theme ? <DarkModeOutlined /> : <WbSunnyOutlined />}
        </div>
        <form className={classes.search}>
          <SearchOutlined onClick={setShowHandler} />
          <input
            onChange={setSearchText}
            onFocus={setSearchTextFieldFocus}
            value={searchText}
            className={`${showSearch ? classes.searchField : classes.hide}`}
            type="search"
            placeholder="Search..."
          />
        </form>
        { searchTextIsValid && <div className={classes.searchResult}>
          <SearchResultCart searchText={searchText}/>
        </div> }
        { (showSearch || searchTextIsValid) && <Backdrop onClose={setShowHandler} />}
        <div className={classes.menuIcon} onClick={setShow}>
          {show ? <Close /> : <GridViewOutlined />}
        </div>
      </div>
      <div className={classes.right}>
        <PersonOutlined />
        <EmailOutlined />
        <NotificationsOutlined />
        <div onClick={setShow} className={classes.profile}>
          <img
            src="https://zultimate.com/wp-content/uploads/2019/12/default-profile-300x300.png"
            alt="Profile"
          />
          <span>Adil Ahamad</span>
        </div>
        {show && (
          <div className={classes.profileOptionsMenu}>
            <ProfileOptions />
          </div>
        )}
        {show && <Backdrop onClose={setShow} />}
      </div>
    </div>
  );
};

export default Navbar;
