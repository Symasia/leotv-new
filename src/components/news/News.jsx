import React from "react";
import NewsList from "./list/NewsList.jsx";
import "./News.css";
import intro_img from "../../assets/home_bg_2.png";

const News = () => {
  return (
    <div className="News">
      <div className="intro">
        <img src={intro_img} alt="" />
        <div className="content" style={{ marginTop: 0 }}>
          <h2>
            LeoTV
            <span
              style={{
                background: "white",
                color: "black",
                padding: "5px",
                marginLeft: "5px"
              }}
            >
              News
            </span>
          </h2>
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
          <button data-type="light">Browse</button>
        </div>
      </div>
      <NewsList />
    </div>
  );
};

export default News;
