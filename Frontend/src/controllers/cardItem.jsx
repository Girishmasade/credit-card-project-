import React from "react";
import { Link } from "react-router-dom";

export const CardItem = ({ id, img, title }) => {
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

// const CategoriesItemData = ({ id, img, title }) => {
//   return (
//     <div className="container md:mx-auto pt-20">
    
//       <div className="container">
//           <Link to={`/categories/${id}`}>
//           <div className="flex flex-col gap-2 border-4 border-black md:w-[300px] mx-auto md:h-[250px] rounded-md border-b-8">
//                 <img src={img} alt="" className='mx-auto md:w-44 border border-black m-3 rounded-md'/>
//                 <h1 className='text-center font-semibold'>{title}</h1>
//               </div>
//           </Link>
//       </div>
//     </div>
//   );
// };


// export default CategoriesItemData;
