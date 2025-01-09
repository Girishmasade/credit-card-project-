import React, { useContext, useEffect, useState } from 'react'
import CardItem from '../controllers/cardItem'
import { ShopContext } from '../context/ShopContext'

const Issuers = () => {

  const [IssuersData, setIssuersData] = useState([])
  const {issueSubMenu} = useContext(ShopContext)

  useEffect(() => {

    let issueSubMenucpy = issueSubMenu.slice()
    console.log(issueSubMenucpy);
    
    setIssuersData(issueSubMenucpy)
   
  }, [issueSubMenu])
  

  return (
      <div className="border-black border-b-8 pb-10">
    <div className='container mx-auto md:pt-10 pt-10 min-h-screen p-5 md:p-1'>
      <div className="md:text-4xl text-center border-2 border-black border-b-4 rounded-md p-2 shadow-sm shadow-black md:w-[600px] mx-auto font-medium">
      <h1 className="">Top credit card issuers</h1>
      </div>

        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 gap-5 gap-y-6">
            {
                IssuersData.map((item, index) => (
                  <CardItem key={index} id={item.id} title={item.title} img={item.img} />
                ))
            }
        </div>
    </div>
    </div>
  )
}

export default Issuers
