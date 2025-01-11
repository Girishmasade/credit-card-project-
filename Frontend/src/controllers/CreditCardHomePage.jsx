import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link} from 'react-router-dom'
import CreditCardDetail from './CreditCardItem'


const CreditCardHomePage = () => {

      const {creditCardData} = useContext(ShopContext)
      const [creditCardItems, setCreditCardItems] = useState([])
    
      useEffect(() => {
       setCreditCardItems(creditCardData.slice(0, 3))
      }, creditCardData)
      

  return (
     <div className='border-black border-b-8 pb-10'>
        <div className="container mx-auto md:pt-10 pt-10 min-h-screen p-5 md:p-1">
            <div className="text-center border-2 border-black border-b-4 rounded-md p-2 shadow-sm shadow-black max-w-[700px] mx-auto font-medium">
                <h1 className="md:text-4xl font-semibold">Most popular credit cards</h1>
            </div>
            <div className="grid md:grid-cols-3 gap-14 pt-10 sm:grid-row">
            {
              creditCardItems.map((item, index) => (
              <CreditCardDetail key={index} title={item.title} id={item.id} img={item.img} rating={item.rating} p1={item.p1} p2={item.p2} p3={item.p3}/>
              ))
            }
            </div>
        </div>
        <div className="flex justify-center items-center pt-10 pb-4">
        <Link to={'/card'}><button className='border border-black p-1 rounded-md border-b-8 text-xl bg-yellow-500 hover:bg-yellow-400'>View All</button></Link> 
        </div>
    </div>
  )
}

export default CreditCardHomePage
