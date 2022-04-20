/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import style from './ModalDelete.module.css';
import {
  deleteDoc,
  doc,
} from '../Firebase/firebase';
import { db } from '../Firebase/firebaseconfig';

export function ModalDelete({ openModalDelete, closeModalDelete, currentId }) {
  const onDeleteBlog = async (id) => {
    await deleteDoc(doc(db, 'blogs', id));
  };
  console.log(currentId);

  if (!openModalDelete) return null;
  return (
    <section className={style.modalDelete}>
      <div className={style.popupDelete}>
        <p className={style.titleDelete}>Are you sure want to delete this note? </p>
        <div className={style.btnsDelete}>
          <button
            type="button"
            className={style.btnDelete}
            onClick={() => {
              onDeleteBlog(currentId);
              closeModalDelete();
            }}
          >
            Delete
          </button>
          <button
            type="button"
            className={style.btnNoDelete}
            onClick={closeModalDelete}
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}
