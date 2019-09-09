import React, { useState } from "react";

const NewsSearch = ({searchPosts}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = event => {
    const { value: searchTerms } = event.target;
    if (searchTerms.length > 120) return;
    setSearchQuery(searchTerms);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery === "") return;
    searchPosts(searchQuery.toLowerCase());
    setSearchQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" value={searchQuery} placeholder="Search"/>
    </form>
  );
};

export default NewsSearch;
