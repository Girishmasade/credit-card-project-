import React from "react";
import { assets, cardData } from "../assets/assets.js";


const HeroSection = () => {
  return (
    <div className="border-black border-b-6">
      <div className="container mx-auto mt-10 px-6 lg:py-28 py-10">
        <div className="grid lg:grid-cols-2 gap-12 ">
          <div className="flex flex-col items-start gap-3">
            <h1 className="font-extrabold max-w-[500px] text-5xl leading-tight tracking-wide">
              Discover the Perfect Credit Card for You
            </h1>
            <p className="text-xl font-medium pt-2 tracking-wider leading-relaxed max-w-[680px]">
            Embark on your financial journey with Amazing Credit Cards - where the perfect card tailored to your needs awaits discovery.
            </p>
            <button className="pt-2 border p-2 bg-yellow-400 border-black border-b-8 rounded-md text-lg w-[200px]">Explore &#8594;</button>
          </div>

          <div className="flex justify-end pt-0">
            <img src={assets.hero} alt="" />
          </div>
        </div>
        <div className="flex flex-wrap gap-7 justify-center pt-11 ">
           {
            cardData.map((item, index) => (
                <div className="border-2 border-black border-b-8 flex flex-col items-center bg-white border-brutal-sm p-2" key={index}>
                    <img src={item.img} alt="" width={50} className="h-6 lg:h-8 min-w-20 object-contain"/>
                    <p>{item.title}</p>
                </div>
            ))
           }
        </div>
      </div>
    </div>
  );
};

export default HeroSection;