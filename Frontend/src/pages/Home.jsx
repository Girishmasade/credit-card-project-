import React from 'react'
import HeroSection from '../controllers/HeroSection'
import Issuers from './Issuers'
import CardItem from '../controllers/cardItem'
import CreditCard from './CreditCard'
import CreditCardHomePage from '../controllers/CreditCardHomePage'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Issuers/>
      <CreditCardHomePage/>
    </div>
  )
}

export default Home
