/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import { NavBarBlog } from './NavBarBlog';
import style from './Blog.module.css';
import { BlogModal } from './BlogModal';
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
} from '../Firebase/firebase';
import { db } from '../Firebase/firebaseconfig';
import iDelete from '../img/icon-delete.svg';
import iEdit from '../img/icon-lapiz.svg';
import { ModalDelete } from './ModalDelete';

export function Blog() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

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

  const getBlogs = async () => {
    onSnapshot(collection(db, 'blogs'), (querySnapshot) => {
      const docs = [];
      // eslint-disable-next-line no-shadow
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setBlogs(docs);
    });
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <section className={style.viewBlog}>
      <NavBarBlog />
      <section className={style.blog}>
        <div className="container">
          <button
            type="button"
            className={style.createBlog}
            onClick={() => setOpenModal(true)}
          >
            CREATE A NOTE
          </button>
        </div>
        <section className={style.allBlogs}>
          {blogs.map((blog) => (
            <div className={style.cardBlogs} key={blog.id}>
              <h4 className={style.titleBlogNote}>{blog.tittle}</h4>
              <p className={style.messageNote}>
                {blog.message}
              </p>
              <div className={style.btns}>
                <button
                  type="button"
                  className={style.iconDelete}
                  onClick={() => {
                    setOpenModalDelete(true);
                    setCurrentId(blog.id);
                  }}
                >
                  <img src={iDelete} alt="icon-delete" />
                </button>
                <button
                  type="button"
                  className={style.iconEdit}
                  onClick={() => {
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
      <ModalDelete
        openModalDelete={openModalDelete}
        closeModalDelete={() => setOpenModalDelete(false)}
        currentId={currentId}
      />
    </section>
  );
}
