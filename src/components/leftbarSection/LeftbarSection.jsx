import Friends from '../../assets/1.png';
import Groups from '../../assets/2.png';
import Market from '../../assets/3.png';
import Watch from '../../assets/4.png';
import Memories from '../../assets/5.png';
import Events from '../../assets/6.png';
import Gaming from '../../assets/7.png';
import Gallery from '../../assets/8.png';
import Videos from '../../assets/9.png';
import Messages from '../../assets/10.png';
import Tutorials from '../../assets/11.png';
import Courses from '../../assets/12.png';
import Fund from '../../assets/13.png';

import classes from './LeftbarSection.module.css'

const LeftbarSection = (props) => {
  return (
    <div className={classes.leftbarSection} >
      <div className={classes.container}>
        <div className={classes.menu}>
          <div className={classes.item}>
            <div className={classes.profilePicture}>
              <img src={props.user.profilePicture} alt="ProfilePicture" />
            </div>
            <span>{props.user.username}</span>
          </div>
          <div className={classes.item}>
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className={classes.item}>
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className={classes.item}>
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className={classes.item}>
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className={classes.item}>
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr/>
        <span className={classes.title}>Your shortcuts</span>
        <div className={classes.menu}>
          <div className={classes.item}>
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className={classes.item}>
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className={classes.item}>
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className={classes.item}>
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className={classes.item}>
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr/>
        <span className={classes.title}>Others</span>
        <div className={classes.menu}>
          <div className={classes.item}>
            <img src={Fund} alt="" />
            <span>Fundraser</span>
          </div>
          <div className={classes.item}>
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className={classes.item}>
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftbarSection;
