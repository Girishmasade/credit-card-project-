import React from 'react'
import HeroSection from '../controllers/HeroSection'
import Issuers from './Issuers'
import CardItem from '../controllers/cardItem'
import CreditCard from './CreditCard'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Issuers/>
      <CreditCard/>
    </div>
  )
}

export default Home
