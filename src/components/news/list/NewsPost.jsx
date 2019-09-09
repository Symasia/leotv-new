import React, { useState, useEffect } from "react";
import { FaUser, FaCalendarAlt, FaEye, FaTags } from "react-icons/fa";
import { useStateContext } from "../../../contexts/Context.jsx";
import "./NewsList.css";

const NewsPost = props => {
  const [postData, setPostData] = useState({});
  const { post_id } = props.match.params;
  //eslint-disable-next-line
  const [{ news: newsPosts }, dispatch] = useStateContext();

  useEffect(() => {
    const post_data = newsPosts.data.find(post => post.id === post_id);
    if(!post_data) {
      return props.history.push("/404")
    }
    setPostData({ ...post_data });
  }, [newsPosts, post_id, props]);

  const newsPost = Object.keys(postData).length ? (
    <React.Fragment>
      <h1>{postData.title}</h1>
      <div className="stats-wrapper">
        <span>
          <FaCalendarAlt className="icon" />{" "}
          {postData.date
            .toDate()
            .toDateString()
            .substring(4)}
        </span>
        <span>
          <FaEye className="icon" /> {postData.views}
        </span>
      </div>

      <img src={postData.img} alt="" />
      <div className="content">
        <p style={{color: 'white'}}>{postData.content}</p>
        <div className="meta-wrapper">
        <span>
          <FaUser className="icon" /> <strong>Author</strong>: {postData.author}
        </span>
        <span>
          <FaTags className="icon" /> <strong>Tags</strong>: {postData.tags}
        </span>
        </div>
        
      </div>
    </React.Fragment>
  ) : (
    "Loading..."
  );
  return <div className="news-post">{newsPost}</div>;
};

export default NewsPost;
