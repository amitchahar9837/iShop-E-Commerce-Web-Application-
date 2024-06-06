import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductData from "../data/ProductData";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/CartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Helmet from "../shared/Helmet";
import ProductList from '../shared/ProductList'
const ProductDetails = () => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem({
      id:product.id,
      productName:product.productName,
      image:product.image,
      price:product.currentPrice,
      review:product.reviews,
      initialPrice:product.initialPrice
    }));
    toast.success("Item added to the cart!");
  };

  const { id } = useParams();
  const product = ProductData.find((item) => item.id == id);
  const {
    image,
    currentPrice,
    initialPrice,
    productName,
    shortDesc,
    description,
    avgRating,
    reviews,
    category,
  } = product;

  useEffect(()=>{
    window.scrollTo(0,0);
  },[ProductData])
  const [tab,setTab] = useState('desc');
  const [rating, setRating] = useState(null);
  const relatedProducts = ProductData.filter(item=>item.category === category);
  const relatedProducts2 = relatedProducts.filter(item => item.id != id);
  return (
    <Helmet title={productName}>
      <div className="dark:bg-gray-900 dark:text-white duration-200">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="flex items-center justify-center py-4">
              <img
                src={image}
                alt=""
                className="h-[380px] lg:h-[400px] drop-shadow-[2px_2px_6px_rgba(0,0,0,0.4)] dark:drop-shadow-[2px_2px_6px_rgba(255,255,255,0.4)] "
              />
            </div>
            <div className="flex flex-col gap-4 py-4">
              <h2 className="text-4xl font-bold">{productName} </h2>
              <div className="flex gap-4 items-center">
                <div className="flex gap-1 text-secondary text-xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </div>
                <p className="font-bold text-lg">
                  (<span className="text-secondary">{avgRating}</span>) Rating
                </p>
              </div>
              <div className="flex gap-4">
                <p className="text-secondary text-2xl font-semibold">
                  ${currentPrice}{" "}
                </p>
                <p className="text-gray-400 text-2xl font-semibold line-through">
                  ${initialPrice}{" "}
                </p>
              </div>
              <p className="text-gray-500 text-[1.1rem] ">{shortDesc} </p>
              <div className="flex gap-8 my-8">
                <button
                  onClick={addToCart}
                  className="font-semibold border border-gray-500 px-8 py-2 cursor-pointer hover:bg-secondary hover:text-white hover:border-transparent duration-200"
                >
                  Add to Cart
                </button>
                <button className="font-semibold border border-gray-500 px-8 py-2 cursor-pointer hover:bg-primary hover:text-white hover:border-transparent duration-200">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center text-lg  py-2">
            <h2 onClick={()=>setTab('desc')} className={tab === 'desc' ? `border-b-2 border-gray-600 py-1 cursor-pointer`:`cursor-pointer py-1`}>Description</h2>
            <h2 onClick={()=>setTab('rev')} className={tab === 'rev' ? `border-b-2 border-gray-600 py-1 cursor-pointer`:`cursor-pointer py-1`}>Reviews ({reviews.length}) </h2>
          </div>
          {
            tab === 'desc' ? (
              <div className="py-2 my-6">
                <p className="text-md text-gray-600">{description}</p>
              </div>
            ) :(
              <div className=" my-6">
                <ul>
                  {
                    reviews.map((item,index) => (
                      <li key={index} className="my-2">
                        <h4 className="text-md font-semibold">John Doe</h4>
                        <span className="text-secondary font-semibold">{item.rating} (rating)</span>
                        <p className="my-3">{item.text} </p>
                      </li>
                    ))
                  }
                </ul>
              </div>
            )
          }

          <div>
            <form action="" className="w-[70%] mx-auto my-10 ">
              <h3 className="text-2xl font-bold mb-4">Leave your experience</h3>
              <input className="w-full border border-gray-600 p-2 text-[1rem] focus:outline-none my-1 bg-transparent " type="text" placeholder="Enter name" />
              <div className="flex items-center flex-wrap gap-8 text-secondary text-xl my-1 " >
                <span onClick={()=>setRating(1)} className="flex items-center gap-2 cursor-pointer">1 <FaStar/> </span>
                <span onClick={()=>setRating(2)} className="flex items-center gap-2 cursor-pointer">2 <FaStar/> </span>
                <span onClick={()=>setRating(3)} className="flex items-center gap-2 cursor-pointer">3 <FaStar/> </span>
                <span onClick={()=>setRating(4)} className="flex items-center gap-2 cursor-pointer">4 <FaStar/> </span>
                <span onClick={()=>setRating(5)} className="flex items-center gap-2 cursor-pointer">5 <FaStar/> </span>
              </div>
              <textarea className="w-full border border-gray-600 px-2 py-1 text-[1rem] focus:outline-none my-1 bg-transparent" rows={4} placeholder="Review message..." />
              <button className="border px-8 py-2 border-gray-600 font-semibold text-lg my-1 ">Submit</button>
            </form>
          </div>

          {/* Related Products */}
          <div className="py-5">
            <h2 className="text-2xl font-bold text-gray-700 dark:text-white">You might also like</h2>
            {relatedProducts2.length == 0 ? <h3 className="text-xl text-center font-bold my-5">No related products :)</h3> : <ProductList data={relatedProducts2} mb={'4rem'}/>}
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default ProductDetails;
