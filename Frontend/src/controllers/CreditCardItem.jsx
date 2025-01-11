import React from "react";
import { Link } from "react-router-dom";

const CreditCardDetail = ({ id, img, title, rating, p1, p2, p3 }) => {
  return (
    <div className="container mx-auto md:pt-10">
    
      <div className="border-4 border-b-8 hover:shadow-xl shadow-black border-black flex items-center justify-center rounded-md">
          <Link to={`/card/${id}`}>
            <img src={img} alt="" className="h-[180px] mx-auto object-contain pt-5" />
            <img src={rating} alt="" className="mx-auto w-[200px] object-contain" />
            <h1 className="text-center font-semibold text-xl md:w-[300px]">{title}</h1>
            <div className="flex flex-col gap-2 items-center text-start pt-4">
                <p>{p1}</p>
                <p>{p2}</p>
                <p>{p3}</p>
            </div>
            <div className="flex justify-center items-center text-center pt-6 pb-7">
                <button className="border border-black rounded-md p-1 pl-4 pr-4 border-b-8 bg-yellow-500 hover:bg-yellow-400">Apply now</button>
            </div>
          </Link>
      </div>
    </div>
  );
};

export default CreditCardDetail;
