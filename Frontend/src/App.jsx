import React from 'react'
import Router from './routers/Router'
import Navbar from './controllers/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Router/>
    </div>
  )
}

export default App
