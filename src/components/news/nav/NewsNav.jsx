import React from "react";
import "./NewsNav.css";
import NewsSearch from "./NewsSearch.jsx";
import { FaSearch } from "react-icons/fa";

const NewsNav = () => {
  return (
      <div className="news-navbar">
        <h4>News Feed</h4>
        <div className="search">
          <FaSearch className="icon" /> <NewsSearch />
        </div>
      </div>
  );
};

export default NewsNav;
