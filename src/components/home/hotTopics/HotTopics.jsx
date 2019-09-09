import React from "react";
import NewsItem from "../../news/list/NewsItem.jsx";
import Preloader from "../../layouts/Preloader.jsx";
import { useStateContext } from "../../../contexts/Context.jsx";
import "./HotTopics.css";

const HotTopics = () => {
    //eslint-disable-next-line
  const [{ news }, dispatch] = useStateContext();
  const hotNews =
    news.data.length > 0
      ? news.data.sort((prev, next) => next.views - prev.views).slice(0, 1 /*, 3*/).map(({id, title, content, img }) => (
          <NewsItem key={id} id={id} title={title} content={content} img={img} />
        ))
      : <Preloader color="#ffb347" fontColor="white"/>;

  return (
    <section className="hot-topics">
      <h2>Hot Topics</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
        veniam quis eaque et dolor sunt reprehenderit explicabo, dolorum
        nesciunt dolorem quaerat, ut sint consectetur omnis nulla quas non
        eligendi! Omnis?
      </p>
      <div className="wrapper">
      {hotNews}
      </div>
    </section>
  );
};

export default HotTopics;
