import classes from "./Navbar.module.css";

import {
  HomeOutlined,
  DarkModeOutlined,
  WbSunnyOutlined,
  NotificationsOutlined,
  EmailOutlined,
  GridViewOutlined,
  PersonOutlined,
  SearchOutlined
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.left}>
        <Link className={classes.logo}>
          <span>Friendbook</span>
        </Link>
        <HomeOutlined />
        <DarkModeOutlined />
        <GridViewOutlined />
        <div className={classes.search}>
          <SearchOutlined />
          <input type='search' placeholder="Search..."/>
        </div>
      </div>
      <div className={classes.right}>
        <PersonOutlined />
        <EmailOutlined />
        <NotificationsOutlined />
        <div className={classes.profile}>
          <img src="https://zultimate.com/wp-content/uploads/2019/12/default-profile-300x300.png" alt="Profile" />
          <span>Adil Ahamad</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
