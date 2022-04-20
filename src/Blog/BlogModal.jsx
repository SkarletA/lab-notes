/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { getDoc, doc } from '../Firebase/firebase';
import { db } from '../Firebase/firebaseconfig';
import './BlogModal.css';

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
    console.log(values);
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
    <section className="container-popup">
      <div className="container-extern">
        <div className="popup-blog">
          <button
            type="button"
            className="btn-close-popup"
            onClick={closeModal}
          >
            X
          </button>
          <p className="title-note">{currentId === '' ? 'Create note' : 'Update note'}</p>
          <input
            className="title-blog"
            type="text"
            placeholder="Title:"
            name="tittle"
            value={values.tittle}
            onChange={inputChange}
          />
          <textarea
            className="blog-message"
            placeholder="Add a note: "
            name="message"
            value={values.message}
            onChange={inputChange}
          />
          <button
            type="button"
            className="btn-save-blog"
            onClick={saveDataBlog}
          >
            {currentId === '' ? 'Save' : 'update'}
          </button>
        </div>
      </div>
    </section>
  );
}
