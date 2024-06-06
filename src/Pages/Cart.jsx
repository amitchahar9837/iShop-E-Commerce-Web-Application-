import React from "react";
import Helmet from "../shared/Helmet";
import DOWNARROW from "../assets/images/SVGIcons/caret-down-solid.svg";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../shared/Button";
const Cart = () => {
  const cartData = useSelector((state) => state.cart.cartItem);
  const cartSliceData = useSelector((state) => state.cart);
  
  const subPrice= cartSliceData.discountPrice[cartSliceData.discountPrice.length - 1];
  const totalPrice = cartSliceData.TotalAmount[cartSliceData.TotalAmount.length - 1];

  return (
    <Helmet title={"My Cart"}>
      <div className="dark:bg-gray-900 dark:text-white">
        <h1 className="text-center bg-gray-300 text-3xl font-semibold py-1 md:py-2 dark:text-black">
          My Cart
        </h1>
        <div className="lg:container">
          <div className="flex flex-col md:flex-row gap-4 py-2">
            {cartData.length <= 0 ? (
              <div className="flex flex-col gap-5 items-center w-[100%] mt-5">
                <h1 className="text-sm md:text-md lg:text-2xl font-bold">Cart is Empty :)</h1>
                <Button text="Shop Now" bgColor={'bg-primary'} textColor={'text-white'} path={'/store'}></Button>
              </div>
            ) : (
              <div className="w-[100%] md:w-[65%] flex flex-col gap-2 p-1 md:py-3 h-auto md:h-[80vh] overflow-y-scroll no-scrollbar">
                {cartData.map((item) => (
                  <div
                    className="flex gap-2 md:gap-6 mb-4 md:mb-6 lg:mb-8"
                    key={item.id}
                  >
                    <div className="flex flex-col gap-3 items-center">
                      <Link to={`/store/${item.id}`}>
                        <img
                          src={item.image}
                          alt=""
                          className="w-[120px] md:w-[200px] lg:w-[250px] "
                        />
                      </Link>
                      <div className="hidden md:flex items-center gap-2">
                        <div className="py-2 px-3 cursor-pointer font-bold text-xl border-2 border-gray-300 ">
                          -
                        </div>
                        <div className="py-2 px-5 font-bold text-xl border-2 border-gray-300 ">
                          {item.qty}
                        </div>
                        <div className="py-2 px-3 cursor-pointer font-bold text-xl border-2 border-gray-300 ">
                          +
                        </div>
                      </div>
                      <div className="flex items-center gap-1 md:hidden py-1 px-2 border border-gray-400 cursor-pointer">
                        <p>Qty:</p>
                        <span>{item.qty}</span>
                        <img src={DOWNARROW} className="w-[12px] dark:invert " />
                      </div>
                    </div>
                    {/* Product Details */}
                    <div className="flex flex-col">
                      <Link to={`/store/${item.id}`}>
                        <h2 className="text-lg md:text-2xl lg:text-4xl font-bold">
                          {item.productName}
                        </h2>
                      </Link>

                      <div className="flex items-center mt-2 text-xl text-secondary">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalf />
                        <p className="text-black dark:text-white font-semibold">
                          ({item.review.length})
                        </p>
                      </div>
                      <div className="flex items-center gap-1 my-2 md:gap-3">
                        <h3 className="text-secondary text-sm  md:text-2xl font-semibold">
                          66% off
                        </h3>
                        <h3 className="text-gray-400 text-sm  md:text-2xl font-semibold line-through">
                          ${item.initialPrice}
                        </h3>
                        <h3 className="text-black dark:text-white text-sm  md:text-2xl font-bold">
                          {item.price}
                        </h3>
                      </div>
                      <div className="flex mt-5 gap-2">
                        <button className="border border-gray-400 py-1 md:py-2 px-2 md:px-4 text-sm md:text-md lg:text-xl font-semibold">
                          Save for later
                        </button>
                        <button className="border border-gray-400 py-1 md:py-2 px-2 md:px-4 text-sm md:text-md lg:text-xl font-semibold">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* cart invoice */}
            {cartData.length != 0 ? (
              <div className=" w-100% md:w-[35%] flex flex-col p-2">
                <h2 className="text-lg font-semibold border-b border-gray-200 py-1 mb-2">
                  Price Details
                </h2>
                <table>
                  <tr>
                    <td className="py-2">Price ({cartData.length} items)</td>
                    <td className="text-right">${subPrice} </td>
                  </tr>
                  <tr>
                    <td className="py-2">Discount</td>
                    <td className="text-right">-${subPrice - totalPrice }</td>
                  </tr>
                  <tr>
                    <td className="py-2">Delivery Charges</td>
                    <td className="text-right">$0</td>
                  </tr>
                  <tr className="border-t border-b border-dashed border-gray-500">
                    <td className="py-2">Total Amount</td>
                    <td className="text-right">${totalPrice} </td>
                  </tr>
                  <tr>
                    <td className="py-4">${totalPrice} </td>
                    <td className="text-right">
                      <button className="border border-gray-500 py-1 px-2">
                        Place Order
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
