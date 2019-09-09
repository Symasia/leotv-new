import React from "react";
import {Link} from "react-router-dom";

const NewsItem = ({id, title, img, content }) => {
  return (
    <div
    key={id}
      className="news-item"
      style={{
        background: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="wrapper">
        <h2><Link to={`/news/${id}`}> {title}</Link></h2>
        <div className="meta-info">
          <p>{content.substring(0, 100)}...</p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
