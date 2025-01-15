import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import BlogItem from '../controllers/BlogItem';

const Blog = () => {
  const { blogData } = useContext(ShopContext); 
  const [productData, setProductData] = useState([]);

  const fetchProductData = () => {
    const blogDataCopy = [...blogData];
    setProductData(blogDataCopy);
  };

  useEffect(() => {
    fetchProductData();
  }, [blogData]);

  return (
    <div className="container md:p-20 p-5">
      <div className="md:text-4xl text-center border-2 border-black border-b-4 rounded-md p-2 shadow-sm shadow-black md:w-[150px] mx-auto font-medium">
        <h1 className="text-center md:text-4xl text-xl px-3">Blog</h1>
      </div>

      <div className="mt-16 lg:mt-18 grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 ">
        {productData.map((item) => (
          <BlogItem key={item.id} id={item.id} title={item.title} img={item.img} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
