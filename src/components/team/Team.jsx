import React from "react";
import hero_img from "../../assets/868.png";
import TeamList from "./TeamList.jsx";
import "./Team.css";

const Team = () => {
  return (
    <div className="Team">
      <div className="intro">
      <img src={hero_img} alt="" />
        <div className="content">
          <h2>Our Team</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, aliquid hic voluptatum quisquam dolores enim earum
            facere laudantium molestiae ipsam quia recusandae corporis impedit
            architecto doloribus atque, ad alias sunt? Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Aspernatur quasi totam tempora
            magni dicta, deserunt officia facilis molestias laudantium quibusdam
            aut beatae dolore nostrum reprehenderit. Velit aliquam quam tempore
            sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            fuga odio, aliquam suscipit iste eligendi delectus blanditiis
            soluta! Repudiandae quibusdam officia rem error dolorem beatae
            maiores dolores a alias ex!
          </p>
          <button data-type="light"><a href="#member-list">Member List</a></button>
        </div>
      </div>
      <TeamList/>
    </div>
  );
};

export default Team;
