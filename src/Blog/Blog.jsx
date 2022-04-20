/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import { NavBarBlog } from './NavBarBlog';
import './Blog.css';
import { BlogModal } from './BlogModal';
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from '../Firebase/firebase';
import { db } from '../Firebase/firebaseconfig';
import iDelete from '../img/icon-delete.svg';
import iEdit from '../img/icon-lapiz.svg';
// import { saveData } from '../Firebase/firestore';

export function Blog() {
  const [openModal, setOpenModal] = useState(false);

  const [blogs, setBlogs] = useState([]);
  const [currentId, setCurrentId] = useState('');

  const addOrEditBlog = async (values) => {
    if (currentId === '') {
      await addDoc(collection(db, 'blogs'), values);
    } else {
      await updateDoc(doc(db, 'blogs', currentId), values);
    }
    setCurrentId('');
  };

  const onDeleteBlog = async (id) => {
    if (window.confirm('are you sure want to delete this note')) {
      await deleteDoc(doc(db, 'blogs', id));
    }
  };
  console.log(blogs);

  const getBlogs = async () => {
    console.log('entreeeeee');
    onSnapshot(collection(db, 'blogs'), (querySnapshot) => {
      const docs = [];
      // eslint-disable-next-line no-shadow
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
      setBlogs(docs);
    });
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <section className="view-blog">
      <NavBarBlog />
      <section className="blog">
        <div className="container">
          <button
            type="button"
            className="create-blog"
            onClick={() => setOpenModal(true)}
          >
            CREATE A BLOG
          </button>
        </div>
        <section className="all-blogs">
          {blogs.map((blog) => (
            <div className="card-blogs" key={blog.id}>
              <h4 className="title-blog-note">{blog.tittle}</h4>
              <p className="message-note">
                {blog.message}
              </p>
              <div className="btns">
                <button
                  type="button"
                  className="icon-delete"
                  onClick={() => onDeleteBlog(blog.id)}
                >
                  <img src={iDelete} alt="icon-delete" />
                </button>
                <button
                  type="button"
                  className="icon-edit"
                  onClick={function () {
                    setOpenModal(true);
                    setCurrentId(blog.id);
                  }}
                >
                  <img src={iEdit} alt="icon-edit" />
                </button>
              </div>
            </div>
          ))}
        </section>
      </section>
      <BlogModal
        currentId={currentId}
        blogs={blogs}
        addOrEditBlog={addOrEditBlog}
        openModal={openModal}
        closeModal={() => setOpenModal(false)}
      />
    </section>
  );
}
