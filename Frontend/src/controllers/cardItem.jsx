import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ id, img, title }) => {
  return (
    <div className="container md:mx-auto pt-20">
    
      <div className="border-4 border-b-8 hover:shadow-xl shadow-black border-black flex items-center justify-center md:h-36 h-44 rounded-md md:w-[300px]">
          <Link to={`/issuers/${id}`}>
            <img src={img} alt="" className="mx-auto w-20 pb-4" />
            <h1 className="text-center font-semibold text-xl">{title}</h1>
          </Link>



      </div>
    </div>
  );
};

export default CardItem;
