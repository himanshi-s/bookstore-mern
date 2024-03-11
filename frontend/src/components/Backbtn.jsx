import React from 'react'
import { BsArrow90DegLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Backbtn = ({destination = '/'}) => {
  return (
    <div>
        <Link to={destination}><BsArrow90DegLeft/></Link>
    </div>
  )
}

export default Backbtn