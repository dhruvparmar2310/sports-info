import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import DetailedPage from './components/DetailedPage'

function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detailed-page' element={<DetailedPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
