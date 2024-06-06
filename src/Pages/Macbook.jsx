import React, { useEffect, useState } from "react";
import Helmet from "../shared/Helmet";
import MacbookData from "../data/Macbookdata";
import { Link } from "react-router-dom";
import ProductList from "../shared/ProductList";
import ProductData from "../data/ProductData";
const Macbook = () => {
  const [newArrivals,setNewArrivals] = useState([]);
  useEffect(()=>{
    const filterdProduct = ProductData.filter(product => product.category === 'mac');
    setNewArrivals(filterdProduct);
  },[])
  return (
    <Helmet title={"Macbook"}>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        {MacbookData.map((item) => (
          <div className="container flex sm:flex-row flex-col justify-center items-center">
            <div className="flex flex-col gap-5 py-2">
              <h2 className="text-4xl font-medium">{item.product}</h2>
              <h4 className="text-md font-normal w-[78%] ">{item.shortDesc}</h4>
              <div className="flex gap-3">
                <Link
                  to={`/store/${item.id}`}
                  className="dark:border-white border border-black px-3 py-1 rounded-lg font-medium"
                >
                  Read More
                </Link>
                <Link className="dark:bg-white dark:text-black text-white bg-black px-3 py-1 rounded-lg font-medium">
                  Add to cart
                </Link>
              </div>
            </div>
            <div>
              <img src={item.image} alt="" />
            </div>
          </div>
        ))}

        <div className="container">
          <ProductList
            data={newArrivals}
            title={"New Arrivals"}
            subtitle={"Explore the new arrivals Products"}
            mb={"5rem"}
          />
        </div>
      </div>
    </Helmet>
  );
};

export default Macbook;
