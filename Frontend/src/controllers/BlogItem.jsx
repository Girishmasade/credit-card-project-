import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ id, img, title }) => {
  return (
    <div className="flex flex-wrap justify-center">
      <Link to={`/blog/${id}`} className="block max-w-sm">
        <div className="flex w-[400px] flex-col p-4 gap-4 border rounded-md border-b-4 border-black items-center text-center shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={img}
            alt={`Blog title ${title}`}
            className="w-full object-cover rounded-md"
          />
          <h1 className="text-lg text-center font-medium ">
           {title.substring(0, 60)}...
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;
