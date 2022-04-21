/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { getDoc, doc } from '../Firebase/firebase';
import { db } from '../Firebase/firebaseconfig';
import style from './BlogModal.module.css';

// eslint-disable-next-line react/prop-types
export function BlogModal({
  openModal,
  closeModal,
  addOrEditBlog,
  currentId,
  // blogs,
}) {
  // const navigate = useNavigate();

  const valuesBlogs = {
    tittle: '',
    message: '',
  };

  const [values, setValues] = useState(valuesBlogs);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const saveDataBlog = async () => {
    addOrEditBlog(values);
    setValues({ ...valuesBlogs });
  };

  const getBlogById = async (id) => {
    const docB = await getDoc(doc(db, 'blogs', id));
    setValues({ ...docB.data() });
  };

  useEffect(() => {
    if (currentId === '') {
      setValues({ ...valuesBlogs });
    } else {
      getBlogById(currentId);
    }
  }, [currentId]);

  if (!openModal) return null;

  return (
    <section className={style.containerPopup}>
      <div className={style.containerExtern}>
        <div className={style.popupBlog}>
          <button
            type="button"
            className={style.btnClosePopup}
            onClick={closeModal}
          >
            X
          </button>
          <p className={style.titleNote}>{currentId === '' ? 'Create note' : 'Update note'}</p>
          <input
            className={style.titleBlog}
            type="text"
            placeholder="Title:"
            name="tittle"
            value={values.tittle}
            onChange={inputChange}
          />
          <textarea
            className={style.blogMessage}
            placeholder="Add a note: "
            name="message"
            value={values.message}
            onChange={inputChange}
          />
          <button
            type="button"
            className={style.btnSaveBlog}
            onClick={() => {
              saveDataBlog();
              closeModal();
            }}
          >
            {currentId === '' ? 'Save' : 'Update'}
          </button>
        </div>
      </div>
    </section>
  );
}
