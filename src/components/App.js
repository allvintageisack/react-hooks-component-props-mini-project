import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import Header from "./Header.js";
import About from "./About.js";

const App = () => {
  const { name, image, about, posts } = blogData;

  return (
    <div>
      <Header name={name} />
      <About image={image} about={about} />
      <ArticleList articles={posts} />
    </div>
  );
};

export default App;