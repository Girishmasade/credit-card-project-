import React from 'react'
import HeroSection from '../controllers/HeroSection'
import Issuers from './Issuers'
import CardItem from '../controllers/cardItem'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Issuers/>
    </div>
  )
}

export default Home
