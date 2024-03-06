import React, {useState,useEffect} from 'react'
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";

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
    <div>Home</div>
  )
}

export default Home