import React from 'react'
import Router from './routers/Router'
import Navbar from './controllers/Navbar'
import Footer from './controllers/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Router/>
      <Footer/>
    </div>
  )
}

export default App
