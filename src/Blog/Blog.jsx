/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import NavBarBlog from './NavBarBlog';
import style from './Blog.module.css';
import { BlogModal } from './BlogModal';
import {
  collection,
  addDoc,
  getDocs,
  // onSnapshot,
  doc,
  updateDoc,
  query,
  where,
} from '../Firebase/firebase';
import { db } from '../Firebase/firebaseconfig';
import iDelete from '../img/icon-delete.svg';
import iEdit from '../img/icon-lapiz.svg';
import { ModalDelete } from './ModalDelete';
// eslint-disable-next-line react/prop-types
export function Blog({ isAuth }) {
  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  // const [refreshData, setRefreshData] = useState(false);

  const [blogs, setBlogs] = useState([]);
  const [currentId, setCurrentId] = useState('');

  const addOrEditBlog = async (values) => {
    const userId = isAuth.uid;
    const date = new Date().toDateString();
    const newValues = { ...values, userId };
    newValues.date = date;

    if (currentId === '') {
      await addDoc(collection(db, 'blogs'), newValues);
    } else {
      await updateDoc(doc(db, 'blogs', currentId), newValues);
    }
    setCurrentId('');
  };

  const displayName = isAuth.displayName.toUpperCase();
  const userId = isAuth.uid;

  const getBlogs = async (uid) => {
    const q = query(collection(db, 'blogs'), where('userId', '==', uid));
    const querySnapshot = await getDocs(q);
    const docs = [];
    setTimeout(() => {
      querySnapshot.forEach((docE) => {
        docs.push({ ...docE.data(), id: docE.id });
        setBlogs(docs);
      });
    }, 100);
  };

  useEffect(() => {
    getBlogs(userId);
  });
  // console.log(refreshData);

  return (
    <section className={style.viewBlog}>
      <NavBarBlog />
      <section className={style.blog}>
        <div className="container">
          <ul>
            <p className={style.name}>
              WELCOME!! {displayName}
            </p>
          </ul>
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
              <p className={style.date}>{blog.date}</p>
              <div className={style.messageNote}>
                {blog.message}
              </div>
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
