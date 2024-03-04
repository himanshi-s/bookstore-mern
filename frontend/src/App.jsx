import React from 'react'
import Home from './pages/Home'
import CreateBook from './pages/CreateBooks'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/books/create' element={<CreateBook/>} />
    </Routes>
  )
}

export default App