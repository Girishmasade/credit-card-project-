import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import CreditCardDetail from '../controllers/CreditCardItem'

const CreditCard = () => {

  const {creditCardData} = useContext(ShopContext)
  const [creditCardItems, setCreditCardItems] = useState([])

  useEffect(() => {
   setCreditCardItems(creditCardData)
  }, creditCardData)
  

  return (
    <div className='border-b-8 border-black'>
        <div className="min-h-screen container mx-auto pt-10">
            <div className=" border-black border-b-8 p-3 items-center text-center md:w-[800px] rounded-md mx-auto shadow-lg shadow-gray-600">
                <h1 className="md:text-4xl font-semibold">Most popular credit cards</h1>
            </div>
            <div className="grid grid-cols-3 gap-14 pt-10">
            {
              creditCardItems.map((item, index) => (
              <CreditCardDetail key={index} title={item.title} id={item.id} img={item.img} rating={item.rating} p1={item.p1} p2={item.p2} p3={item.p3}/>
              ))
            }
            </div>
        </div>
    </div>
  )
}



export default CreditCard
