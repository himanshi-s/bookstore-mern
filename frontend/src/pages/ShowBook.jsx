import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Backbtn from '../components/Backbtn'
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';
const ShowBook = () => {

  const {id} = useParams();

  const [books,setbooks] =useState({});
  const [loading,setisloading] =useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5555/books/${id}`)
    .then( (res)=>{
      setbooks(res.data)
      console.log(res.data);
      setisloading(false)
      return;
    })
    .catch((err)=> console.log(err))
    
  }, [])
  
  return (
    <div>
      <Backbtn/>
      {loading? (<Spinner/>):(
        <div>
          <div>
          No. {books._id}

          </div>
          <div>

          title {books.title}
          </div>
          author {books.author}
        </div>
      )}
    </div>
  )
}

export default ShowBook