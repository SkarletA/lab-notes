import React, { useState } from "react";
import { NavBarBlog } from "./NavBarBlog";
import './Blog.css';
import { BlogModal } from "./BlogModal";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../Firebase/firebaseconfig";
// import { saveData } from "../Firebase/firestore";

export function Blog() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className="view-blog">
      <NavBarBlog/>
      <section className="blog">
        <div className="container">
          <button 
          className="create-blog"
          onClick={()=> setOpenModal(true)}
          >CREATE A BLOG</button>
        </div>
      </section>
      <BlogModal openModal={openModal} closeModal={()=> setOpenModal(false)}/>
    </section>
  );
}