import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { saveData } from "../Firebase/firestore";
import './BlogModal.css'

export function BlogModal({openModal, closeModal}) {
  const navigate = useNavigate();
  
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  
  const saveDataBlog = async () => {
    await saveData(message, title);
    navigate('/blog');

  };
  if (!openModal) return null
  return (
    <section className="container-popup">
      <div className="popup-blog">
        <button className='btn-close-popup'
          onClick={closeModal}
          >X</button>
        <p className="title-note">Create note</p>
        <input className="title-blog"
        type="text" 
        placeholder="Title:"
        onChange={(e)=> setTitle(e.target.value)}
        />
        <textarea 
        className="blog-message" 
        placeholder="Add a note: "
        onChange={(e) => setMessage(e.target.value)}></textarea>
        <button 
        className="btn-save-blog"
        onClick={saveDataBlog}
        >Save</button>
      </div>
    </section>
  );
}