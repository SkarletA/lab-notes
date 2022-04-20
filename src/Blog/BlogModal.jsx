import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { updateDoc, doc } from "../Firebase/firebase";
import { db } from "../Firebase/firebaseconfig";
import './BlogModal.css'

export function BlogModal({openModal, closeModal, addOrEditBlog, currentId, blogs}) {
  const navigate = useNavigate();

  const valuesBlogs = {
    tittle: "",
    message: "",
  }

  const [values, setValues] = useState(valuesBlogs);

  const inputChange = (e) => {
    const {name, value} = e.target;
    setValues({...values, [ name ]: value})
  }

  const saveDataBlog = async () => {
    addOrEditBlog(values);
    setValues({...valuesBlogs})
    console.log(values);
  };

  // const updateBlogById = async (id)=> {
  //   const updateNote = blogs.find((blog) => blog.id === currentId);
  //   setValues({...updateNote})
  //   // await updateDoc(doc(db, 'blogs', id), valuesBlogs);
    
  // }
  

  useEffect(()=> {
    if (currentId === "") {
      setValues({...valuesBlogs});
    } else {
      // const test = blogs.find((blog) => blog.id === currentId)
      // setValues({...test})
      //updateBlogById(currentId)
    }
  }, [currentId]);

  if (!openModal) return null

  return (
    <section className="container-popup">
      <div className="container-extern">
        <div className="popup-blog">
        <button className='btn-close-popup'
          onClick={closeModal}
          >X</button>
        <p className="title-note">Create note</p>
        <input className="title-blog"
        type="text" 
        placeholder="Title:"
        name="title"
        value={values.tittle}
        onChange={inputChange}
        />
        <textarea 
        className="blog-message" 
        placeholder="Add a note: "
        name="message"
        value={values.message}
        onChange={inputChange}></textarea>
        <button 
        className="btn-save-blog"
        onClick={saveDataBlog}
        >Save</button>
        </div>
      </div>
    </section>
  );
}