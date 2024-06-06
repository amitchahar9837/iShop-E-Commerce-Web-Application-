import React, { useEffect, useState } from "react";
import ProductData from "../data/ProductData";
import storeHeaderImg from "../assets/images/Products/iPhone 10 pro.png";
import { FaSearch } from "react-icons/fa";
import ProductList from "../shared/ProductList";
import Helmet from "../shared/Helmet";
import PagesHeader from "../Components/PagesHeader/PagesHeader";
const Store = () => {
  const [products, setProducts] = useState(ProductData);

  const hadleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "mobile") {
      const filteredProducts = ProductData.filter(
        (item) => item.category === "mobile"
      );
      setProducts(filteredProducts);
    }
    if (filterValue === "wireless") {
      const filteredProducts = ProductData.filter(
        (item) => item.category === "wireless"
      );
      setProducts(filteredProducts);
    }
    if (filterValue === "entertainment") {
      const filteredProducts = ProductData.filter(
        (item) => item.category === "entertainment"
      );
      setProducts(filteredProducts);
    }
    if (filterValue === "mac") {
      const filteredProducts = ProductData.filter(
        (item) => item.category === "mac"
      );
      setProducts(filteredProducts);
    }
    if (filterValue === "ipad") {
      const filteredProducts = ProductData.filter(
        (item) => item.category === "ipad"
      );
      setProducts(filteredProducts);
    }
    if (filterValue === "accessories") {
      const filteredProducts = ProductData.filter(
        (item) => item.category === "accessories"
      );
      setProducts(filteredProducts);
    }
  };
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    const searchedProduct = ProductData.filter((item) =>
      item.productName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProducts(searchedProduct);
  };
  const handleSort = (e) =>{
    const sortValue = e.target.value;
    const productArr = products.map((item)=>item.currentPrice);
    if(sortValue === 'ascending'){
      const sortedProductsArr = productArr.sort((a,b) =>{return a-b})
      const sortedProducts = products.filter((item,index)=>(
          console.log(item.currentPrice, sortedProductsArr[index])
      ));
      console.log(sortedProducts);
    }else if(sortValue === 'descending'){
      const sortedProducts = productArr.sort((a,b) =>{return b-a})
      console.log(sortedProducts)
    }
  }
  useEffect(()=>{
    window.scrollTo(0,0);
  },[ProductData])
  return (
    <Helmet title={"Store"}>
      <div className="dark:bg-gray-900 dark:text-white duration-200 py-2">
        <div className="container">
          {/* Store Header */}
          <div className="flex flex-col items-center gap-8 py-3">
            <div className="flex flex-col gap-1 items-center">
              <h1 className="text-2xl md:text-5xl font-bold text-center">
                The best deals you love Right here at
              </h1>
              <h1 className="text-2xl md:text-5xl font-bold text-gray-400">
                iShop
              </h1>
            </div>
            <div className="hidden md:flex gap-2 items-center my-10 ">
              <img
                src={storeHeaderImg}
                alt=""
                className="h-[280px] mt-[-5rem] "
              />
              <img src={storeHeaderImg} alt="" className="h-[280px] " />
              <img
                src={storeHeaderImg}
                alt=""
                className="h-[280px] mt-[-5rem] "
              />
              <img src={storeHeaderImg} alt="" className="h-[280px] " />
            </div>
            {/* Pages Header */}
            <PagesHeader/>
          </div>
          {/* Filter, Sort, Search */}
          <div className="grid grid-cols-1 lg:grid-cols-2 py-8 gap-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 justify-between">
              <div className="">
                <select
                  onClick={hadleFilter}
                  className="px-2 py-2 md:px-5 border border-gray-400 dark:bg-gray-900 dark:text-white focus:outline-none rounded-md"
                >
                  <option>Filter By Category</option>
                  <option value="mobile">Mobile</option>
                  <option value="wireless">Wireless</option>
                  <option value="mac">Mac</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="ipad">iPad</option>
                  <option value="accessories">Accesories</option>
                </select>
              </div>

              <div className="md:text-end lg:text-start">
                <select onClick={handleSort} className="px-2 py-2 md:px-5 border border-gray-400 dark:bg-gray-900 dark:text-white focus:outline-none rounded-md">
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div className="flex justify-between items-center border border-gray-400 dark:bg-gray-900 dark:text-white rounded-md">
                <input
                  onChange={handleSearch}
                  type="text"
                  placeholder="Search Products..."
                  className="text-lg bg-transparent border-none outline-none w-full px-3 py-1 lg:py-0"
                />
                <span>
                  <FaSearch className="mx-2 opacity-50" />
                </span>
              </div>
            </div>
          </div>
          {/* Store Products */}
          {products.length === 0 ? (
            <h1 className="text-center text-2xl font-bold">
              No Productst are found!
            </h1>
          ) : (
            <ProductList data={products} mb={"5rem"} />
          )}
        </div>
      </div>
    </Helmet>
  );
};

export default Store;
