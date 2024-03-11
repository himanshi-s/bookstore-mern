import React, {useState,useEffect} from 'react'
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md'

const Home = () => {
  const [books,setbooks] =useState([]);
  const [loading,setisloading] =useState(false);

  useEffect(() => {

    setisloading(true)
    axios.get('http://localhost:5555/books')
    .then((res)=>{
      setbooks(res.data.data);
      setisloading(false);
    })
    .catch((err)=>{
      console.log(err);
      setisloading(false);
    })
    
  }, [])
  
  return (
    <div className='p-4'>
      <h1 className="flex justify-between items-center">
        <h1 className="text-3xl my-8">books list</h1>
        <Link to={`/books/create`}>
          <MdOutlineAddBox />
        </Link>
      </h1>
    
    {loading?(<Spinner/>):(
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th>no</th>
            <th>title</th>
            <th>author</th>
            <th>publish year</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book,idx)=>{
            return (
            <tr key={book._id}>
              <td>{idx+1}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publishYear}</td>
              <td>
                <div className="border">
                  <Link to={`/books/${book._id}`}><BsInfoCircle/></Link>
                  <Link to={`/books/edit/${book._id}`}><AiOutlineEdit/></Link>
                  <Link to={`/books/delete/${book._id}`}><MdOutlineDelete/></Link>
                </div>
              </td>
            </tr>)
          })}
        </tbody>
        </table>
      )
    }
    </div>
  )
}

export default Home