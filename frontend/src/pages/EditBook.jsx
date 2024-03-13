import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {

  const {id} = useParams();
  // alert(id)
  const [title,usetitle] = useState('xyz')
  const [author,useauthor] = useState('')
  const [pyear,usepyear] = useState(2002);
  const navigate = useNavigate();

  const editBook = () => {
    const data = {
      title,
      author,
      publishYear: pyear
  }
  console.log(data);
    axios.put(`http://localhost:5555/books/${id}`,data)
    .then((res)=>{
      console.log('sdhjfjas');
      navigate('/');
    })
    .catch((err)=>{
      alert(`error - ${err} `);
    })
  }

  return (
    <div>
      <div className='flex-column center justify-content'>
        <h2>title</h2>
        <label htmlFor="title"></label>
        <input value={title} required onChange={(e)=>usetitle(e.target.value)} className='border-2' type="text" name="title" id="title" />
        <h2>author</h2>
        <label htmlFor="author"></label>
        <input required value={author} onChange={(e)=>useauthor(e.target.value)} className='border-4' type="text" name="author" id="author" />
        <h2>publish Year</h2>
        <label htmlFor="publishyear"></label>
        <input required value={pyear} onChange={(e)=>usepyear(e.target.value)} className='border-2' type="number" name="publishyear" id="publishyear" />
<br />
        <button type="button" onClick={editBook}>edit book</button>
      
      </div>
      
    </div>
  )
}

export default EditBook