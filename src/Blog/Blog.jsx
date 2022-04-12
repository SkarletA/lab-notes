import React from "react";
import { NavBarBlog } from "./NavBarBlog";
import './Blog.css';

export function Blog() {
  return (
    <section className="view-blog">
      <NavBarBlog/>
      <div className="blog">
        <textarea className="blog-message" placeholder="Add a note:"></textarea>
        <button className="btn-create-blog">+</button>
      </div>
    </section>
  );
}