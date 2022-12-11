import classes from "./CreatePostSection.module.css";
import ProfilePicture from "../profilePicture/ProfilePicture";
import { Send, SendOutlined, SendRounded, SendSharp, Share, ShareSharp, SubdirectoryArrowLeftOutlined } from "@mui/icons-material";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useState } from "react";

const CreatePostSection = () => {

    const [file, setFile] = useState();

  const user = {
    id: 1,
    username: "Adil Ahamad",
    profilePicture:
      "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0",
    story:
      "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0",
  };

  return (
    <div className={classes.container}>
      <div className={classes.userInfo}>
        <ProfilePicture image={user.profilePicture} />
        <span>What's on your mind Adil Ahamad?</span>
      </div>
      {
        file && (
            <div className={classes.preview}>
                <img src={URL.createObjectURL(file)} alt="Preview" />
            </div>
        )
      }
      <form className={classes.postForm}>
        <input type="text" placeholder="Write here..." name="postForm" />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} name='img' id="img" />
        <button>
          <SendRounded />
        </button>
      </form>
      <div className={classes.options}>
        <label htmlFor="img" className={classes.option}>
          <div className={classes.icon}>
            <img src={Image} alt="AddImage" />
          </div>
          <span>Add Image</span>
        </label>
        <div htmlFor='img' className={classes.option}>
          <div className={classes.icon}>
            <img src={Map} alt="AddImage" />
          </div>
          <span>Add Place</span>
        </div>
        <div className={classes.option}>
          <div className={classes.icon}>
            <img src={Friend} alt="AddImage" />
          </div>
          <span>Tag Friends</span>
        </div>
      </div>
    </div>
  );
};

export default CreatePostSection;
