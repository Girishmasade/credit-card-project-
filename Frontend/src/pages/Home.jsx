import React from 'react'
import HeroSection from '../controllers/HeroSection'
import Issuers from './Issuers'
import CreditCardHomePage from '../controllers/CreditCardHomePage'
import Categories from './Categories'
import WhyWeUse from '../controllers/CreditCardInfo'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Issuers/>
      <CreditCardHomePage/>
      <Categories/>
      <WhyWeUse/>
    </div>
  )
}

export default Home
