import classes from "./ProfileSection.module.css";
import { Link } from "react-router-dom";
import Button from '../button/Button';
import {
  FacebookTwoTone,
  Instagram,
  Twitter,
  LinkedIn,
  Pinterest,
  Place,
  EmailOutlined,
  MoreVertOutlined
} from '@mui/icons-material';

const ProfileSection = (props) => {
  return (
    <section className={classes.profileSection}>
      <div className={classes.coverPicture}>
        <img
          src="https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0"
          alt="CoverPicture"
        />
      </div>
      <img
        className={classes.profilePicture}
        src="https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0"
        alt="profilePicture"
      />
      <div className={classes.about}>
        <div className={classes.left}>
          <Link className={classes.icons}>
            <FacebookTwoTone />
          </Link>
          <Link className={classes.icons}>
            <Instagram />
          </Link>
          <Link className={classes.icons}>
            <Twitter />
          </Link>
          <Link className={classes.icons}>
            <LinkedIn />
          </Link>
          <Link className={classes.icons}>
            <Pinterest />
          </Link>
        </div>
        <div className={classes.center}>
          <span className={classes.username}>Adil Ahamad</span>
          <Button title="Follow" />
        </div>
        <div className={classes.right}>
          <Link className={classes.icons}>
            <div className={classes.location}>
              <Place />
              <span>India</span>
            </div>
          </Link>
          <Link className={classes.icons}>
            <EmailOutlined />
          </Link>
          <Link className={classes.icons}>
            <MoreVertOutlined />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
