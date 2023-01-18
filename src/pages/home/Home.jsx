import classes from "./Home.module.css";
import StorySection from "../../components/storySection/StorySection";
import PostSection from "../../components/postSection/PostSection";
import { useContext } from "react";
import ShowContext from "../../context/ShowContext";

const Home = () => {
  const { show } = useContext(ShowContext);

  return (
    <section className={`${classes.container} ${ show ? classes.hide : ''}`}>
      <StorySection />
      <PostSection />
    </section>
  );
};

export default Home;
