import classes from "./Profile.module.css";
import ProfileSection from "../../components/profileSection/ProfileSection";
import PostSection from "../../components/postSection/PostSection";
import { useContext } from "react";
import ShowContext from "../../context/ShowContext";

const Profile = () => {
  const ShowCtx = useContext(ShowContext);

  const user = {
    id: 1,
    username: "Adil Ahamad",
    profilePicture:
      "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0",
    story:
      "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0",
  };

  const posts = [
    {
      id: 1,
      profilePicture:
        "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0",
      username: "Adil",
      time: "1 mint ago",
      message: "This is my first post i like this post because this is my first post and also create a amazing post for this post.This is my first post i like this post because this is my first post and also create a amazing post for this post.",
      image:
        "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0",
      liked: true,
      toggleCommentButton: false,
      countLikes: 5,
      countComments: 3,
      countShares: 6,
    },
    {
      id: 2,
      profilePicture:
        "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0",
      username: "Adil",
      time: "1 mint ago",
      message: "Liked a post.",
      image:
        "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0",
      liked: false,
      toggleCommentButton: true,
      countLikes: 5,
      countComments: 3,
      countShares: 6,
    },
    {
      id: 3,
      profilePicture:
        "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0",
      username: "Adil",
      time: "1 mint ago",
      message: "Liked a post.",
      image:
        "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0",
      liked: true,
      toggleCommentButton: true,
      countLikes: 5,
      countComments: 3,
      countShares: 6,
    },
  ];

  const comments = [
    {
      id: 1,
      profilePicture:
        "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0",
      name: "Fiza",
      message: "Recently update their profile picture.",
      time: "1 mint ago",
    },
    {
      id: 2,
      profilePicture:
        "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0",
      name: "Adil",
      message: "Liked a post.",
      time: "1 mint ago",
    },
    {
      id: 3,
      profilePicture:
        "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0",
      name: "Danish",
      message: "Comment on your post.",
      time: "1 mint ago",
    },
    {
      id: 4,
      profilePicture:
        "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0",
      name: "Farida Begam",
      message: "Posted.",
      time: "1 mint ago",
    },
    {
      id: 5,
      profilePicture:
        "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0",
      name: "Farida Begam",
      message: "Posted.",
      time: "1 mint ago",
    },
    {
      id: 6,
      profilePicture:
        "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0",
      name: "Farida Begam",
      message: "Posted.",
      time: "1 mint ago",
    },
    {
      id: 7,
      profilePicture:
        "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0",
      name: "Farida Begam",
      message: "Posted.",
      time: "1 mint ago",
    },
  ];

  return (
    <section className={`${classes.container} ${ShowCtx.show ? classes.hide : ''}`}>
      <ProfileSection />
      <PostSection user={user} posts={posts} comments={comments} />
    </section>
  );
};

export default Profile;
