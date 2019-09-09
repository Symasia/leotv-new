import React from "react";
import { useStateContext } from "../../contexts/Context.jsx";
import hero_img from "../../assets/35345.png";
import About from "./about/About.jsx";
import HotTopics from "./hotTopics/HotTopics.jsx";
import "./Home.css";

const Home = () => {
  //eslint-disable-next-line
  const [state, dispatch] = useStateContext();
  return (
    <div className="Home">
      <div className="hero">
        <div className="content">
          <h1>LeoTV</h1>
          <span>BRINGING LEONIANS ISLANDWIDE UNDER ONE ROOF.</span>
          <p>
            The government has its own media publications. Universities and
            schools have their own media units. Most of the organizations in Sri
            Lanka have a media platform to represent themselves. LEO decided to
            follow suit by deploying an islandwide network of multiple
            compositions. This is LEO-TV, home to the largest media experience
            ever for Leonians.
          </p>
          <p>
            Catch us live every last Sunday of any month! All Leonians have an
            equal opportunity to take part in this project, and as such we
            invite any Leonian from any LEO Club to walk with us in this great
            endeavour. Are you a talented, enthusiastic and passionate
            phographer/videographer, presenter,graphic/video editor or a content
            creator? Then LEO-TV will be your haven of opporunities.
          </p>
          <button data-type="light">Join Us</button>
        </div>
        <img src={hero_img} alt="" />
      </div>
      <About />
      <HotTopics newsPosts={state.news}/>
    </div>
  );
};

export default Home;
