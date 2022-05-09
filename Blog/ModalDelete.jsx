/* eslint-disable react/prop-types */
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

  if (!openModalDelete) return null;
  return (
    <section className={style.modalDelete}>
      <div className={style.popupDelete}>
        <p className={style.titleDelete}>Are you sure you want to delete this note? </p>
        <div data-testid="btns" className={style.btnsDelete}>
          <button
            id="btnDelete"
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
            name="btn-cancel"
            id="cancel"
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
