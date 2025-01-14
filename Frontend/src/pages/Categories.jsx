import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import CategoriesItem from '../controllers/CategoriesItem'

const Categories = () => {

  const {cardData} = useContext(ShopContext)
  const [productData, setProductData] = useState([])


  useEffect(() => {
  setProductData(cardData)
  }, [cardData])
  

    return (
    <div className='border-black border-b-8 pb-10'>
      <div className="container mx-auto md:pt-10 pt-10 min-h-screen p-5 md:p-1">
        <div className="md:text-4xl text-center border-2 border-black border-b-4 rounded-md p-2 shadow-sm shadow-black md:w-[600px] mx-auto font-medium">
          <h1 className='md:text-4xl font-semibold'>Credit card categories</h1>
        </div>

         <div className="grid md:grid-cols-3 gap-12 sm:grid-rows-1 md:pt-20">
          {
            productData.map((item, index) => (
              <CategoriesItem key={index} id={item.id} img={item.img} title={item.title}/>
            ))
          }
        </div> 
       
      </div>
    </div>
  )
}

export default Categories
