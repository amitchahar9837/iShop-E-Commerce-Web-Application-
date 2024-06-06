import React from "react";
import ServiceData from "../../data/ServiceData";

const Service = () => {
  return (
    <div>
      <div className="container my-8 md:my-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 items-center">
          
        {ServiceData.map((data) => (
            <div key={data.id} className="flex flex-col items-center  gap-4">
              <img src={data.img} alt="" className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] object-contain"/>
              <div>
                <h1 className="lg:text-2xl font-bold text-center my-2">{data.title}</h1>
                <h1 className="text-gray-400 text-md my-2 text-center">{data.subtitle}</h1>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Service;
