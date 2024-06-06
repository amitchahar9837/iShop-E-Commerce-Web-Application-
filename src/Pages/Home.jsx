import React, { useEffect, useState } from "react";
import Hero from "../Components/Slider/Slider";
import ProductData from "../data/ProductData";
import Button from "../shared/Button";
import { BannerData, BannerData2 } from "../data/BannerData";
import Banner from "../Components/Banner/Banner";
import ProductList from "../shared/ProductList";
import Service from "../Components/Services/Service";
import Helmet from "../shared/Helmet";
const Home = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  useEffect(() => {
    const filteredLatestProducts = ProductData.filter(
      (item) =>
        item.category === "mobile" ||
        item.category === "wireless" ||
        item.category === "entertainment"
    );
    const filteredBestSalesProducts = ProductData.filter(
      (item) =>
        item.category === "mac" ||
        item.category === "watch" ||
        item.category === "ipad" ||
        item.category === "accessories"
    );
    setLatestProducts(filteredLatestProducts);
    setBestSalesProducts(filteredBestSalesProducts);
  }, []);
  return (
    <Helmet title={"Home"}>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden pt-2">
        <Hero />
        {/* Latest Product Section */}
        <div>
          <ProductList
            data={latestProducts}
            title={"Latest Products"}
            subtitle={"Explore the Latest Products"}
            mb={"5rem"}
          />
          <div className="flex justify-center items-center">
            <Button
              text={"See More"}
              textColor={"text-white"}
              bgColor={"bg-black"}
              path={"/store"}
            />
          </div>
        </div>
        <Banner data={BannerData} />

        {/* Best Sales Products */}
        <div>
          <ProductList
            data={bestSalesProducts}
            title={"Best Sales Products"}
            subtitle={"Explore the Best Sales Products"}
            mb={"5rem"}
          />
          <div className="flex justify-center items-center">
            <Button
              text={"See More"}
              textColor={"text-white"}
              bgColor={"bg-black"}
              path={"/store"}
            />
          </div>
        </div>
        <Banner data={BannerData2} />
        <Service />
      </div>
    </Helmet>
  );
};

export default Home;
