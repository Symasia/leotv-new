import React, { useState, useEffect } from "react";
import { useStateContext } from "../../../contexts/Context.jsx";
import NewsItem from "./NewsItem.jsx";
import Preloader from "../../layouts/Preloader.jsx";
import "../nav/NewsNav.css";
import NewsSearch from "../nav/NewsSearch.jsx";
import { FaSearch } from "react-icons/fa";
import "./NewsList.css";

const NewsList = () => {
  //eslint-disable-next-line
  const [{ news: newsPosts }, dispatch] = useStateContext();
  const [posts, setPosts] = useState({ hasSearched: false, data: [] });

  useEffect(() => {
    if (newsPosts.hasLoaded)
      setPosts({ hasSearched: false, data: newsPosts.data });
  }, [newsPosts]);

  const searchPosts = query => {
    const filteredPosts = posts.data.filter(post =>
      (post.title + post.content).toLowerCase().includes(query)
    );
    setPosts({ data: filteredPosts, hasSearched: true });
  };

  const cancelSearch = () => {
    setPosts({ hasSearched: false, data: newsPosts.data });
  };

  const newsList =
    posts.data.length > 0
      ? posts.data.map(({id, img, title, content }) => (
          <NewsItem key={id} id={id} title={title} content={content} img={img} />
        ))
      : <Preloader color="black"/>;

  return (
    <div className="news-list">
      <div className="news-navbar">
        <h4>News Feed</h4>
        <div className="search">
          <FaSearch className="icon" /> <NewsSearch searchPosts={searchPosts} />
        </div>
      </div>
      {posts.hasSearched && (
        <div className="search" style={{ paddingTop: "20px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3 style={{ marginRight: "10px" }}>Search Results</h3>
            <button onClick={cancelSearch} data-type="dark">
              Cancel Search
            </button>
          </div>
        </div>
      )}
      <div className="posts">{newsList}</div>
    </div>
  );
};

export default NewsList;
