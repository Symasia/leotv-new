import React from "react";

const AddNewsPost = () => {
  return (
    <div className="add-news">
      <h1>Add a news post</h1>
      <form>
        <label htmlFor>Title</label>
        <input type="text" />
        <label htmlFor="">Content</label>
        <textarea name="" id=""></textarea>
        <label htmlFor="">Image</label>
        <input type="text" />
        <label htmlFor="">Tags</label>
    <input type="text" />
        <button data-type="light"></button>
      </form>
    </div>
  );
};

export default AddNewsPost;
