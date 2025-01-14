import React from 'react'
import { Link } from 'react-router-dom'

const CategoriesItem = ({ id, img, title }) => {
  return (
    <div className="container md:mx-auto pt-20">
      <div className="">
      <Link to={`/categories/${id}`}>
      <div className="flex flex-col gap-2 border-4 border-black md:w-[300px] mx-auto rounded-md border-b-8">
      <img src={img} alt="" className='mx-auto md:w-40 border border-black m-3 rounded-md'/>
      <h1 className='text-center font-semibold'>{title}</h1>
      </div>
      </Link>
      </div>
    </div>
  )
}

export default CategoriesItem
