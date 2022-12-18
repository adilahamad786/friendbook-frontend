import classes from "./ProfileUpdate.module.css";
import { useRef, useState } from "react";
import { FlipCameraIos, SystemUpdateAlt } from "@mui/icons-material";

function ProfileUpdate() {
  const user = {
    id: 1,
    username: "Adil Ahamad",
    profilePicture:
      "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0",
    coverPicture:
      "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0",
    story:
      "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0",
  };

  const username = useRef();
  const email = useRef();
  const location = useRef();
  const facebook = useRef();
  const instagram = useRef();
  const twitter = useRef();
  const linkedin = useRef();
  const pinterest = useRef();
  const [profilePicture, setProfilePicture] = useState(null);
  const [coverPicture, setCoverPicture] = useState(null);

  const submitHandler = (e) => {
    e.preverntDefault();
  };

  return (
    <div className={classes.container}>
      <div className={classes.topSection}>
        <div className={classes.coverPictureChange}>
          <label
            htmlFor="coverPicture"
            className={classes.coverPictureChangeLabel}
          >
            <SystemUpdateAlt className={classes.coverPictureChangeIcon} />
            <span className={classes.coverPictureChangeText}>Change</span>
          </label>
          <img
            src={
              coverPicture
                ? URL.createObjectURL(coverPicture)
                : user.coverPicture
            }
            className={classes.profileCoverImg}
            alt="CoverPicture"
          />
          <input
            style={{ display: "none" }}
            type="file"
            id="coverPicture"
            accept=".png, .jpeg, .jpg"
            onChange={(e) => setCoverPicture(e.target.files[0])}
          />
        </div>
        <div className={classes.profilePictureChange}>
          <label
            htmlFor="profilePicture"
            className={classes.profilePictureUpdateLabel}
          >
            <FlipCameraIos style={{ fontSize: "35px", border: "none" }} />
          </label>
          <img
            src={
              profilePicture
                ? URL.createObjectURL(profilePicture)
                : user.profilePicture
            }
            className={classes.profileUserImg}
            alt="ProfilePicture"
          />
          <input
            style={{ display: "none" }}
            type="file"
            id="profilePicture"
            accept=".png, .jpeg, .jpg"
            onChange={(e) => setProfilePicture(e.target.files[0])}
          />
        </div>
        <span className={classes.UserProfileName}>{user.username}</span>
      </div>
      <div className={classes.formContainer}>
        <form className={classes.form} onSubmit={submitHandler}>
          <h3 className={classes.formTitle}>User information</h3>
          <div className={classes.fieldInputBox}>
            <label htmlFor="username" className={classes.inputLabel}>
              Userame :
            </label>
            <input
              placeholder="Enter your full name"
              id="username"
              ref={username}
              className={classes.formInput}
            />
          </div>
          <div className={classes.fieldInputBox}>
            <label htmlFor="email" className={classes.inputLabel}>
              Email :
            </label>
            <input
              placeholder="Enter your mail address"
              id="email"
              type="email"
              ref={email}
              className={classes.formInput}
            />
          </div>
          <div className={classes.fieldInputBox}>
            <label htmlFor="location" className={classes.inputLabel}>
              Location :
            </label>
            <input
              placeholder="Enter your location"
              id="location"
              type="text"
              ref={location}
              className={classes.formInput}
            />
          </div>
          <div className={classes.fieldInputBox}>
            <label htmlFor="linkedin" className={classes.inputLabel}>
              LinkedIn :
            </label>
            <input
              placeholder="Enter your LinkedIn link"
              id="linkedin"
              type="url"
              ref={linkedin}
              className={classes.formInput}
            />
          </div>
          <div className={classes.fieldInputBox}>
            <label htmlFor="twitter" className={classes.inputLabel}>
              Twitter :
            </label>
            <input
              placeholder="Enter your Twitter link"
              id="twitter"
              type="url"
              ref={twitter}
              className={classes.formInput}
            />
          </div>
          <div className={classes.fieldInputBox}>
            <label htmlFor="facebook" className={classes.inputLabel}>
              Facebook :
            </label>
            <input
              placeholder="Enter your Facebook link"
              id="facebook"
              type="url"
              ref={facebook}
              className={classes.formInput}
            />
          </div>
          <div className={classes.fieldInputBox}>
            <label htmlFor="instagram" className={classes.inputLabel}>
              Instagram :
            </label>
            <input
              placeholder="Enter your Instagram link"
              id="instagram"
              type="url"
              ref={instagram}
              className={classes.formInput}
            />
          </div>
          <div className={classes.fieldInputBox}>
            <label htmlFor="pinterest" className={classes.inputLabel}>
              Pinterest :
            </label>
            <input
              placeholder="Enter your Pinterest link"
              id="pinterest"
              type="url"
              ref={pinterest}
              className={classes.formInput}
            />
          </div>
          <button className={classes.formUpdateButton} type="submit">
            Update Profile
          </button>
        </form>
        <button className={classes.formDiscartButton} type="submit">
          Discart Changes
        </button>
      </div>
    </div>
  );
}

export default ProfileUpdate;
