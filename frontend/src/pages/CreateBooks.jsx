import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateBooks = () => {
  const [title,usetitle] = useState('xyz')
  const [author,useauthor] = useState('')
  const [pyear,usepyear] = useState(2002);
  const navigate = useNavigate();

  const saveBook = () => {
    const data = {
      title,
      author,
      publishYear: pyear
  }
    axios.post('http://localhost:5555/books/create',data)
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
        <button type="button" onClick={()=>saveBook()}>save book</button>
      
      </div>
      
    </div>
  )
}

export default CreateBooks