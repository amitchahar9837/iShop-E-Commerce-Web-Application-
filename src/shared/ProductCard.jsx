import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/CartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem({
      id:item.id,
      productName:item.productName,
      image:item.image,
      price:item.currentPrice,
      review:item.reviews,
      initialPrice:item.initialPrice
    }));
    toast.success("Item added to the cart!");
    console.log(item)
  };
  return (
    <>
      {/* Card Section */}
      <div className="flex flex-col justify-center gap-2 rounded-md bg-white dark:bg-gray-900 dark:hover:drop-shadow-[0px_2px_2px_rgba(255,255,255,0.9)] border border-1 border-gray-400 w-[300px] md:w-[350px] h-[400px]  cursor-pointer hover:drop-shadow-[0px_2px_2px_rgba(0,0,0,0.8)] duration-200 ">
        {/* product Image */}
        <div className="w-full grid place-items-center">
          <Link to={`/store/${item.id}`}>
            <img
              src={item.image}
              alt=""
              className="w-[220px] h-[200px] object-contain drop-shadow-[0px_2px_6px_rgba(0,0,0,0.8)] "
            />
          </Link>
        </div>
        {/* Product Name */}
        <div className="flex w-full justify-center items-center">
          <Link
            to={`/store/${item.id}`}
            className="text-xl font-bold text-center"
          >
            {item.productName}
          </Link>
        </div>
        {/* Product Price */}
        <div className="flex w-full justify-center items-center gap-4">
          <h2 className="text-secondary text-2xl font-semibold">
            ${item.currentPrice}
          </h2>
          <h2 className="text-gray-400 text-2xl font-semibold line-through">
            ${item.initialPrice}
          </h2>
        </div>
        {/* Rating */}
        <div className="flex justify-center items-center gap-2 my-1">
          <FaStar className="text-2xl" />
          <FaStar className="text-2xl" />
          <FaStar className="text-2xl" />
          <FaStar className="text-2xl" />
          <FaStarHalfAlt className="text-2xl" />
        </div>
        {/* Add to Cart Btn */}
        <div className="flex justify-center items-center">
          <button
            className="font-semibold border border-gray-500 px-8 py-2 cursor-pointer hover:bg-secondary hover:text-white hover:border-transparent duration-200"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
